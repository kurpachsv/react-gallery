class Engine {
    constructor({containerWidth, gutterInPercent, minHeight, maxHeight}) {
        this.containerWidth = containerWidth;
        this.gutterInPercent = gutterInPercent;
        this.minHeight = minHeight;
        this.maxHeight = maxHeight;
    }

    setContainerWidth(containerWidth) {
        this.containerWidth = containerWidth;
    }

    setGutterInPercent(gutterInPercent) {
        this.gutterInPercent = gutterInPercent;
    }

    setMinHeight(minHeight) {
        this.minHeight = minHeight;
    }

    setMaxHeight(maxHeight) {
        this.maxHeight = maxHeight;
    }

    static _getRowMinHeight(items) {
        return Math.min.apply(null, (items.map(item => item.height)));
    }

    _normalizeByHeight(items) {
        let result = [];
        items.forEach(el => {
            result.push(Engine._resizeByHeight(el, this.minHeight));
        });
        return result;
    }

    static _getRowWidth(items) {
        return items.map(item => item.width)
            .reduce((a, b) => a + b, 0);
    }

    static _resizeByHeight(item, newHeight) {
        const aspectRatio = item.width / item.height;
        return {
            ...item,
            width: aspectRatio * newHeight,
            height: newHeight,
        };
    }

    _buildRow(items) {
        let row = [];
        let totalRowWidth = 0;
        while (items.length > 0 && totalRowWidth < this.containerWidth) {
            const column = items.shift();
            row.push(column);
            totalRowWidth += column.width;
        }
        return {
            row,
            isIncomplete: totalRowWidth < this.containerWidth,
        };
    }

    getNormalizedItems(items) {
        items = items.map(item => {
            return {
                ...item,
                height: item.height,
                width: item.width,
                src: item.src,
            };
        });
        return this._normalizeByHeight(items);
    }

    calculateHeight(containerWidth, item, row, isLastRow) {
        const rowWidth = Engine._getRowWidth(row);
        const ratio = containerWidth / rowWidth;
        const height = Engine._getRowMinHeight(row) * ratio * (100 - (row.length - 1) * this.gutterInPercent) / 100;
        if (isLastRow) {
            return height > this.maxHeight ? this.maxHeight : height;
        }
        return height;
    }

    calculateWidth(containerWidth, item, row, isLastRow) {
        const itemAfterResize = Engine._resizeByHeight(
            item, this.calculateHeight(containerWidth, item, row, isLastRow)
        );
        return itemAfterResize.width;
    }

    buildRows(images) {
        let rows = [];
        const items = this.getNormalizedItems(images);
        while (items.length > 0) {
            const row = this._buildRow(items);
            rows.push(row);
        }
        return rows;
    }
}

export default Engine;
