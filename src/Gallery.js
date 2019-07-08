import PropTypes from 'prop-types';
import React, {Component} from 'react';
import equal from 'fast-deep-equal';
import Engine, {
    COLUMN_MAX_HEIGHT,
    COLUMN_MAX_WIDTH,
    COLUMNS_MAX_COUNT,
    GUTTER_IN_PERCENT,
    FIXED_BOTTOM,
    PLACEHOLDER_COLOR,
} from './Engine';
import {
    defaultRenderer,
    defaultDetailsViewRenderer,
} from './Renderers';
import ViewMonitor from './ViewMonitor';

import {
    Container,
    ItemMasonry,
    ItemDefault,
    ItemFixed,
} from './nodes';

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
        enableFixed: PropTypes.bool,
        fixedBottom: PropTypes.number,
        enableDetailView: PropTypes.bool,
        detailsViewRenderer: PropTypes.func,
        disableLastRowDetecting: PropTypes.bool,
        placeholderColor: PropTypes.string,
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
        enableFixed: false,
        fixedBottom: FIXED_BOTTOM,
        enableDetailView: false,
        detailsViewRenderer: defaultDetailsViewRenderer,
        disableLastRowDetecting: false,
        placeholderColor: PLACEHOLDER_COLOR,
    };

    state = {
        columns: [],
        rows: [],
        fixedRows: [],
        selectedImageRow: null,
        selectedImageId: null,
        selectedImageRowPrev: null,
        selectedImageIdPrev: null,
        selectedImage: null,
        selectedRowHeight: 0,
        selectedImageProps: {},
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
            enableFixed,
            fixedBottom,
            enableDetailView,
            disableLastRowDetecting,
            placeholderColor,
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
            fixedRows: this.engine.buildFixedRows(),
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
            enableFixed,
            fixedBottom,
            enableDetailView,
            disableLastRowDetecting,
            placeholderColor,
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
                fixedRows: this.engine.buildFixedRows(),
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
                enableFixed: nextProps.enableFixed,
                fixedBottom: nextProps.fixedBottom,
                enableDetailView: nextProps.enableDetailView,
                disableLastRowDetecting: nextProps.disableLastRowDetecting,
                placeholderColor: nextProps.placeholderColor,
            });
        }
    }

    renderMasonryGallery({
        className, columnClassName, imageRenderer, disableObserver, disableActualImage, columns,
        placeholderColor,
    }) {
        return (
            <Container className={className}>
                {columns.map((item, columnIndex) => (
                    <ItemMasonry
                        /* eslint-disable-next-line react/no-array-index-key */
                        key={`column-${columnIndex}`}
                        className={columnClassName}
                        columnsMaxCount={this.engine.getMaxColumnsCount()}
                        gutterInPercent={this.engine.getGutterInPercent()}
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
                                                placeholderColor,
                                            })}
                                        </ViewMonitor>
                                    </div>
                                );
                            })
                        }
                    </ItemMasonry>
                ))}
            </Container>
        );
    }

    renderGallery({
        className, rows, rowClassName, columnClassName, imageRenderer, disableObserver, disableActualImage,
        enableDetailView, detailsViewRenderer, disableLastRowDetecting, placeholderColor,
    }) {
        const {
            selectedImageRow, selectedImage, selectedRowHeight, selectedImageId, selectedImageProps,
        } = this.state;
        return (
            <Container className={className}>
                {rows.map((el, rowIndex) => {
                    const row = el.row;
                    return (
                        /* eslint-disable-next-line react/no-array-index-key */
                        <React.Fragment key={`row-${rowIndex}`}>
                            <div className={rowClassName}>
                                {row.map((column, columnIndex) => {
                                    const newWidth = this.engine.calculateWidth(
                                        column, row, el.isIncomplete, disableLastRowDetecting
                                    );
                                    const newHeight = this.engine.calculateHeight(
                                        column, row, el.isIncomplete, disableLastRowDetecting
                                    );
                                    let newWidthInPercent = 100 * newWidth / (this.engine.getMaxColumnsCount()
                                        * this.engine.getColumnsMaxWidth());
                                    if (el.isIncomplete && disableLastRowDetecting) {
                                        newWidthInPercent = 100 * newWidth / (this.engine.getMaxColumnsCount()
                                        // eslint-disable-next-line max-len
                                        * this.engine.getColumnsMaxWidth()) * row.length / this.engine.getMaxColumnsCount();
                                    }
                                    const placeholderHeight = 100 * newHeight / newWidth;
                                    return (
                                        <ItemDefault
                                            /* eslint-disable-next-line react/no-array-index-key */
                                            key={`column-${column.src}-${rowIndex}-${columnIndex}`}
                                            className={columnClassName}
                                            isIncomplete={el.isIncomplete}
                                            disableLastRowDetecting={disableLastRowDetecting}
                                            newWidth={newWidth}
                                            newWidthInPercent={newWidthInPercent}
                                            gutterInPercent={this.engine.getGutterInPercent()}
                                            rowLength={row.length}
                                            columnIndex={columnIndex}
                                        >
                                            <ViewMonitor disableObserver={disableObserver}>
                                                {isViewable => imageRenderer({
                                                    ...column,
                                                    newWidth,
                                                    newHeight,
                                                    newWidthInPercent,
                                                    placeholderHeight,
                                                    placeholderColor,
                                                    visible: !disableActualImage && isViewable,
                                                    enableMasonry: false,
                                                    onClick: () => this.handleSelectImage({
                                                        selectedImageRow: rowIndex,
                                                        selectedImage: column,
                                                        selectedRowHeight: newHeight,
                                                        // eslint-disable-next-line
                                                        selectedImageId: `column-${column.src}-${rowIndex}-${columnIndex}`,
                                                        selectedImageProps: {
                                                            placeholderHeight,
                                                            newWidthInPercent,
                                                            newWidth,
                                                            newHeight,
                                                        },
                                                    }),
                                                })}
                                            </ViewMonitor>
                                        </ItemDefault>
                                    );
                                })}
                            </div>
                            <div>
                                {enableDetailView && detailsViewRenderer({
                                    ...row,
                                    visible: rowIndex === selectedImageRow,
                                    selectedImage,
                                    rowHeight: selectedRowHeight,
                                    gutterInPercent: this.engine.getGutterInPercent(),
                                    selectedImageId,
                                    selectedImageProps,
                                })}
                            </div>
                        </React.Fragment>
                    );
                })}
            </Container>
        );
    }

    handleSelectImage = ({
        selectedImageRow,
        selectedImageId,
        selectedRowHeight,
        selectedImage,
        selectedImageProps,
    }) => {
        const {selectedImageRowPrev, selectedImageIdPrev} = this.state;
        if (selectedImageRowPrev !== selectedImageRow
            || selectedImageId !== selectedImageIdPrev) {
            this.setState({
                selectedImageRow,
                selectedImageRowPrev: selectedImageRow,
                selectedImage,
                selectedRowHeight,
                selectedImageId,
                selectedImageIdPrev: selectedImageId,
                selectedImageProps,
            });
        } else {
            this.setState({
                selectedImageRow: null,
                selectedImageRowPrev: null,
                selectedImage: null,
                selectedRowHeight: 0,
                selectedImageId: null,
                selectedImageIdPrev: null,
                selectedImageProps: {},
            });
        }
    };

    close = () => {
        this.setState({
            selectedImageRow: null,
            selectedImageRowPrev: null,
            selectedImage: null,
            selectedRowHeight: 0,
            selectedImageId: null,
            selectedImageIdPrev: null,
            selectedImageProps: {},
        });
    };

    renderFixedGallery({
        className, fixedRows, rowClassName, columnClassName, imageRenderer, disableObserver, disableActualImage,
        enableDetailView, detailsViewRenderer, fixedBottom, placeholderColor,
    }) {
        const {
            selectedImageRow, selectedImage, selectedRowHeight, selectedImageId, selectedImageProps,
        } = this.state;
        return (
            <Container className={className}>
                {fixedRows.map((el, rowIndex) => {
                    const row = el.row;
                    return (
                        /* eslint-disable-next-line react/no-array-index-key */
                        <React.Fragment key={`row-${rowIndex}`}>
                            <div className={rowClassName}>
                                {row.map((column, columnIndex) => {
                                    const newWidth = this.engine.calculateWidth(
                                        column, row, el.isIncomplete
                                    );
                                    const newHeight = this.engine.calculateHeight(
                                        column, row, el.isIncomplete
                                    );
                                    const newWidthInPercent = this.engine.calculateFixedWidthInPercent(
                                        column, row
                                    );
                                    const placeholderHeight = 100 * newHeight / newWidth;
                                    return (
                                        <ItemFixed
                                            /* eslint-disable-next-line react/no-array-index-key */
                                            key={`column-${column.src}-${rowIndex}-${columnIndex}`}
                                            className={columnClassName}
                                            isIncomplete={el.isIncomplete}
                                            newWidth={newWidth}
                                            newWidthInPercent={newWidthInPercent}
                                            gutterInPercent={this.engine.getGutterInPercent()}
                                            rowLength={row.length}
                                            columnIndex={columnIndex}
                                            placeholderColor={placeholderColor}
                                        >
                                            <div
                                                style={{
                                                    // eslint-disable-next-line
                                                    marginBottom: `${fixedBottom}px`,
                                                }}
                                            >
                                                <ViewMonitor disableObserver={disableObserver}>
                                                    {isViewable => imageRenderer({
                                                        ...column,
                                                        placeholderHeight,
                                                        visible: !disableActualImage && isViewable,
                                                        onClick: () => this.handleSelectImage({
                                                            selectedImageRow: rowIndex,
                                                            selectedImage: column,
                                                            selectedRowHeight: newHeight,
                                                            // eslint-disable-next-line
                                                            selectedImageId: `column-${column.src}-${rowIndex}-${columnIndex}`,
                                                            selectedImageProps: {
                                                                placeholderHeight,
                                                                newWidthInPercent,
                                                                newWidth,
                                                                newHeight,
                                                            },
                                                        }),
                                                        fixedBottom,
                                                        specifyImageSizes: true,
                                                    })}
                                                </ViewMonitor>
                                            </div>
                                        </ItemFixed>
                                    );
                                })}
                            </div>
                            <div>
                                {enableDetailView && detailsViewRenderer({
                                    ...row,
                                    visible: rowIndex === selectedImageRow,
                                    selectedImage,
                                    rowHeight: selectedRowHeight,
                                    gutterInPercent: this.engine.getGutterInPercent(),
                                    selectedImageId,
                                    selectedImageProps,
                                })}
                            </div>
                        </React.Fragment>
                    );
                })}
            </Container>
        );
    }

    render() {
        const {imageRenderer, detailsViewRenderer} = this.props;
        const {enableMasonry, enableFixed, ...rest} = this.state;
        if (enableMasonry) {
            return this.renderMasonryGallery({...rest, imageRenderer});
        }
        if (enableFixed) {
            return this.renderFixedGallery({...rest, imageRenderer, detailsViewRenderer});
        }
        return this.renderGallery({...rest, imageRenderer, detailsViewRenderer});
    }
}

export default Gallery;
