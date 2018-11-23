import PropTypes from 'prop-types';
import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import Engine, {COLUMN_MAX_HEIGHT, COLUMN_MAX_WIDTH, COLUMNS_MAX_COUNT, GUTTER_IN_PERCENT} from './Engine';
import {defaultRenderer} from './Renderer';
import ViewMonitor from './ViewMonitor';
import style from './gallery.css';

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.engine = new Engine();
    }

    static propTypes = {
        imageRenderer: PropTypes.func,
        images: PropTypes.array.isRequired,
        columnsMaxCount: PropTypes.number,
        columnMaxWidth: PropTypes.number,
        columnMaxHeight: PropTypes.number,
        gutterInPercent: PropTypes.number,
        className: PropTypes.string,
        columnClassName: PropTypes.string,
        rowClassName: PropTypes.string,
        enableMasonry: PropTypes.bool,
        disableObserver: PropTypes.bool,
        disableActualImage: PropTypes.bool,
    };

    static defaultProps = {
        imageRenderer: defaultRenderer,
        columnsMaxCount: COLUMNS_MAX_COUNT,
        columnMaxWidth: COLUMN_MAX_WIDTH,
        columnMaxHeight: COLUMN_MAX_HEIGHT,
        gutterInPercent: GUTTER_IN_PERCENT,
        className: '',
        columnClassName: '',
        rowClassName: '',
        enableMasonry: false,
        disableObserver: false,
        disableActualImage: false,
    };

    state = {
        columns: [],
        rows: [],
    };

    componentWillMount() {
        const {
            images,
            columnsMaxCount,
            columnMaxWidth,
            columnMaxHeight,
            gutterInPercent,
            enableMasonry,
            disableObserver,
            disableActualImage,
            className,
            columnClassName,
            rowClassName,
        } = this.props;

        this.engine
            .setImages(images)
            .setMaxColumnsCount(columnsMaxCount)
            .setColumnMaxWidth(columnMaxWidth)
            .setColumnMaxHeight(columnMaxHeight)
            .setGutterInPercent(gutterInPercent);

        this.setState({
            columns: this.engine.buildColumns(),
            rows: this.engine.buildRows(),
            columnsMaxCount,
            columnMaxWidth,
            columnMaxHeight,
            gutterInPercent,
            enableMasonry,
            disableObserver,
            disableActualImage,
            className,
            columnClassName,
            rowClassName,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!equal(this.props, nextProps)) {

            this.engine
                .setImages(nextProps.images)
                .setMaxColumnsCount(nextProps.columnsMaxCount)
                .setColumnMaxWidth(nextProps.columnMaxWidth)
                .setColumnMaxHeight(nextProps.columnMaxHeight)
                .setGutterInPercent(nextProps.gutterInPercent);

            this.setState({
                columns: this.engine.buildColumns(),
                rows: this.engine.buildRows(),
                columnsMaxCount: nextProps.columnsMaxCount,
                columnMaxWidth: nextProps.columnMaxWidth,
                columnMaxHeight: nextProps.columnMaxHeight,
                gutterInPercent: nextProps.gutterInPercent,
                enableMasonry: nextProps.enableMasonry,
                disableObserver: nextProps.disableObserver,
                disableActualImage: nextProps.disableActualImage,
                className: nextProps.className,
                columnClassName: nextProps.columnClassName,
                rowClassName: nextProps.rowClassName,
            });
        }
    }

    renderMasonryGallery({
        className, columnClassName, imageRenderer, disableObserver, disableActualImage, columns,
    }) {
        return (
            <div
                className={`${style.container} ${className}`}
            >
                {columns.map((item, columnIndex) => (
                    <div
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={`column-${columnIndex}`}
                        className={`${style.item} ${columnClassName}`}
                        style={{
                            width: `${100 / this.engine.getMaxColumnsCount() - this.engine.getGutterInPercent()}%`,
                            maxWidth: 'auto',
                            margin: `0 ${this.engine.getGutterInPercent()}% 0 0`,
                        }}
                    >
                        {
                            item.images.map((image, imageIndex) => {
                                const placeholderHeight = 100 * image.height / image.width;
                                return (
                                    <div
                                        /* eslint-disable-next-line react/no-array-index-key */
                                        key={`image-${image.src}-${columnIndex}-${imageIndex}`}
                                        style={{
                                            margin: `0 0 ${
                                                this.engine.getGutterInPercent() * this.engine.getMaxColumnsCount()
                                            }% 0`,
                                        }}
                                    >
                                        <ViewMonitor
                                            disableObserver={disableObserver}
                                        >
                                            {isViewable => imageRenderer({
                                                ...image,
                                                placeholderHeight,
                                                visible: !disableActualImage && isViewable,
                                                enableMasonry: true,
                                            })}
                                        </ViewMonitor>
                                    </div>
                                );
                            })
                        }
                    </div>
                ))}
            </div>
        );
    }

    renderGallery({
        className, rows, rowClassName, columnClassName, imageRenderer, disableObserver, disableActualImage,
    }) {
        return (
            <div
                className={`${style.container} ${className}`}
            >
                {rows.map((el, rowIndex) => {
                    const row = el.row;
                    return (
                        /* eslint-disable-next-line react/no-array-index-key */
                        <div key={rowIndex} className={rowClassName}>
                            {row.map((column, columnIndex) => {
                                const newWidth = this.engine.calculateWidth(
                                    column, row, el.isIncomplete
                                );
                                const newHeight = this.engine.calculateHeight(
                                    column, row, el.isIncomplete
                                );
                                const newWidthInPercent = 100 * newWidth / (this.engine.getMaxColumnsCount()
                                    * this.engine.getColumnsMaxWidth());
                                const placeholderHeight = 100 * newHeight / newWidth;
                                return (
                                    <div
                                        /* eslint-disable-next-line react/no-array-index-key */
                                        key={`column-${column.src}-${rowIndex}-${columnIndex}`}
                                        className={`${style.item} ${columnClassName}`}
                                        style={{
                                            width: el.isIncomplete
                                                ? `${newWidth}px`
                                                : `${newWidthInPercent}%`,
                                            maxWidth: el.isIncomplete
                                                ? `${newWidthInPercent}%`
                                                : 'auto',
                                            margin: row.length === columnIndex + 1
                                                ? `0 0 ${this.engine.getGutterInPercent()}% 0`
                                                : `0 ${
                                                    this.engine.getGutterInPercent()
                                                }% ${this.engine.getGutterInPercent()}% 0`,

                                        }}
                                    >
                                        <ViewMonitor disableObserver={disableObserver}>
                                            {isViewable => imageRenderer({
                                                ...column,
                                                newWidth,
                                                newHeight,
                                                newWidthInPercent,
                                                placeholderHeight,
                                                visible: !disableActualImage && isViewable,
                                                enableMasonry: false,
                                            })}
                                        </ViewMonitor>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        const {imageRenderer} = this.props;
        const {enableMasonry, ...rest} = this.state;
        return enableMasonry
            ? this.renderMasonryGallery({...rest, imageRenderer})
            : this.renderGallery({...rest, imageRenderer});
    }
}

export default Gallery;
