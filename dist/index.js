'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var Observer = _interopDefault(require('@researchgate/react-intersection-observer'));
var equal = _interopDefault(require('fast-deep-equal'));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

var css = ".image_image__PNasI {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n";
var styles = {"image":"image_image__PNasI"};
styleInject(css);

var Image = function Image(_ref) {
  var style = _ref.style,
      className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      visible = _ref.visible,
      height = _ref.height,
      width = _ref.width,
      newWidth = _ref.newWidth,
      newHeight = _ref.newHeight,
      newWidthInPercent = _ref.newWidthInPercent,
      placeholderHeight = _ref.placeholderHeight,
      enableMasonry = _ref.enableMasonry,
      rest = _objectWithoutProperties(_ref, ["style", "className", "src", "alt", "visible", "height", "width", "newWidth", "newHeight", "newWidthInPercent", "placeholderHeight", "enableMasonry"]);

  return React__default.createElement("img", _extends({}, rest, {
    className: "".concat(styles.image, " ").concat(className),
    src: visible ? src : null,
    alt: alt,
    style: _objectSpread({
      display: visible ? null : 'none'
    }, style)
  }));
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  visible: PropTypes.bool
};
Image.defaultProps = {
  className: '',
  alt: '',
  visible: true
};

var COLUMNS_MAX_COUNT = 5;
var COLUMN_MAX_WIDTH = 200;
var COLUMN_MAX_HEIGHT = 200;
var GUTTER_IN_PERCENT = 0.5;

var Engine =
/*#__PURE__*/
function () {
  function Engine() {
    _classCallCheck(this, Engine);
  }

  _createClass(Engine, [{
    key: "setImages",
    value: function setImages(images) {
      if (!images) {
        images = [];
      }

      this.images = images;
      return this;
    }
  }, {
    key: "setGutterInPercent",
    value: function setGutterInPercent(gutterInPercent) {
      if (!gutterInPercent || gutterInPercent < 0) {
        gutterInPercent = 0;
      }

      this.gutterInPercent = gutterInPercent;
      return this;
    }
  }, {
    key: "getGutterInPercent",
    value: function getGutterInPercent() {
      return this.gutterInPercent;
    }
  }, {
    key: "setMaxColumnsCount",
    value: function setMaxColumnsCount(maxColumnsCount) {
      if (!maxColumnsCount || maxColumnsCount < 0) {
        maxColumnsCount = COLUMNS_MAX_COUNT;
      }

      this.maxColumnsCount = maxColumnsCount;
      return this;
    }
  }, {
    key: "getMaxColumnsCount",
    value: function getMaxColumnsCount() {
      return this.maxColumnsCount;
    }
  }, {
    key: "setColumnMaxWidth",
    value: function setColumnMaxWidth(columnMaxWidth) {
      if (!columnMaxWidth || columnMaxWidth < 0) {
        columnMaxWidth = COLUMN_MAX_WIDTH;
      }

      this.columnMaxWidth = columnMaxWidth;
      return this;
    }
  }, {
    key: "getColumnsMaxWidth",
    value: function getColumnsMaxWidth() {
      return this.columnMaxWidth;
    }
  }, {
    key: "setColumnMaxHeight",
    value: function setColumnMaxHeight(columnMaxHeight) {
      if (!columnMaxHeight || columnMaxHeight < 0) {
        columnMaxHeight = COLUMN_MAX_HEIGHT;
      }

      this.columnMaxHeight = columnMaxHeight;
      return this;
    }
  }, {
    key: "normalizeByHeight",
    value: function normalizeByHeight(items) {
      var minHeight = Engine.getMinHeight(items);
      var result = [];
      items.forEach(function (el) {
        result.push(Engine.resizeByHeight(el, minHeight));
      });
      return result;
    }
  }, {
    key: "normalizeByWidth",
    value: function normalizeByWidth() {
      var _this = this;

      var calculateHeight = function calculateHeight(item) {
        var itemAfterResize = Engine.resizeByWidth(item, calculateWidth(item));
        return itemAfterResize.height;
      };

      var calculateWidth = function calculateWidth(item) {
        return item.width > _this.columnMaxWidth ? _this.columnMaxWidth : item.width;
      };

      var result = [];
      this.images.forEach(function (el) {
        result.push(_objectSpread({}, el, {
          height: calculateHeight(el),
          width: calculateWidth(el)
        }));
      });
      return result;
    }
  }, {
    key: "buildRow",
    value: function buildRow(items) {
      var row = [];
      var columnsCount = 0;

      while (items.length > 0 && columnsCount < this.maxColumnsCount) {
        var column = items.shift();
        row.push(column);
        columnsCount++;
      }

      return {
        row: row,
        isIncomplete: columnsCount < this.maxColumnsCount
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
      return this.normalizeByHeight(items);
    }
  }, {
    key: "calculateHeight",
    value: function calculateHeight(item, row, isLastRow) {
      var rowWidth = Engine.getRowWidth(row);
      var ratio = this.maxColumnsCount * this.columnMaxWidth / rowWidth;
      var newHeight = Engine.getMinHeight(row) * ratio * (100 - (row.length - 1) * this.gutterInPercent) / 100;

      if (isLastRow) {
        return newHeight > this.columnMaxHeight ? this.columnMaxHeight : newHeight;
      }

      return newHeight;
    }
  }, {
    key: "calculateWidth",
    value: function calculateWidth(item, row, isLastRow) {
      var itemAfterResize = Engine.resizeByHeight(item, this.calculateHeight(item, row, isLastRow));
      return itemAfterResize.width;
    }
  }, {
    key: "calculateFixedWidthInPercent",
    value: function calculateFixedWidthInPercent(item, row) {
      return 100 / row.length - this.getGutterInPercent();
    }
  }, {
    key: "buildRows",
    value: function buildRows() {
      var rows = [];
      var items = this.getNormalizedItems(this.images);

      while (items.length > 0) {
        var row = this.buildRow(items);
        rows.push(row);
      }

      return rows;
    }
  }, {
    key: "buildColumns",
    value: function buildColumns() {
      var columns = [];
      var order;
      var items = this.normalizeByWidth();

      for (var i = 0; i < this.maxColumnsCount; i++) {
        columns.push({
          images: [],
          order: i
        });
      }

      for (var _i = 0; _i < items.length; _i++) {
        order = (_i + 1) % this.maxColumnsCount === 0 ? this.maxColumnsCount : (_i + 1) % this.maxColumnsCount;
        columns[order - 1].images.push(items[_i]);
        items[_i].order = order;
      }

      return columns;
    }
  }], [{
    key: "getMinHeight",
    value: function getMinHeight(items) {
      return Math.min.apply(null, items.map(function (item) {
        return item.height;
      }));
    }
  }, {
    key: "getRowWidth",
    value: function getRowWidth(items) {
      return items.map(function (item) {
        return item.width;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  }, {
    key: "resizeByHeight",
    value: function resizeByHeight(item, newHeight) {
      var aspectRatio = item.width / item.height;
      return _objectSpread({}, item, {
        width: aspectRatio * newHeight,
        height: newHeight
      });
    }
  }, {
    key: "resizeByWidth",
    value: function resizeByWidth(item, newWidth) {
      var aspectRatio = item.width / item.height;
      return _objectSpread({}, item, {
        width: newWidth,
        height: newWidth / aspectRatio
      });
    }
  }]);

  return Engine;
}();

var css$1 = ".details_container__36DTd {\r\n    height: 200px;\r\n    font-size: 14px;\r\n}\r\n\r\n.details_container--disable__3by1M {\r\n    height: 0;\r\n}\r\n\r\n.details_image-wrapper__2qHsf {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n";
var style = {"container":"details_container__36DTd","container--disable":"details_container--disable__3by1M","image-wrapper":"details_image-wrapper__2qHsf"};
styleInject(css$1);

var defaultRenderer = function defaultRenderer(imageProps) {
  return React__default.createElement(React.Fragment, null, React__default.createElement(Image, _extends({
    onClick: imageProps.onClick
  }, imageProps)), React__default.createElement("div", {
    style: {
      backgroundColor: 'rgb(187, 189, 191)',
      paddingTop: "".concat(imageProps.placeholderHeight, "%")
    }
  }));
};

var DETAILS_IMAGE_HEIGHT = 300;

var defaultDetailsViewRenderer = function defaultDetailsViewRenderer(_ref) {
  var visible = _ref.visible,
      selectedImage = _ref.selectedImage,
      gutterInPercent = _ref.gutterInPercent;
  return React__default.createElement("div", {
    className: visible ? style.container : style['container--disable'],
    style: {
      height: visible ? DETAILS_IMAGE_HEIGHT : 0,
      visibility: visible ? 'visible' : 'hidden',
      marginBottom: visible ? "".concat(gutterInPercent, "%") : 0
    }
  }, React__default.createElement("div", {
    className: style['image-wrapper']
  }, visible && React__default.createElement(Image, {
    style: {
      height: DETAILS_IMAGE_HEIGHT,
      width: selectedImage.width / selectedImage.height * DETAILS_IMAGE_HEIGHT
    },
    src: selectedImage.src
  })));
};

defaultDetailsViewRenderer.propTypes = {
  visible: PropTypes.bool.isRequired,
  selectedImage: PropTypes.object.isRequired,
  gutterInPercent: PropTypes.number
};
defaultDetailsViewRenderer.defaultProps = {
  gutterInPercent: 0
};

var hasDocument = (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document !== null;
var hasWindow = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window !== null && window.self === window;
var isBrowser = hasDocument && hasWindow;

if (isBrowser) {
  require('intersection-observer');
}

var ViewMonitor =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewMonitor, _Component);

  function ViewMonitor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ViewMonitor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ViewMonitor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isVisible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (_ref) {
      var isIntersecting = _ref.isIntersecting;
      var isVisible = _this.state.isVisible;

      if (!isVisible) {
        _this.setState({
          isVisible: isIntersecting
        });
      }
    });

    return _this;
  }

  _createClass(ViewMonitor, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disableObserver = _this$props.disableObserver,
          Tag = _this$props.tag,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["disableObserver", "tag", "children"]);

      var isVisible = this.state.isVisible;

      if (disableObserver) {
        return React__default.createElement(Tag, null, children(true));
      }

      if (!isBrowser) {
        return React__default.createElement(Tag, null, children(false));
      }

      return React__default.createElement(Observer, _extends({}, rest, {
        onChange: this.handleChange
      }), React__default.createElement(Tag, null, children(isVisible)));
    }
  }]);

  return ViewMonitor;
}(React.Component);

_defineProperty(ViewMonitor, "propTypes", {
  tag: PropTypes.node,
  children: PropTypes.func.isRequired
});

_defineProperty(ViewMonitor, "defaultProps", {
  tag: 'div'
});

var css$2 = ".gallery_container__3i4rI {\n    display: block;\n    font-size: 0;\n}\n\n.gallery_item__3GrEG {\n    vertical-align: top;\n    position: relative;\n    display: inline-block;\n}\n\n.gallery_item--fixed__223Cp {\n    vertical-align: bottom;\n    position: relative;\n    display: inline-block;\n}\n";
var style$1 = {"container":"gallery_container__3i4rI","item":"gallery_item__3GrEG","item--fixed":"gallery_item--fixed__223Cp"};
styleInject(css$2);

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
      rows: [],
      selectedImageRow: null,
      selectedImageId: null,
      selectedImageRowPrev: null,
      selectedImageIdPrev: null,
      selectedImage: null,
      selectedRowHeight: 0,
      selectedImageProps: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectImage", function (_ref) {
      var selectedImageRow = _ref.selectedImageRow,
          selectedImageId = _ref.selectedImageId,
          selectedRowHeight = _ref.selectedRowHeight,
          selectedImage = _ref.selectedImage,
          selectedImageProps = _ref.selectedImageProps;
      var _this$state = _this.state,
          selectedImageRowPrev = _this$state.selectedImageRowPrev,
          selectedImageIdPrev = _this$state.selectedImageIdPrev;

      if (selectedImageRowPrev !== selectedImageRow || selectedImageId !== selectedImageIdPrev) {
        _this.setState({
          selectedImageRow: selectedImageRow,
          selectedImageRowPrev: selectedImageRow,
          selectedImage: selectedImage,
          selectedRowHeight: selectedRowHeight,
          selectedImageId: selectedImageId,
          selectedImageIdPrev: selectedImageId,
          selectedImageProps: selectedImageProps
        });
      } else {
        _this.setState({
          selectedImageRow: null,
          selectedImageRowPrev: null,
          selectedImage: null,
          selectedRowHeight: 0,
          selectedImageId: null,
          selectedImageIdPrev: null,
          selectedImageProps: {}
        });
      }
    });

    _this.engine = new Engine();
    return _this;
  }

  _createClass(Gallery, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props = this.props,
          images = _this$props.images,
          columnsMaxCount = _this$props.columnsMaxCount,
          columnMaxWidth = _this$props.columnMaxWidth,
          columnMaxHeight = _this$props.columnMaxHeight,
          gutterInPercent = _this$props.gutterInPercent,
          enableMasonry = _this$props.enableMasonry,
          disableObserver = _this$props.disableObserver,
          disableActualImage = _this$props.disableActualImage,
          className = _this$props.className,
          columnClassName = _this$props.columnClassName,
          rowClassName = _this$props.rowClassName,
          enableFixed = _this$props.enableFixed,
          enableDetailView = _this$props.enableDetailView;
      this.engine.setImages(images).setMaxColumnsCount(columnsMaxCount).setColumnMaxWidth(columnMaxWidth).setColumnMaxHeight(columnMaxHeight).setGutterInPercent(gutterInPercent);
      this.setState({
        columns: this.engine.buildColumns(),
        rows: this.engine.buildRows(),
        columnsMaxCount: columnsMaxCount,
        columnMaxWidth: columnMaxWidth,
        columnMaxHeight: columnMaxHeight,
        gutterInPercent: gutterInPercent,
        enableMasonry: enableMasonry,
        disableObserver: disableObserver,
        disableActualImage: disableActualImage,
        className: className,
        columnClassName: columnClassName,
        rowClassName: rowClassName,
        enableFixed: enableFixed,
        enableDetailView: enableDetailView
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!equal(this.props, nextProps)) {
        this.engine.setImages(nextProps.images).setMaxColumnsCount(nextProps.columnsMaxCount).setColumnMaxWidth(nextProps.columnMaxWidth).setColumnMaxHeight(nextProps.columnMaxHeight).setGutterInPercent(nextProps.gutterInPercent);
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
          enableFixed: nextProps.enableFixed,
          enableDetailView: nextProps.enableDetailView
        });
      }
    }
  }, {
    key: "renderMasonryGallery",
    value: function renderMasonryGallery(_ref2) {
      var _this2 = this;

      var className = _ref2.className,
          columnClassName = _ref2.columnClassName,
          imageRenderer = _ref2.imageRenderer,
          disableObserver = _ref2.disableObserver,
          disableActualImage = _ref2.disableActualImage,
          columns = _ref2.columns;
      return React__default.createElement("div", {
        className: "".concat(style$1.container, " ").concat(className)
      }, columns.map(function (item, columnIndex) {
        return React__default.createElement("div", {
          /* eslint-disable-next-line react/no-array-index-key */
          key: "column-".concat(columnIndex),
          className: "".concat(style$1.item, " ").concat(columnClassName),
          style: {
            width: "".concat(100 / _this2.engine.getMaxColumnsCount() - _this2.engine.getGutterInPercent(), "%"),
            maxWidth: 'auto',
            margin: "0 ".concat(_this2.engine.getGutterInPercent(), "% 0 0")
          }
        }, item.images.map(function (image, imageIndex) {
          var placeholderHeight = 100 * image.height / image.width;
          return React__default.createElement("div", {
            /* eslint-disable-next-line react/no-array-index-key */
            key: "image-".concat(image.src, "-").concat(columnIndex, "-").concat(imageIndex),
            style: {
              margin: "0 0 ".concat(_this2.engine.getGutterInPercent() * _this2.engine.getMaxColumnsCount(), "% 0")
            }
          }, React__default.createElement(ViewMonitor, {
            disableObserver: disableObserver
          }, function (isViewable) {
            return imageRenderer(_objectSpread({}, image, {
              placeholderHeight: placeholderHeight,
              visible: !disableActualImage && isViewable,
              enableMasonry: true
            }));
          }));
        }));
      }));
    }
  }, {
    key: "renderGallery",
    value: function renderGallery(_ref3) {
      var _this3 = this;

      var className = _ref3.className,
          rows = _ref3.rows,
          rowClassName = _ref3.rowClassName,
          columnClassName = _ref3.columnClassName,
          imageRenderer = _ref3.imageRenderer,
          disableObserver = _ref3.disableObserver,
          disableActualImage = _ref3.disableActualImage,
          enableDetailView = _ref3.enableDetailView,
          detailsViewRenderer = _ref3.detailsViewRenderer;
      var _this$state2 = this.state,
          selectedImageRow = _this$state2.selectedImageRow,
          selectedImage = _this$state2.selectedImage,
          selectedRowHeight = _this$state2.selectedRowHeight,
          selectedImageId = _this$state2.selectedImageId,
          selectedImageProps = _this$state2.selectedImageProps;
      return React__default.createElement("div", {
        className: "".concat(style$1.container, " ").concat(className)
      }, rows.map(function (el, rowIndex) {
        var row = el.row;
        return (
          /* eslint-disable-next-line react/no-array-index-key */
          React__default.createElement(React__default.Fragment, {
            key: "row-".concat(rowIndex)
          }, React__default.createElement("div", {
            className: rowClassName
          }, row.map(function (column, columnIndex) {
            var newWidth = _this3.engine.calculateWidth(column, row, el.isIncomplete);

            var newHeight = _this3.engine.calculateHeight(column, row, el.isIncomplete);

            var newWidthInPercent = 100 * newWidth / (_this3.engine.getMaxColumnsCount() * _this3.engine.getColumnsMaxWidth());

            var placeholderHeight = 100 * newHeight / newWidth;
            return React__default.createElement("div", {
              /* eslint-disable-next-line react/no-array-index-key */
              key: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
              className: "".concat(style$1.item, " ").concat(columnClassName),
              style: {
                width: el.isIncomplete ? "".concat(newWidth, "px") : "".concat(newWidthInPercent, "%"),
                maxWidth: el.isIncomplete ? "".concat(newWidthInPercent, "%") : 'auto',
                margin: row.length === columnIndex + 1 ? "0 0 ".concat(_this3.engine.getGutterInPercent(), "% 0") : "0 ".concat(_this3.engine.getGutterInPercent(), "% ").concat(_this3.engine.getGutterInPercent(), "% 0")
              }
            }, React__default.createElement(ViewMonitor, {
              disableObserver: disableObserver
            }, function (isViewable) {
              return imageRenderer(_objectSpread({}, column, {
                newWidth: newWidth,
                newHeight: newHeight,
                newWidthInPercent: newWidthInPercent,
                placeholderHeight: placeholderHeight,
                visible: !disableActualImage && isViewable,
                enableMasonry: false,
                onClick: function onClick() {
                  return _this3.handleSelectImage({
                    selectedImageRow: rowIndex,
                    selectedImage: column,
                    selectedRowHeight: newHeight,
                    // eslint-disable-next-line
                    selectedImageId: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
                    selectedImageProps: {
                      placeholderHeight: placeholderHeight,
                      newWidthInPercent: newWidthInPercent,
                      newWidth: newWidth,
                      newHeight: newHeight
                    }
                  });
                }
              }));
            }));
          })), React__default.createElement("div", null, enableDetailView && detailsViewRenderer(_objectSpread({}, row, {
            visible: rowIndex === selectedImageRow,
            selectedImage: selectedImage,
            rowHeight: selectedRowHeight,
            gutterInPercent: _this3.engine.getGutterInPercent(),
            selectedImageId: selectedImageId,
            selectedImageProps: selectedImageProps
          }))))
        );
      }));
    }
  }, {
    key: "renderFixedGallery",
    value: function renderFixedGallery(_ref4) {
      var _this4 = this;

      var className = _ref4.className,
          rows = _ref4.rows,
          rowClassName = _ref4.rowClassName,
          columnClassName = _ref4.columnClassName,
          imageRenderer = _ref4.imageRenderer,
          disableObserver = _ref4.disableObserver,
          disableActualImage = _ref4.disableActualImage,
          enableDetailView = _ref4.enableDetailView,
          detailsViewRenderer = _ref4.detailsViewRenderer;
      var _this$state3 = this.state,
          selectedImageRow = _this$state3.selectedImageRow,
          selectedImage = _this$state3.selectedImage,
          selectedRowHeight = _this$state3.selectedRowHeight,
          selectedImageId = _this$state3.selectedImageId,
          selectedImageProps = _this$state3.selectedImageProps;
      return React__default.createElement("div", {
        className: "".concat(style$1.container, " ").concat(className)
      }, rows.map(function (el, rowIndex) {
        var row = el.row;
        return (
          /* eslint-disable-next-line react/no-array-index-key */
          React__default.createElement(React__default.Fragment, {
            key: "row-".concat(rowIndex)
          }, React__default.createElement("div", {
            className: rowClassName
          }, row.map(function (column, columnIndex) {
            var newWidth = _this4.engine.calculateWidth(column, row, el.isIncomplete);

            var newHeight = _this4.engine.calculateHeight(column, row, el.isIncomplete);

            var newWidthInPercent = _this4.engine.calculateFixedWidthInPercent(column, row);

            var placeholderHeight = 100 * newHeight / newWidth;
            return React__default.createElement("div", {
              /* eslint-disable-next-line react/no-array-index-key */
              key: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
              className: "".concat(style$1['item--fixed'], " ").concat(columnClassName),
              style: {
                width: el.isIncomplete ? "".concat(newWidth, "px") : "".concat(newWidthInPercent, "%"),
                margin: row.length === columnIndex + 1 ? "0 0 ".concat(_this4.engine.getGutterInPercent(), "% 0") : "0 ".concat(_this4.engine.getGutterInPercent(), "% ").concat(_this4.engine.getGutterInPercent(), "% 0")
              }
            }, React__default.createElement(ViewMonitor, {
              disableObserver: disableObserver
            }, function (isViewable) {
              return imageRenderer(_objectSpread({}, column, {
                placeholderHeight: placeholderHeight,
                visible: !disableActualImage && isViewable,
                onClick: function onClick() {
                  return _this4.handleSelectImage({
                    selectedImageRow: rowIndex,
                    selectedImage: column,
                    selectedRowHeight: newHeight,
                    // eslint-disable-next-line
                    selectedImageId: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
                    selectedImageProps: {
                      placeholderHeight: placeholderHeight,
                      newWidthInPercent: newWidthInPercent,
                      newWidth: newWidth,
                      newHeight: newHeight
                    }
                  });
                }
              }));
            }));
          })), React__default.createElement("div", null, enableDetailView && detailsViewRenderer(_objectSpread({}, row, {
            visible: rowIndex === selectedImageRow,
            selectedImage: selectedImage,
            rowHeight: selectedRowHeight,
            gutterInPercent: _this4.engine.getGutterInPercent(),
            selectedImageId: selectedImageId,
            selectedImageProps: selectedImageProps
          }))))
        );
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          imageRenderer = _this$props2.imageRenderer,
          detailsViewRenderer = _this$props2.detailsViewRenderer;

      var _this$state4 = this.state,
          enableMasonry = _this$state4.enableMasonry,
          enableFixed = _this$state4.enableFixed,
          rest = _objectWithoutProperties(_this$state4, ["enableMasonry", "enableFixed"]);

      if (enableMasonry) {
        return this.renderMasonryGallery(_objectSpread({}, rest, {
          imageRenderer: imageRenderer
        }));
      }

      if (enableFixed) {
        return this.renderFixedGallery(_objectSpread({}, rest, {
          imageRenderer: imageRenderer,
          detailsViewRenderer: detailsViewRenderer
        }));
      }

      return this.renderGallery(_objectSpread({}, rest, {
        imageRenderer: imageRenderer,
        detailsViewRenderer: detailsViewRenderer
      }));
    }
  }]);

  return Gallery;
}(React.Component);

_defineProperty(Gallery, "propTypes", {
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
  enableDetailView: PropTypes.bool,
  detailsViewRenderer: PropTypes.func
});

_defineProperty(Gallery, "defaultProps", {
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
  enableDetailView: false,
  detailsViewRenderer: defaultDetailsViewRenderer
});

exports.Image = Image;
exports.Gallery = Gallery;
exports.defaultRenderer = defaultRenderer;
