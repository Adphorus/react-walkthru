'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = function (props) {
  return _react2['default'].createElement(
    'svg',
    { viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet', fit: true, style: props.style, onClick: props.onClick },
    _react2['default'].createElement(
      'g',
      null,
      _react2['default'].createElement('path', { d: 'M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z' })
    )
  );
};

module.exports = exports['default'];