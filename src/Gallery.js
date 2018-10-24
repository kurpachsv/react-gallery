import PropTypes from 'prop-types';
import React, {Component} from 'react';
import isEqual from 'lodash.isequal';
import Engine from './Engine';
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
        const {images, containerWidth, maxWidth, gutterInPercent, className, columnClassName} = this.props;
        const columnCount = containerWidth / maxWidth;
        this.setState({
            columns: this.engine.buildColumns(images, columnCount),
            gutterInPercent,
            className,
            columnClassName,
            columnCount,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(this.props, nextProps)) {
            this.engine.setContainerWidth(nextProps.containerWidth);
            this.engine.setGutterInPercent(nextProps.gutterInPercent);
            this.engine.setMinHeight(nextProps.minHeight);
            this.engine.setMaxHeight(nextProps.maxHeight);
            this.setState({
                gutterInPercent: nextProps.gutterInPercent,
                className: nextProps.className,
                columnClassName: nextProps.columnClassName,
                columns: this.engine.buildColumns(
                    nextProps.images,
                    nextProps.containerWidth / nextProps.maxWidth,
                ),
                columnCount: nextProps.containerWidth / nextProps.maxWidth,
            });
        }
    }

    render() {
        const {imageRenderer} = this.props;
        const {columns, columnCount, gutterInPercent, className, columnClassName} = this.state;
        return (
            <div
                className={`${style['masonry-container']} ${className}`}
                style={{
                    columnCount,
                }}
            >
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
                            {imageRenderer({
                                ...item,
                                placeholderHeight,
                            })}
                        </div>
                    );
                }
                )}
            </div>
        );
    }
}

export default Gallery;
