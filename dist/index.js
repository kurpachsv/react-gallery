'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var Observer = _interopDefault(require('@researchgate/react-intersection-observer'));
var equal = _interopDefault(require('fast-deep-equal'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".image_image__3LZ6Y {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n}\n";
var style = {"image":"image_image__3LZ6Y"};
styleInject(css);

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return React__default.createElement("img", {
    className: style.image,
    src: src,
    alt: alt
  });
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
Image.defaultProps = {
  alt: ''
};

var ImageInView = function ImageInView(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      inView = _ref.inView;
  return React__default.createElement("img", {
    className: style.image,
    src: inView ? src : null,
    alt: alt,
    style: inView ? {} : {
      display: 'none'
    }
  });
};

ImageInView.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  inView: PropTypes.bool
};
ImageInView.defaultProps = {
  alt: '',
  inView: true
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Engine =
/*#__PURE__*/
function () {
  function Engine(_ref) {
    var containerWidth = _ref.containerWidth,
        gutterInPercent = _ref.gutterInPercent,
        minHeight = _ref.minHeight,
        maxHeight = _ref.maxHeight;

    _classCallCheck(this, Engine);

    this.containerWidth = containerWidth;
    this.gutterInPercent = gutterInPercent;
    this.minHeight = minHeight;
    this.maxHeight = maxHeight;
  }

  _createClass(Engine, [{
    key: "setContainerWidth",
    value: function setContainerWidth(containerWidth) {
      this.containerWidth = containerWidth;
    }
  }, {
    key: "setGutterInPercent",
    value: function setGutterInPercent(gutterInPercent) {
      this.gutterInPercent = gutterInPercent;
    }
  }, {
    key: "setMinHeight",
    value: function setMinHeight(minHeight) {
      this.minHeight = minHeight;
    }
  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(maxHeight) {
      this.maxHeight = maxHeight;
    }
  }, {
    key: "_normalizeByHeight",
    value: function _normalizeByHeight(items) {
      var _this = this;

      var result = [];
      items.forEach(function (el) {
        result.push(Engine._resizeByHeight(el, _this.minHeight));
      });
      return result;
    }
  }, {
    key: "_buildRow",
    value: function _buildRow(items) {
      var row = [];
      var totalRowWidth = 0;

      while (items.length > 0 && totalRowWidth < this.containerWidth) {
        var column = items.shift();
        row.push(column);
        totalRowWidth += column.width;
      }

      return {
        row: row,
        isIncomplete: totalRowWidth < this.containerWidth
      };
    }
  }, {
    key: "getNormalizedItems",
    value: function getNormalizedItems(items) {
      items = items.map(function (item) {
        return _objectSpread({}, item, {
          height: item.height,
          width: item.width,
          src: item.src
        });
      });
      return this._normalizeByHeight(items);
    }
  }, {
    key: "calculateHeight",
    value: function calculateHeight(containerWidth, item, row, isLastRow) {
      var rowWidth = Engine._getRowWidth(row);

      var ratio = containerWidth / rowWidth;
      var height = Engine._getRowMinHeight(row) * ratio * (100 - (row.length - 1) * this.gutterInPercent) / 100;

      if (isLastRow) {
        return height > this.maxHeight ? this.maxHeight : height;
      }

      return height;
    }
  }, {
    key: "calculateWidth",
    value: function calculateWidth(containerWidth, item, row, isLastRow) {
      var itemAfterResize = Engine._resizeByHeight(item, this.calculateHeight(containerWidth, item, row, isLastRow));

      return itemAfterResize.width;
    }
  }, {
    key: "buildRows",
    value: function buildRows(images) {
      var rows = [];
      var items = this.getNormalizedItems(images);

      while (items.length > 0) {
        var row = this._buildRow(items);

        rows.push(row);
      }

      return rows;
    }
  }, {
    key: "buildColumns",
    value: function buildColumns(items, columnCount) {
      var columns = [];
      var currColumn = 0;

      while (currColumn < columnCount) {
        for (var i = 0; i < items.length; i += columnCount) {
          if (items[i + currColumn]) {
            columns.push(items[i + currColumn]);
          }
        }

        currColumn++;
      }

      return columns;
    }
  }], [{
    key: "_getRowMinHeight",
    value: function _getRowMinHeight(items) {
      return Math.min.apply(null, items.map(function (item) {
        return item.height;
      }));
    }
  }, {
    key: "_getRowWidth",
    value: function _getRowWidth(items) {
      return items.map(function (item) {
        return item.width;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }, {
    key: "_resizeByHeight",
    value: function _resizeByHeight(item, newHeight) {
      var aspectRatio = item.width / item.height;
      return _objectSpread({}, item, {
        width: aspectRatio * newHeight,
        height: newHeight
      });
    }
  }]);

  return Engine;
}();

var ViewableMonitor =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewableMonitor, _Component);

  function ViewableMonitor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ViewableMonitor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ViewableMonitor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isIntersecting: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (_ref) {
      var isIntersecting = _ref.isIntersecting;

      // eslint-disable-next-line react/destructuring-assignment
      if (!_this.state.isIntersecting) {
        _this.setState({
          isIntersecting: isIntersecting
        });
      }
    });

    return _this;
  }

  _createClass(ViewableMonitor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disableObserver = _this$props.disableObserver,
          Tag = _this$props.tag,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["disableObserver", "tag", "children"]);

      var isIntersecting = this.state.isIntersecting;

      if (disableObserver) {
        return React__default.createElement(Tag, null, children(true));
      }

      return React__default.createElement(Observer, _extends({}, rest, {
        onChange: this.handleChange
      }), React__default.createElement(Tag, null, children(isIntersecting)));
    }
  }]);

  return ViewableMonitor;
}(React.Component);

_defineProperty(ViewableMonitor, "propTypes", {
  tag: PropTypes.node,
  children: PropTypes.func.isRequired
});

_defineProperty(ViewableMonitor, "defaultProps", {
  tag: 'div'
});

var css$1 = ".gallery_container__WHVf3 {\n    display: block;\n    font-size: 0;\n}\n\n.gallery_row__16kGn {\n    display: block;\n}\n\n.gallery_column__3ltJa {\n    position: relative;\n    display: inline-block;\n}\n\n.gallery_masonry-item__2SepU {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n}\n";
var style$1 = {"container":"gallery_container__WHVf3","row":"gallery_row__16kGn","column":"gallery_column__3ltJa","masonry-item":"gallery_masonry-item__2SepU"};
styleInject(css$1);

var CONTAINER_WIDTH = 1000;
var MAX_HEIGHT = 250;
var MIN_HEIGHT = 200;
var MAX_WIDTH = 200;
var GUTTER_IN_PX = 5;

var Gallery =
/*#__PURE__*/
function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Gallery).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      columns: [],
      rows: []
    });

    _this.engine = new Engine({
      containerWidth: props.containerWidth,
      gutterInPercent: 100 * props.gutter / props.containerWidth,
      minHeight: props.minHeight,
      maxHeight: props.maxHeight
    });
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          images = _this$props.images,
          containerWidth = _this$props.containerWidth,
          maxWidth = _this$props.maxWidth,
          gutter = _this$props.gutter,
          className = _this$props.className,
          columnClassName = _this$props.columnClassName,
          rowClassName = _this$props.rowClassName,
          enableMasonry = _this$props.enableMasonry,
          disableObserver = _this$props.disableObserver;
      var columnCount = Math.floor(containerWidth / maxWidth);
      this.setState({
        columns: this.engine.buildColumns(images, columnCount),
        rows: this.engine.buildRows(images),
        containerWidth: containerWidth,
        gutterInPercent: 100 * gutter / containerWidth,
        gutter: gutter,
        className: className,
        columnClassName: columnClassName,
        rowClassName: rowClassName,
        columnCount: columnCount,
        enableMasonry: enableMasonry,
        disableObserver: disableObserver
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!equal(this.props, nextProps)) {
        this.engine.setContainerWidth(nextProps.containerWidth);
        this.engine.setGutterInPercent(100 * nextProps.gutter / nextProps.containerWidth);
        this.engine.setMinHeight(nextProps.minHeight);
        this.engine.setMaxHeight(nextProps.maxHeight);
        this.setState({
          containerWidth: nextProps.containerWidth,
          gutterInPercent: 100 * nextProps.gutter / nextProps.containerWidth,
          gutter: nextProps.gutter,
          className: nextProps.className,
          columnClassName: nextProps.columnClassName,
          rowClassName: nextProps.rowClassName,
          rows: this.engine.buildRows(nextProps.images),
          columns: this.engine.buildColumns(nextProps.images, nextProps.containerWidth / nextProps.maxWidth),
          columnCount: Math.floor(nextProps.containerWidth / nextProps.maxWidth),
          enableMasonry: nextProps.enableMasonry,
          disableObserver: nextProps.disableObserver
        });
      }
    }
  }, {
    key: "renderMasonryGallery",
    value: function renderMasonryGallery(_ref) {
      var className = _ref.className,
          columnCount = _ref.columnCount,
          columns = _ref.columns,
          columnClassName = _ref.columnClassName,
          gutter = _ref.gutter,
          imageRenderer = _ref.imageRenderer,
          disableObserver = _ref.disableObserver;
      return React__default.createElement("div", {
        className: "".concat(style$1.container, " ").concat(className),
        style: {
          columnCount: columnCount
        }
      }, columns.map(function (item, itemIndex) {
        var placeholderHeight = 100 * item.height / item.width;
        return React__default.createElement("div", {
          /* eslint-disable-next-line react/no-array-index-key */
          key: "column-".concat(item.src, "-").concat(itemIndex),
          className: "".concat(style$1['masonry-item'], " ").concat(columnClassName),
          style: {
            margin: "0 0 ".concat(gutter, "px ").concat(gutter, "px")
          }
        }, React__default.createElement(ViewableMonitor, {
          disableObserver: disableObserver
        }, function (isViewable) {
          return imageRenderer(_objectSpread({}, item, {
            inView: isViewable,
            placeholderHeight: placeholderHeight
          }));
        }));
      }));
    }
  }, {
    key: "renderGallery",
    value: function renderGallery(_ref2) {
      var _this2 = this;

      var className = _ref2.className,
          rows = _ref2.rows,
          rowClassName = _ref2.rowClassName,
          containerWidth = _ref2.containerWidth,
          columnClassName = _ref2.columnClassName,
          gutterInPercent = _ref2.gutterInPercent,
          imageRenderer = _ref2.imageRenderer,
          disableObserver = _ref2.disableObserver;
      return React__default.createElement("div", {
        className: "".concat(style$1.container, " ").concat(className)
      }, rows.map(function (el, rowIndex) {
        var row = el.row;
        return (
          /* eslint-disable-next-line react/no-array-index-key */
          React__default.createElement("div", {
            key: rowIndex,
            className: "".concat(style$1.row, " ").concat(rowClassName)
          }, row.map(function (column, columnIndex) {
            var newWidth = _this2.engine.calculateWidth(containerWidth, column, row, el.isIncomplete);

            var newHeight = _this2.engine.calculateHeight(containerWidth, column, row, el.isIncomplete);

            var newWidthInPercent = 100 * newWidth / containerWidth;
            var placeholderHeight = 100 * newHeight / newWidth;
            return React__default.createElement("div", {
              /* eslint-disable-next-line react/no-array-index-key */
              key: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
              className: "".concat(style$1.column, " ").concat(columnClassName),
              style: {
                width: el.isIncomplete ? "".concat(newWidth, "px") : "".concat(newWidthInPercent, "%"),
                maxWidth: el.isIncomplete ? "".concat(newWidthInPercent, "%") : 'auto',
                margin: row.length === columnIndex + 1 ? "0 0 ".concat(gutterInPercent, "% 0") : "0 ".concat(gutterInPercent, "% ").concat(gutterInPercent, "% 0")
              }
            }, React__default.createElement(ViewableMonitor, {
              disableObserver: disableObserver
            }, function (isViewable) {
              return imageRenderer(_objectSpread({}, column, {
                newWidth: newWidth,
                newHeight: newHeight,
                newWidthInPercent: newWidthInPercent,
                placeholderHeight: placeholderHeight,
                inView: isViewable
              }));
            }));
          }))
        );
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var imageRenderer = this.props.imageRenderer;

      var _this$state = this.state,
          enableMasonry = _this$state.enableMasonry,
          rest = _objectWithoutProperties(_this$state, ["enableMasonry"]);

      return enableMasonry ? this.renderMasonryGallery(_objectSpread({}, rest, {
        imageRenderer: imageRenderer
      })) : this.renderGallery(_objectSpread({}, rest, {
        imageRenderer: imageRenderer
      }));
    }
  }]);

  return Gallery;
}(React.Component);

_defineProperty(Gallery, "propTypes", {
  imageRenderer: PropTypes.func.isRequired,
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
  disableObserver: PropTypes.bool
});

_defineProperty(Gallery, "defaultProps", {
  containerWidth: CONTAINER_WIDTH,
  maxHeight: MAX_HEIGHT,
  minHeight: MIN_HEIGHT,
  maxWidth: MAX_WIDTH,
  gutter: GUTTER_IN_PX,
  className: '',
  columnClassName: '',
  rowClassName: '',
  enableMasonry: false,
  disableObserver: false
});

exports.Image = Image;
exports.ImageInView = ImageInView;
exports.Gallery = Gallery;
