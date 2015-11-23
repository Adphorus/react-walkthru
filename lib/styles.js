'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = getStyles;
var step = {};

var arrow = {
  position: 'absolute',
  top: -10,
  left: -9,
  width: 0,
  height: 0,
  border: '10px solid transparent',
  borderRight: '10px solid #fff',
  zIndex: '10'
};

var content = {
  background: '#ffffff',
  marginLeft: 10,
  top: -30,
  borderRadius: 4,
  padding: '11px 11px 50px',
  maxWidth: 280,
  minWidth: 280,
  fontSize: 12,
  lineHeight: '19px',
  border: '1px solid #b7efe8',
  boxShadow: '0 8px 34px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box',
  zIndex: '9'
};

var footer = {
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: 34,
  background: '#eaeaec',
  boxSizing: 'border-box'
};

var button = {
  border: 0,
  outline: 'none',
  width: 85,
  height: 34,
  float: 'right',
  margin: 0,
  padding: 0,
  background: '#00cdb5',
  color: '#ffffff',
  boxSizing: 'border-box'
};

var fullButton = _extends({}, button, {
  width: '100%'
});

var nav = {
  padding: '0 11px',
  boxSizing: 'border-box'
};

var navText = {
  lineHeight: '34px',
  fontSize: 11,
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle'
};

var dots = {
  display: 'inline-block',
  lineHeight: footer.height + 'px',
  marginLeft: 10
};

var dot = {
  width: 10,
  height: 10,
  display: 'inline-block',
  borderRadius: 5,
  border: '1px solid #B7BAC2',
  background: footer.background,
  cursor: 'pointer',
  marginLeft: 5,
  verticalAlign: 'middle',
  transition: 'background .4s ease',
  boxSizing: 'border-box'
};

var dotActive = _extends({}, dot, {
  background: '#00cdb5',
  border: 'none'
});

var dotPast = _extends({}, dot, {
  background: '#B7BAC2'
});

var closeIcon = {
  fill: '#B7BAC2',
  width: '18px',
  height: '18px',
  position: 'absolute',
  right: 5,
  top: 5,
  cursor: 'pointer'
};

function getStyles() {
  var userTheme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var theme = {
    step: step,
    arrow: arrow,
    content: content,
    footer: footer,
    button: button,
    fullButton: fullButton,
    navText: navText,
    nav: nav,
    dots: dots,
    dot: dot,
    dotActive: dotActive,
    dotPast: dotPast,
    closeIcon: closeIcon
  };

  for (var key in userTheme) {
    if (theme.hasOwnProperty(key)) {
      theme[key] = _extends({}, theme[key], userTheme[key]);
    }
  }

  return theme;
}

module.exports = exports['default'];