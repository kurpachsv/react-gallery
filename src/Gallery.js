import PropTypes from 'prop-types';
import React, {Component} from 'react';
import _ from 'lodash';
import cs from 'classnames';
import Engine from './Engine';
import style from './gallery.css';

const CONTAINER_WIDTH = 1000;
const MAX_HEIGHT = 250;
const MIN_HEIGHT = 200;
const GUTTER_IN_PERCENT = 0.5;

class Gallery extends Component {
    static propTypes = {
        imageRenderer: PropTypes.func.isRequired,
        images: PropTypes.array.isRequired,
        containerWidth: PropTypes.number,
        maxHeight: PropTypes.number,
        minHeight: PropTypes.number,
        gutterInPercent: PropTypes.number,
        className: PropTypes.string,
        columnClassName: PropTypes.string,
        rowClassName: PropTypes.string,
    };

    static defaultProps = {
        containerWidth: CONTAINER_WIDTH,
        maxHeight: MAX_HEIGHT,
        minHeight: MIN_HEIGHT,
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
        this.setState({
            rows: this.engine.buildRows(
                this.props.images,
            ),
            containerWidth: this.props.containerWidth,
            maxHeight: this.props.maxHeight,
            minHeight: this.props.minHeight,
            gutterInPercent: this.props.gutterInPercent,
            className: this.props.className,
            columnClassName: this.props.columnClassName,
            rowClassName: this.props.rowClassName,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            this.engine.setContainerWidth(nextProps.containerWidth);
            this.engine.setGutterInPercent(nextProps.gutterInPercent)
            this.engine.setMinHeight(nextProps.minHeight)
            this.engine.setMaxHeight(nextProps.maxHeight)
            this.setState({
                containerWidth: nextProps.containerWidth,
                maxHeight: nextProps.maxHeight,
                minHeight: nextProps.minHeight,
                gutterInPercent: nextProps.gutterInPercent,
                className: nextProps.className,
                columnClassName: nextProps.columnClassName,
                rowClassName: nextProps.rowClassName,
                rows: this.engine.buildRows(
                    nextProps.images,
                ), 
            });
        }
    }

    render() {
        const {className, rowClassName, columnClassName} = this.state;
        return (
            <div className={cs(style.container, className)}>
                {this.state.rows.map((el, rowIndex) => {
                    const row = el.row;
                    return (
                        <div key={rowIndex} className={cs(style.row, rowClassName)}>
                            {row.map((column, columnIndex) => {
                                const newWidth = this.engine.calculateWidth(
                                    this.state.containerWidth, column, row, el.isIncomplete
                                );
                                const newHeight = this.engine.calculateHeight(
                                    this.state.containerWidth, column, row, el.isIncomplete
                                );
                                const newWidthInPercent = 100 * newWidth / this.state.containerWidth;
                                const placeholderHeight = 100 * newHeight / newWidth;
                                return (
                                    <div
                                        key={`column-${column.src}-${rowIndex}-${columnIndex}`}
                                        className={cs(style.column, columnClassName)}
                                        style={{
                                            width: el.isIncomplete
                                                ? `${newWidth}px`
                                                : `${newWidthInPercent}%`,
                                            maxWidth: el.isIncomplete
                                                ? `${newWidthInPercent}%`
                                                : 'auto',
                                            margin: row.length === columnIndex + 1 
                                                ? `0 0 ${this.state.gutterInPercent}% 0`
                                                : `0 ${this.state.gutterInPercent}% ${this.state.gutterInPercent}% 0`
                                                
                                        }}
                                    >
                                        {this.props.imageRenderer({
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
