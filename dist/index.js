'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));
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

var Image = function Image(_ref) {
  var className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      onClick = _ref.onClick;
  return React__default.createElement("img", {
    className: className,
    src: src,
    alt: alt,
    onClick: onClick
  });
};
var Div = function Div(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;
  return React__default.createElement("div", {
    className: className
  }, children);
};
var ImageWithSizes = styled(Image).withConfig({
  displayName: "nodes__ImageWithSizes",
  componentId: "sc-2jwtws-0"
})(["position:absolute;width:100%;height:", ";left:50%;bottom:", ";transform:", ";background-color:", ";cursor:pointer;"], function (props) {
  return props.ratio > 1 ? 'auto' : "calc(100% - ".concat(props.fixedBottom, "px)");
}, function (props) {
  return "".concat(props.fixedBottom, "px");
}, function (props) {
  return "translate(-50%, 0)";
}, function (props) {
  return props.fixedImagePlaceholderColor;
});
var ImageWithoutSizes = styled(Image).withConfig({
  displayName: "nodes__ImageWithoutSizes",
  componentId: "sc-2jwtws-1"
})(["position:absolute;display:", ";width:100%;cursor:pointer;"], function (props) {
  return props.visible ? null : 'none';
});
var Container = styled(Div).withConfig({
  displayName: "nodes__Container",
  componentId: "sc-2jwtws-2"
})(["position:relative;display:block;font-size:0;opacity:", ";"], function (props) {
  return props.withLoader ? '0.5' : false;
});
var Item = styled(Div).withConfig({
  displayName: "nodes__Item",
  componentId: "sc-2jwtws-3"
})(["vertical-align:top;position:relative;display:inline-block;"]);
var ItemMasonry = styled(Item).withConfig({
  displayName: "nodes__ItemMasonry",
  componentId: "sc-2jwtws-4"
})(["width:", ";margin:", ";"], function (props) {
  return "".concat(100 / props.columnsMaxCount - props.gutterInPercent, "%");
}, function (props) {
  return "0 ".concat(props.gutterInPercent, "% 0 0");
});
var ItemDefault = styled(Item).withConfig({
  displayName: "nodes__ItemDefault",
  componentId: "sc-2jwtws-5"
})(["width:", ";max-width:", ";margin:", ";"], function (props) {
  return props.isIncomplete && !props.disableLastRowDetecting ? "".concat(props.newWidth, "px") : "".concat(props.newWidthInPercent, "%");
}, function (props) {
  return props.isIncomplete && !props.disableLastRowDetecting ? "".concat(props.newWidthInPercent, "%") : 'auto';
}, function (props) {
  return props.rowLength === props.columnIndex + 1 ? "0 0 ".concat(props.gutterInPercent, "% 0") : "0 ".concat(props.gutterInPercent, "% ").concat(props.gutterInPercent, "% 0");
});
var ItemFixed = styled(Item).withConfig({
  displayName: "nodes__ItemFixed",
  componentId: "sc-2jwtws-6"
})(["background-color:", ";width:", ";margin:", ";"], function (props) {
  return props.placeholderColor;
}, function (props) {
  return props.isIncomplete ? "".concat(props.newWidth, "px") : "".concat(props.newWidthInPercent, "%");
}, function (props) {
  return props.rowLength === props.columnIndex + 1 ? "0 0 ".concat(props.fixedBottomGutterInPecent, "% 0") : "0 ".concat(props.gutterInPercent, "% ").concat(props.fixedBottomGutterInPecent, "% 0");
});
var DetailsContainer = styled.div.withConfig({
  displayName: "nodes__DetailsContainer",
  componentId: "sc-2jwtws-7"
})(["height:", ";font-size:14px;visibility:", ";margin-bottom:", ";"], function (props) {
  return props.visible ? "".concat(props.height, "px") : '0';
}, function (props) {
  return props.visible ? 'visible' : 'hidden';
}, function (props) {
  return props.visible ? "".concat(props.gutterInPercent, "%") : 0;
});
var DetailsImageWrapper = styled.div.withConfig({
  displayName: "nodes__DetailsImageWrapper",
  componentId: "sc-2jwtws-8"
})(["display:flex;justify-content:center;"]);
var DetailsImage = styled(Image).withConfig({
  displayName: "nodes__DetailsImage",
  componentId: "sc-2jwtws-9"
})(["height:", ";width:", ";"], function (props) {
  return "".concat(props.height, "px");
}, function (props) {
  return "".concat(props.width, "px");
});

var Image$1 = function Image$$1(_ref) {
  var className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      visible = _ref.visible,
      height = _ref.height,
      width = _ref.width,
      fixedBottom = _ref.fixedBottom,
      specifyImageSizes = _ref.specifyImageSizes,
      props = _objectWithoutProperties(_ref, ["className", "src", "alt", "visible", "height", "width", "fixedBottom", "specifyImageSizes"]);

  if (specifyImageSizes) {
    var ratio = width / height;
    return React__default.createElement(ImageWithSizes, {
      className: className,
      src: visible ? src : null,
      alt: alt,
      ratio: ratio,
      visible: visible,
      height: height,
      width: width,
      fixedBottom: fixedBottom,
      onClick: props.onClick,
      fixedImagePlaceholderColor: props.fixedImagePlaceholderColor
    });
  } else {
    return React__default.createElement(ImageWithoutSizes, {
      className: className,
      src: visible ? src : null,
      alt: alt,
      visible: visible,
      onClick: props.onClick
    });
  }
};

Image$1.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  visible: PropTypes.bool,
  onClick: PropTypes.func
};
Image$1.defaultProps = {
  alt: '',
  visible: true,
  onClick: function onClick() {}
};

var COLUMNS_MAX_COUNT = 5;
var COLUMN_MAX_WIDTH = 200;
var COLUMN_MAX_HEIGHT = 200;
var GUTTER_IN_PERCENT = 0.5;
var FIXED_BOTTOM_GUTTER_IN_PERCENT = 2.5;
var FIXED_BOTTOM = 50;
var PLACEHOLDER_COLOR = '#f0f0f0';
var FIXED_IMAGE_PLACEHOLDER_COLOR = '#ffffff';
var VIEWPORT_WIDTH = 0;

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
    key: "setViewportWidth",
    value: function setViewportWidth(viewportWidth) {
      this.viewportWidth = viewportWidth;
      return this;
    }
  }, {
    key: "normalizeByHeight",
    value: function normalizeByHeight(items) {
      var minHeight = this.columnMaxHeight;
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
      var _this2 = this;

      var row = [];
      var columnsCount = 0;
      var totalRowWidth = 0;

      var isIncompleteRow = function isIncompleteRow() {
        if (!_this2.viewportWidth) {
          return columnsCount < _this2.maxColumnsCount;
        }

        return totalRowWidth < _this2.viewportWidth;
      };

      while (items.length > 0 && isIncompleteRow()) {
        var column = items.shift();
        row.push(column);
        columnsCount++;
        totalRowWidth += column.width;
      }

      return {
        row: row,
        isIncomplete: isIncompleteRow()
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
    value: function calculateHeight(item, row, isLastRow, disableLastRowDetecting) {
      var rowWidth = Engine.getRowWidth(row);
      var ratio = this.maxColumnsCount * this.columnMaxWidth / rowWidth;
      var newHeight = Engine.getMinHeight(row) * ratio * (100 - (row.length - 1) * this.gutterInPercent) / 100;

      if (isLastRow && !disableLastRowDetecting) {
        return newHeight > this.columnMaxHeight ? this.columnMaxHeight : newHeight;
      }

      return newHeight;
    }
  }, {
    key: "calculateWidth",
    value: function calculateWidth(item, row, isLastRow, disableLastRowDetecting) {
      var itemAfterResize = Engine.resizeByHeight(item, this.calculateHeight(item, row, isLastRow, disableLastRowDetecting));
      return itemAfterResize.width;
    }
  }, {
    key: "calculateFixedWidthInPercent",
    value: function calculateFixedWidthInPercent(item, row) {
      return 100 / row.length - this.getGutterInPercent();
    }
  }, {
    key: "buildFixedRows",
    value: function buildFixedRows() {
      var rows = [];
      var items = this.images.slice(0);

      while (items.length > 0) {
        var row = this.buildRow(items);
        rows.push(row);
      }

      return rows;
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

var defaultRenderer = function defaultRenderer(imageProps) {
  if (imageProps.specifyImageSizes) {
    return React__default.createElement(React__default.Fragment, null, imageRendererForFixedLayout(imageProps));
  } else {
    return React__default.createElement(React__default.Fragment, null, imageRenderer(imageProps));
  }
};

var imageRenderer = function imageRenderer(imageProps) {
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Image$1, _extends({
    onClick: imageProps.onClick
  }, imageProps)), React__default.createElement("div", {
    style: {
      paddingTop: "".concat(imageProps.placeholderHeight, "%"),
      backgroundColor: imageProps.placeholderColor
    }
  }));
};

var imageRendererForFixedLayout = function imageRendererForFixedLayout(imageProps) {
  return React__default.createElement("div", {
    style: {
      backgroundColor: '#ffffff'
    }
  }, React__default.createElement(Image$1, _extends({
    onClick: imageProps.onClick
  }, imageProps)), React__default.createElement("div", {
    style: {
      paddingTop: '100%'
    }
  }));
};

var DETAILS_IMAGE_HEIGHT = 300;

var defaultDetailsViewRenderer = function defaultDetailsViewRenderer(_ref) {
  var visible = _ref.visible,
      selectedImage = _ref.selectedImage,
      gutterInPercent = _ref.gutterInPercent;
  return React__default.createElement(DetailsContainer, {
    visible: visible,
    height: DETAILS_IMAGE_HEIGHT,
    gutterInPercent: gutterInPercent
  }, React__default.createElement(DetailsImageWrapper, null, visible && React__default.createElement(DetailsImage, {
    src: selectedImage.src,
    height: DETAILS_IMAGE_HEIGHT,
    width: selectedImage.width / selectedImage.height * DETAILS_IMAGE_HEIGHT
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
      fixedRows: [],
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "close", function () {
      _this.setState({
        selectedImageRow: null,
        selectedImageRowPrev: null,
        selectedImage: null,
        selectedRowHeight: 0,
        selectedImageId: null,
        selectedImageIdPrev: null,
        selectedImageProps: {}
      });
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
          fixedBottom = _this$props.fixedBottom,
          enableDetailView = _this$props.enableDetailView,
          disableLastRowDetecting = _this$props.disableLastRowDetecting,
          placeholderColor = _this$props.placeholderColor,
          viewportWidth = _this$props.viewportWidth,
          fixedBottomGutterInPecent = _this$props.fixedBottomGutterInPecent,
          fixedImagePlaceholderColor = _this$props.fixedImagePlaceholderColor;
      this.engine.setImages(images).setMaxColumnsCount(columnsMaxCount).setColumnMaxWidth(columnMaxWidth).setColumnMaxHeight(columnMaxHeight).setGutterInPercent(gutterInPercent).setViewportWidth(viewportWidth);
      this.setState({
        columns: this.engine.buildColumns(),
        rows: this.engine.buildRows(),
        fixedRows: this.engine.buildFixedRows(),
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
        fixedBottom: fixedBottom,
        enableDetailView: enableDetailView,
        disableLastRowDetecting: disableLastRowDetecting,
        placeholderColor: placeholderColor,
        viewportWidth: viewportWidth,
        fixedBottomGutterInPecent: fixedBottomGutterInPecent,
        fixedImagePlaceholderColor: fixedImagePlaceholderColor
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!equal(this.props, nextProps)) {
        this.engine.setImages(nextProps.images).setMaxColumnsCount(nextProps.columnsMaxCount).setColumnMaxWidth(nextProps.columnMaxWidth).setColumnMaxHeight(nextProps.columnMaxHeight).setGutterInPercent(nextProps.gutterInPercent).setViewportWidth(nextProps.viewportWidth);
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
          viewportWidth: nextProps.viewportWidth,
          fixedBottomGutterInPecent: nextProps.fixedBottomGutterInPecent,
          fixedImagePlaceholderColor: nextProps.fixedImagePlaceholderColor
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
          columns = _ref2.columns,
          placeholderColor = _ref2.placeholderColor;
      return React__default.createElement(Container, {
        className: className
      }, columns.map(function (item, columnIndex) {
        return React__default.createElement(ItemMasonry
        /* eslint-disable-next-line react/no-array-index-key */
        , {
          key: "column-".concat(columnIndex),
          className: columnClassName,
          columnsMaxCount: _this2.engine.getMaxColumnsCount(),
          gutterInPercent: _this2.engine.getGutterInPercent()
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
              enableMasonry: true,
              placeholderColor: placeholderColor
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
          detailsViewRenderer = _ref3.detailsViewRenderer,
          disableLastRowDetecting = _ref3.disableLastRowDetecting,
          placeholderColor = _ref3.placeholderColor;
      var _this$state2 = this.state,
          selectedImageRow = _this$state2.selectedImageRow,
          selectedImage = _this$state2.selectedImage,
          selectedRowHeight = _this$state2.selectedRowHeight,
          selectedImageId = _this$state2.selectedImageId,
          selectedImageProps = _this$state2.selectedImageProps;
      return React__default.createElement(Container, {
        className: className
      }, rows.map(function (el, rowIndex) {
        var row = el.row;
        return (
          /* eslint-disable-next-line react/no-array-index-key */
          React__default.createElement(React__default.Fragment, {
            key: "row-".concat(rowIndex)
          }, React__default.createElement("div", {
            className: rowClassName
          }, row.map(function (column, columnIndex) {
            var newWidth = _this3.engine.calculateWidth(column, row, el.isIncomplete, disableLastRowDetecting);

            var newHeight = _this3.engine.calculateHeight(column, row, el.isIncomplete, disableLastRowDetecting);

            var newWidthInPercent = 100 * newWidth / (_this3.engine.getMaxColumnsCount() * _this3.engine.getColumnsMaxWidth());

            if (el.isIncomplete && disableLastRowDetecting) {
              newWidthInPercent = 100 * newWidth / (_this3.engine.getMaxColumnsCount() // eslint-disable-next-line max-len
              * _this3.engine.getColumnsMaxWidth()) * row.length / _this3.engine.getMaxColumnsCount();
            }

            var placeholderHeight = 100 * newHeight / newWidth;
            return React__default.createElement(ItemDefault
            /* eslint-disable-next-line react/no-array-index-key */
            , {
              key: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
              className: columnClassName,
              isIncomplete: el.isIncomplete,
              disableLastRowDetecting: disableLastRowDetecting,
              newWidth: newWidth,
              newWidthInPercent: newWidthInPercent,
              gutterInPercent: _this3.engine.getGutterInPercent(),
              rowLength: row.length,
              columnIndex: columnIndex
            }, React__default.createElement(ViewMonitor, {
              disableObserver: disableObserver
            }, function (isViewable) {
              return imageRenderer(_objectSpread({}, column, {
                newWidth: newWidth,
                newHeight: newHeight,
                newWidthInPercent: newWidthInPercent,
                placeholderHeight: placeholderHeight,
                placeholderColor: placeholderColor,
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
          fixedRows = _ref4.fixedRows,
          rowClassName = _ref4.rowClassName,
          columnClassName = _ref4.columnClassName,
          imageRenderer = _ref4.imageRenderer,
          disableObserver = _ref4.disableObserver,
          disableActualImage = _ref4.disableActualImage,
          enableDetailView = _ref4.enableDetailView,
          detailsViewRenderer = _ref4.detailsViewRenderer,
          fixedBottom = _ref4.fixedBottom,
          placeholderColor = _ref4.placeholderColor,
          fixedBottomGutterInPecent = _ref4.fixedBottomGutterInPecent,
          fixedImagePlaceholderColor = _ref4.fixedImagePlaceholderColor;
      var _this$state3 = this.state,
          selectedImageRow = _this$state3.selectedImageRow,
          selectedImage = _this$state3.selectedImage,
          selectedRowHeight = _this$state3.selectedRowHeight,
          selectedImageId = _this$state3.selectedImageId,
          selectedImageProps = _this$state3.selectedImageProps;
      return React__default.createElement(Container, {
        className: className
      }, fixedRows.map(function (el, rowIndex) {
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
            return React__default.createElement(ItemFixed
            /* eslint-disable-next-line react/no-array-index-key */
            , {
              key: "column-".concat(column.src, "-").concat(rowIndex, "-").concat(columnIndex),
              className: columnClassName,
              isIncomplete: el.isIncomplete,
              newWidth: newWidth,
              newWidthInPercent: newWidthInPercent,
              gutterInPercent: _this4.engine.getGutterInPercent(),
              rowLength: row.length,
              columnIndex: columnIndex,
              placeholderColor: placeholderColor,
              fixedBottomGutterInPecent: fixedBottomGutterInPecent
            }, React__default.createElement("div", {
              style: {
                // eslint-disable-next-line
                marginBottom: "".concat(fixedBottom, "px")
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
                },
                fixedBottom: fixedBottom,
                specifyImageSizes: true,
                fixedImagePlaceholderColor: fixedImagePlaceholderColor
              }));
            })));
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
          detailsViewRenderer = _this$props2.detailsViewRenderer,
          props = _objectWithoutProperties(_this$props2, ["imageRenderer", "detailsViewRenderer"]);

      var _this$state4 = this.state,
          enableMasonry = _this$state4.enableMasonry,
          enableFixed = _this$state4.enableFixed,
          rest = _objectWithoutProperties(_this$state4, ["enableMasonry", "enableFixed"]);

      if (enableMasonry) {
        return this.renderMasonryGallery(_objectSpread({}, rest, {
          imageRenderer: imageRenderer
        }, props));
      }

      if (enableFixed) {
        return this.renderFixedGallery(_objectSpread({}, rest, {
          imageRenderer: imageRenderer,
          detailsViewRenderer: detailsViewRenderer
        }, props));
      }

      return this.renderGallery(_objectSpread({}, rest, {
        imageRenderer: imageRenderer,
        detailsViewRenderer: detailsViewRenderer
      }, props));
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
  fixedBottom: PropTypes.number,
  enableDetailView: PropTypes.bool,
  detailsViewRenderer: PropTypes.func,
  disableLastRowDetecting: PropTypes.bool,
  placeholderColor: PropTypes.string,
  viewportWidth: PropTypes.number
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
  fixedBottom: FIXED_BOTTOM,
  enableDetailView: false,
  detailsViewRenderer: defaultDetailsViewRenderer,
  disableLastRowDetecting: false,
  placeholderColor: PLACEHOLDER_COLOR,
  viewportWidth: VIEWPORT_WIDTH,
  fixedBottomGutterInPecent: FIXED_BOTTOM_GUTTER_IN_PERCENT,
  fixedImagePlaceholderColor: FIXED_IMAGE_PLACEHOLDER_COLOR
});

exports.Image = Image$1;
exports.Gallery = Gallery;
exports.defaultRenderer = defaultRenderer;
