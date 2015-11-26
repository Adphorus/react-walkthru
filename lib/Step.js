'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CloseIcon = require('./CloseIcon');

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

var Step = (function (_Component) {
  _inherits(Step, _Component);

  function Step(props, context) {
    _classCallCheck(this, Step);

    _get(Object.getPrototypeOf(Step.prototype), 'constructor', this).call(this, props, context);
    this.styles = props.theme;
  }

  _createClass(Step, [{
    key: 'getPositionStyle',
    value: function getPositionStyle(interpolated) {
      var offset = this.props.data.offset;

      var position = interpolated || this.props.data.position;

      var top = 0,
          left = 0;

      if (position instanceof HTMLElement) {
        var element = position;

        do {
          if (!isNaN(element.offsetLeft)) {
            left += element.offsetLeft;
            top += element.offsetTop;
          }
        } while (element = element.offsetParent);
      } else if (typeof position === 'function') {
        return this.getPositionStyle(position());
      } else {
        top = position.top;
        left = position.left;
      }

      offset && offset.top && (top = top + offset.top);
      offset && offset.left && (left = left + offset.left);

      return {
        top: top,
        left: left,
        position: 'absolute'
      };
    }
  }, {
    key: 'renderDots',
    value: function renderDots() {
      var _this = this;

      var _props = this.props;
      var steps = _props.steps;
      var step = _props.step;
      var goTo = _props.goTo;

      return steps.map(function (data, index) {
        var active = index + 1 === step;
        var past = index + 1 < step;

        var style = undefined;

        if (active) {
          style = _this.styles['dotActive'];
        } else if (past) {
          style = _this.styles['dotPast'];
        } else {
          style = _this.styles['dot'];
        }

        return _react2['default'].createElement('div', {
          key: index,
          className: 'WalkThru-Nav-dot ' + (active ? 'active ' : '') + (past ? 'past ' : ''),
          style: style,
          onClick: function () {
            return goTo(index + 1);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var data = _props2.data;
      var step = _props2.step;
      var steps = _props2.steps;
      var next = _props2.next;
      var hide = _props2.hide;

      var single = steps.length === 1;
      var last = !single && steps.length === step ? true : false;

      return _react2['default'].createElement(
        'div',
        { className: 'WalkThru-Step ' + (single ? 'single ' : 'multi'), style: _extends({}, this.getPositionStyle(), this.styles['step']) },
        _react2['default'].createElement('div', { className: 'WalkThru-arrow', style: this.styles['arrow'] }),
        _react2['default'].createElement(
          'div',
          { className: 'WalkThru-Content', style: this.styles['content'] },
          _react2['default'].createElement(_CloseIcon2['default'], { style: this.styles['closeIcon'], onClick: hide }),
          data.content,
          _react2['default'].createElement(
            'div',
            { className: 'WalkThru-Footer', style: this.styles['footer'] },
            _react2['default'].createElement(
              'button',
              { onClick: next, style: single ? this.styles['fullButton'] : this.styles['button'] },
              single && 'OK Got It',
              !single && (last ? 'Done' : 'Next')
            ),
            _react2['default'].createElement(
              'div',
              { className: 'WalkThru-Nav', style: this.styles['nav'] },
              _react2['default'].createElement(
                'span',
                { className: 'WalkThru-Nav-text', style: this.styles['navText'] },
                'step ',
                step
              ),
              _react2['default'].createElement(
                'div',
                { className: 'WalkThru-Nav-dots', style: this.styles['dots'] },
                this.renderDots()
              )
            )
          )
        )
      );
    }
  }]);

  return Step;
})(_react.Component);

exports['default'] = Step;

Step.defaultProps = {
  theme: {}
};
module.exports = exports['default'];