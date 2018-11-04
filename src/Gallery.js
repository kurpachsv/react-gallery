import PropTypes from 'prop-types';
import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import Engine from './Engine';
import {defaultRenderer} from './Renderer';
import ViewableMonitor from './ViewableMonitor';
import style from './gallery.css';

const CONTAINER_WIDTH = 1000;
const MAX_HEIGHT = 250;
const MIN_HEIGHT = 200;
const MAX_WIDTH = 200;
const GUTTER_IN_PERCENT = 0.5;

class Gallery extends Component {
    static propTypes = {
        imageRenderer: PropTypes.func,
        images: PropTypes.array.isRequired,
        containerWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        minHeight: PropTypes.number,
        maxWidth: PropTypes.number,
        gutter: PropTypes.number,
        className: PropTypes.string,
        columnClassName: PropTypes.string,
        rowClassName: PropTypes.string,
        enableMasonry: PropTypes.bool,
        disableObserver: PropTypes.bool,
        disableActualImage: PropTypes.bool,
    };

    static defaultProps = {
        imageRenderer: defaultRenderer,
        containerWidth: CONTAINER_WIDTH,
        maxHeight: MAX_HEIGHT,
        minHeight: MIN_HEIGHT,
        maxWidth: MAX_WIDTH,
        gutter: GUTTER_IN_PERCENT,
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

    constructor(props) {
        super(props);

        this.engine = new Engine({
            containerWidth: props.containerWidth,
            gutterInPercent: props.gutter,
            minHeight: props.minHeight,
            maxHeight: props.maxHeight,
        });
    }

    componentWillMount() {
        const {
            images,
            containerWidth,
            maxWidth,
            gutter,
            className,
            columnClassName,
            rowClassName,
            enableMasonry,
            disableObserver,
            disableActualImage,
        } = this.props;
        const columnCount = Math.floor(containerWidth / maxWidth);
        this.setState({
            columns: Engine.buildColumns(images, columnCount, containerWidth),
            rows: this.engine.buildRows(images),
            containerWidth,
            gutter,
            className,
            columnClassName,
            rowClassName,
            columnCount,
            enableMasonry,
            disableObserver,
            disableActualImage,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!equal(this.props, nextProps)) {
            this.engine.setContainerWidth(nextProps.containerWidth);
            this.engine.setGutterInPercent(nextProps.gutter);
            this.engine.setMinHeight(nextProps.minHeight);
            this.engine.setMaxHeight(nextProps.maxHeight);
            const columnCount = Math.floor(nextProps.containerWidth / nextProps.maxWidth);
            this.setState({
                containerWidth: nextProps.containerWidth,
                gutter: nextProps.gutter,
                className: nextProps.className,
                columnClassName: nextProps.columnClassName,
                rowClassName: nextProps.rowClassName,
                rows: this.engine.buildRows(
                    nextProps.images,
                ),
                columns: Engine.buildColumns(
                    nextProps.images,
                    columnCount,
                    nextProps.containerWidth,
                ),
                columnCount,
                enableMasonry: nextProps.enableMasonry,
                disableObserver: nextProps.disableObserver,
                disableActualImage: nextProps.disableActualImage,
            });
        }
    }

    renderMasonryGallery({
        className, columns, columnClassName, imageRenderer, disableObserver, disableActualImage,
        gutter, columnCount,
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
                            width: `${100 / columnCount - gutter}%`,
                            maxWidth: 'auto',
                            margin: `0 ${gutter}% 0 0`,
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
                                            margin: `0 0 ${gutter * columnCount}% 0`,
                                        }}
                                    >
                                        <ViewableMonitor
                                            disableObserver={disableObserver}
                                        >
                                            {isViewable => imageRenderer({
                                                ...image,
                                                placeholderHeight,
                                                inView: !disableActualImage && isViewable,
                                                enableMasonry: true,
                                            })}
                                        </ViewableMonitor>
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
        className, rows, rowClassName, containerWidth, columnClassName, gutter, imageRenderer,
        disableObserver, disableActualImage,
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
                                        className={`${style.item} ${columnClassName}`}
                                        style={{
                                            width: el.isIncomplete
                                                ? `${newWidth}px`
                                                : `${newWidthInPercent}%`,
                                            maxWidth: el.isIncomplete
                                                ? `${newWidthInPercent}%`
                                                : 'auto',
                                            margin: row.length === columnIndex + 1
                                                ? `0 0 ${gutter}% 0`
                                                : `0 ${gutter}% ${gutter}% 0`,

                                        }}
                                    >
                                        <ViewableMonitor disableObserver={disableObserver}>
                                            {isViewable => imageRenderer({
                                                ...column,
                                                newWidth,
                                                newHeight,
                                                newWidthInPercent,
                                                placeholderHeight,
                                                inView: !disableActualImage && isViewable,
                                                enableMasonry: false,
                                            })}
                                        </ViewableMonitor>
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
