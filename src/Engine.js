export const COLUMNS_MAX_COUNT = 5;
export const COLUMN_MAX_WIDTH = 200;
export const COLUMN_MAX_HEIGHT = 200;
export const GUTTER_IN_PERCENT = 0.5;
export const DEFAULT_FIXED_SIZE = 200;
export const DEFAULT_FIXED_BOTTOM = 50;
export const DEFAULT_FIXED_GUTTER = 10;

class Engine {

    static getMinHeight(items) {
        return Math.min.apply(null,
            (items.map(item => item.height)));
    }

    static getRowWidth(items) {
        return items.map(item => item.width)
            .reduce((a, b) => a + b, 0);
    }

    static resizeByHeight(item, newHeight) {
        const aspectRatio = item.width / item.height;
        return {
            ...item,
            width: aspectRatio * newHeight,
            height: newHeight,
        };
    }

    static resizeByWidth(item, newWidth) {
        const aspectRatio = item.width / item.height;
        return {
            ...item,
            width: newWidth,
            height: newWidth / aspectRatio,
        };
    }

    setImages(images) {
        if (!images) {
            images = [];
        }
        this.images = images;
        return this;
    }

    setGutterInPercent(gutterInPercent) {
        if (!gutterInPercent || gutterInPercent < 0) {
            gutterInPercent = 0;
        }
        this.gutterInPercent = gutterInPercent;
        return this;
    }

    getGutterInPercent() {
        return this.gutterInPercent;
    }

    setMaxColumnsCount(maxColumnsCount) {
        if (!maxColumnsCount || maxColumnsCount < 0) {
            maxColumnsCount = COLUMNS_MAX_COUNT;
        }
        this.maxColumnsCount = maxColumnsCount;
        return this;
    }

    getMaxColumnsCount() {
        return this.maxColumnsCount;
    }

    setColumnMaxWidth(columnMaxWidth) {
        if (!columnMaxWidth || columnMaxWidth < 0) {
            columnMaxWidth = COLUMN_MAX_WIDTH;
        }
        this.columnMaxWidth = columnMaxWidth;
        return this;
    }

    getColumnsMaxWidth() {
        return this.columnMaxWidth;
    }

    setColumnMaxHeight(columnMaxHeight) {
        if (!columnMaxHeight || columnMaxHeight < 0) {
            columnMaxHeight = COLUMN_MAX_HEIGHT;
        }
        this.columnMaxHeight = columnMaxHeight;
        return this;
    }

    normalizeByHeight(items) {
        const minHeight = Engine.getMinHeight(items);
        let result = [];
        items.forEach(el => {
            result.push(Engine.resizeByHeight(el, minHeight));
        });
        return result;
    }

    normalizeByWidth() {
        const calculateHeight = (item) => {
            const itemAfterResize = Engine.resizeByWidth(
                item, calculateWidth(item)
            );
            return itemAfterResize.height;
        };
        const calculateWidth = (item) => {
            return item.width > this.columnMaxWidth ? this.columnMaxWidth : item.width;
        };

        let result = [];
        this.images.forEach(el => {
            result.push({...el, height: calculateHeight(el), width: calculateWidth(el)});
        });
        return result;

    }

    buildRow(items) {
        let row = [];
        let columnsCount = 0;
        while (items.length > 0 && columnsCount < this.maxColumnsCount) {
            const column = items.shift();
            row.push(column);
            columnsCount++;
        }
        return {
            row,
            isIncomplete: columnsCount < this.maxColumnsCount,
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
        return this.normalizeByHeight(items);
    }

    calculateHeight(item, row, isLastRow) {
        const rowWidth = Engine.getRowWidth(row);
        const ratio = this.maxColumnsCount * this.columnMaxWidth / rowWidth;
        const newHeight = Engine.getMinHeight(row) * ratio * (100 - (row.length - 1) * this.gutterInPercent) / 100;
        if (isLastRow) {
            return newHeight > this.columnMaxHeight ? this.columnMaxHeight : newHeight;
        }
        return newHeight;
    }

    calculateWidth(item, row, isLastRow) {
        const itemAfterResize = Engine.resizeByHeight(
            item, this.calculateHeight(item, row, isLastRow)
        );
        return itemAfterResize.width;
    }

    calculateFixedWidthInPercent(item, row) {
        return 100 / row.length - this.getGutterInPercent();
    }

    resizeColumnByFixedSize(item, row, fixedSize, fixedBottom) {
        item = Engine.resizeByHeight(
            item, item.height - (fixedBottom - (fixedSize - item.height))
        );
        if (item.height > fixedSize) {
            item = Engine.resizeByHeight(
                item, fixedSize,
            );
        }
        if (item.width > fixedSize) {
            item = Engine.resizeByWidth(
                item, fixedSize
            );
        }
        return item;
    }

    buildRows() {
        let rows = [];
        const items = this.getNormalizedItems(this.images);
        while (items.length > 0) {
            const row = this.buildRow(items);
            rows.push(row);
        }
        return rows;
    }

    buildColumns() {
        const columns = [];
        let order;
        const items = this.normalizeByWidth();
        for (let i = 0; i < this.maxColumnsCount; i++) {
            columns.push({images: [], order: i});
        }
        for (let i = 0; i < items.length; i++) {
            order = (i + 1) % this.maxColumnsCount === 0
                ? this.maxColumnsCount
                : (i + 1) % this.maxColumnsCount;
            columns[order - 1].images.push(items[i]);
            items[i].order = order;
        }
        return columns;
    }
}

export default Engine;
