import PropTypes from 'prop-types';
import React, {Component} from 'react';
import * as isEqual from 'lodash.isequal';
import Engine from './Engine';
import style from './gallery.css';

const CONTAINER_WIDTH = 1000;
const MAX_HEIGHT = 250;
const MIN_HEIGHT = 200;
const MAX_WIDTH = 250;
const GUTTER_IN_PERCENT = 0.5;

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
        rowClassName: PropTypes.string,
    };

    static defaultProps = {
        containerWidth: CONTAINER_WIDTH,
        maxHeight: MAX_HEIGHT,
        minHeight: MIN_HEIGHT,
        maxWidth: MAX_WIDTH,
        gutterInPercent: GUTTER_IN_PERCENT,
        className: '',
        columnClassName: '',
        rowClassName: '',
    };

    state = {
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
        this.setState({
            rows: this.engine.buildRows(images),
            containerWidth,
            gutterInPercent,
            className,
            columnClassName,
            rowClassName,
            maxWidth,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(this.props, nextProps)) {
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
                maxWidth: nextProps.maxWidth,
            });
        }
    }

    render() {
        const {imageRenderer} = this.props;
        const {rows, containerWidth, maxWidth, gutterInPercent, className, columnClassName} = this.state;
        const columnCount = containerWidth / maxWidth;
        return (
            <div
                className={`${style['masonry-container']} ${className}`}
                style={{
                    columnCount,
                    columnGap: `${gutterInPercent}%`,
                }}
            >
                {rows.map((el, rowIndex) => {
                    const row = el.row;
                    return row.map((item, columnIndex) => {
                        const placeholderHeight = 100 * item.height / item.width;
                        return (
                            <div
                                /* eslint-disable-next-line react/no-array-index-key */
                                key={`column-${item.src}-${rowIndex}-${columnIndex}`}
                                className={`${style['masonry-item']} ${columnClassName}`}
                                style={{
                                    margin: `0 0 ${gutterInPercent}%`,
                                }}
                            >
                                {imageRenderer({
                                    ...item,
                                    placeholderHeight,
                                })}
                            </div>
                        );
                    });
                }
                )}
            </div>
        );
    }
}

export default Gallery;
