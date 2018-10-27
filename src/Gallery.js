import PropTypes from 'prop-types';
import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import Engine from './Engine';
import ViewableMonitor from './ViewableMonitor';
import style from './gallery.css';

const CONTAINER_WIDTH = 1000;
const MAX_HEIGHT = 250;
const MIN_HEIGHT = 200;
const MAX_WIDTH = 250;
const GUTTER_IN_PERCENT = 1;

class Gallery extends Component {
    static propTypes = {
        imageRenderer: PropTypes.func.isRequired,
        images: PropTypes.array.isRequired,
        containerWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        minHeight: PropTypes.number,
        maxWidth: PropTypes.number,
        gutterInPercent: PropTypes.number,
        className: PropTypes.string,
        columnClassName: PropTypes.string,
    };

    static defaultProps = {
        containerWidth: CONTAINER_WIDTH,
        maxHeight: MAX_HEIGHT,
        minHeight: MIN_HEIGHT,
        maxWidth: MAX_WIDTH,
        gutterInPercent: GUTTER_IN_PERCENT,
        className: '',
        columnClassName: '',
    };

    state = {
        columns: [],
        rows: [],
    };

    constructor(props) {
        super(props);

        this.engine = new Engine({
            containerWidth: props.containerWidth,
            gutterInPercent: props.gutterInPercent,
            minHeight: props.minHeight,
            maxHeight: props.maxHeight,
        });
    }

    componentWillMount() {
        const {images, containerWidth, maxWidth, gutterInPercent, className, columnClassName, rowClassName} = this.props;
        const columnCount = containerWidth / maxWidth;
        this.setState({
            columns: this.engine.buildColumns(images, columnCount),
            rows: this.engine.buildRows(images),
            containerWidth,
            gutterInPercent,
            className,
            columnClassName,
            rowClassName,
            columnCount,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!equal(this.props, nextProps)) {
            this.engine.setContainerWidth(nextProps.containerWidth);
            this.engine.setGutterInPercent(nextProps.gutterInPercent);
            this.engine.setMinHeight(nextProps.minHeight);
            this.engine.setMaxHeight(nextProps.maxHeight);
            this.setState({
                containerWidth: nextProps.containerWidth,
                gutterInPercent: nextProps.gutterInPercent,
                className: nextProps.className,
                columnClassName: nextProps.columnClassName,
                rowClassName: nextProps.rowClassName,
                rows: this.engine.buildRows(
                    nextProps.images,
                ),
                columns: this.engine.buildColumns(
                    nextProps.images,
                    nextProps.containerWidth / nextProps.maxWidth,
                ),
                columnCount: nextProps.containerWidth / nextProps.maxWidth,
            });
        }
    }

    renderMasonryGallery() {
        {columns.map((item, itemIndex) => {
                const placeholderHeight = 100 * item.height / item.width;
                return (
                    <div
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={`column-${item.src}-${itemIndex}`}
                        className={`${style['masonry-item']} ${columnClassName}`}
                        style={{
                            margin: `0 0 ${gutterInPercent}% ${gutterInPercent}%`,
                        }}
                    >
                        <ViewableMonitor>
                            {isViewable => imageRenderer({
                                ...item,
                                inView: isViewable,
                                placeholderHeight,
                            })}
                        </ViewableMonitor>
                    </div>
                );
            }
        )}
    }

    render() {
        const {imageRenderer} = this.props;
        const {columns, columnCount, rows, containerWidth, gutterInPercent, className, rowClassName, columnClassName} = this.state;
        return (
            <div
                className={`${style.container} ${className}`}
                style={{
                    columnCount,
                }}
            >
                {rows.map((el, rowIndex) => {
                    const row = el.row;
                    return (
                        /* eslint-disable-next-line react/no-array-index-key */
                        <div key={rowIndex} className={`${style.row} ${rowClassName}`}>
                            {row.map((column, columnIndex) => {
                                const newWidth = this.engine.calculateWidth(
                                    containerWidth, column, row, el.isIncomplete
                                );
                                const newHeight = this.engine.calculateHeight(
                                    containerWidth, column, row, el.isIncomplete
                                );
                                const newWidthInPercent = 100 * newWidth / containerWidth;
                                const placeholderHeight = 100 * newHeight / newWidth;
                                return (
                                    <div
                                        /* eslint-disable-next-line react/no-array-index-key */
                                        key={`column-${column.src}-${rowIndex}-${columnIndex}`}
                                        className={`${style.column} ${columnClassName}`}
                                        style={{
                                            width: el.isIncomplete
                                                ? `${newWidth}px`
                                                : `${newWidthInPercent}%`,
                                            maxWidth: el.isIncomplete
                                                ? `${newWidthInPercent}%`
                                                : 'auto',
                                            margin: row.length === columnIndex + 1
                                                ? `0 0 ${gutterInPercent}% 0`
                                                : `0 ${gutterInPercent}% ${gutterInPercent}% 0`,

                                        }}
                                    >
                                        {imageRenderer({
                                            ...column,
                                            newWidth,
                                            newHeight,
                                            newWidthInPercent,
                                            placeholderHeight,
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Gallery;
