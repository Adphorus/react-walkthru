'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var WalkThru = (function (_Component) {
  _inherits(WalkThru, _Component);

  _createClass(WalkThru, null, [{
    key: 'checkFrequency',
    value: function checkFrequency(_ref) {
      var id = _ref.id;
      var frequencyCap = _ref.frequencyCap;
      var steps = _ref.steps;

      if (!id) return false;

      var storageId = '___walkthru___.' + id + '.' + frequencyCap + '.' + steps.length;
      var impressions = parseInt(localStorage.getItem(storageId) || 0);

      if (impressions >= frequencyCap) {
        return impressions >= frequencyCap;
      } else {
        localStorage.setItem(storageId, impressions + 1);
        return false;
      }
    }
  }, {
    key: 'create',
    value: function create(props) {

      if (WalkThru.checkFrequency(props)) return null;

      var wrapper = document.createElement('div');
      var element = _react2['default'].createElement(WalkThru, Object.assign({
        ___wrapper: wrapper,
        ___portal: true
      }, props));

      var instance = props.renderer.render(element, wrapper);
      document.body.appendChild(wrapper);

      return instance;
    }
  }]);

  function WalkThru(props) {
    _classCallCheck(this, WalkThru);

    _get(Object.getPrototypeOf(WalkThru.prototype), 'constructor', this).call(this, props);

    this.state = {
      step: 1,
      show: props.show,
      steps: this.processSteps(props.steps)
    };

    this.theme = props.noStyle ? {} : (0, _styles2['default'])(props.theme);
  }

  _createClass(WalkThru, [{
    key: 'processSteps',
    value: function processSteps(steps) {
      return steps.reduce(function (list, step) {
        var startDate = step.startDate;
        var endDate = step.endDate;

        if (!startDate && !endDate) {
          list.push(step);
          return list;
        }

        var now = Date.now();
        var startTime = startDate && startDate.getTime() || now;
        var endTime = endDate && endDate.getTime() || now;

        if (now >= startTime && now <= endTime) {
          list.push(step);
        }

        return list;
      }, []);
    }
  }, {
    key: 'next',
    value: function next() {
      var _state = this.state;
      var step = _state.step;
      var steps = _state.steps;

      if (step === steps.length) {
        this.props.onEnd && this.props.onEnd();
        return this.destroy();
      }

      if (!this.props.___portal) {
        this.___portal.goTo(step + 1);
      }

      this.goTo(step + 1);
    }
  }, {
    key: 'goTo',
    value: function goTo(step) {
      var steps = this.state.steps;

      if (steps[step - 1]) {

        if (!this.props.___portal) {
          this.___portal.setState({ step: step });
        }

        this.setState({ step: step });
      }
    }
  }, {
    key: 'show',
    value: function show() {
      if (!this.props.___portal) {
        this.___portal.setState({ show: true });
      }

      this.setState({ show: true });
    }
  }, {
    key: 'hide',
    value: function hide() {
      if (!this.props.___portal) {
        this.___portal.setState({ show: false });
      }

      this.setState({ show: false });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _props = this.props;
      var renderer = _props.renderer;
      var ___wrapper = _props.___wrapper;
      var ___portal = _props.___portal;

      if (!___portal) {
        return this.___portal.destroy();
      }

      try {
        renderer.unmountComponentAtNode(___wrapper, this);
      } catch (e) {} finally {
        document.body.removeChild(this.props.___wrapper);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.props.___portal) {
        this.___portal.destroy();
      } else {
        window.removeEventListener('resize', this.___resizeHandler);
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.___portal && this.checkFrequency()) {
        this.___portal = WalkThru.create(this.props);
      } else {
        this.___resizeHandler = (function () {
          this.forceUpdate();
        }).bind(this);

        window.addEventListener('resize', this.___resizeHandler);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var ___portal = _props2.___portal;
      var theme = _props2.theme;
      var _state2 = this.state;
      var show = _state2.show;
      var step = _state2.step;
      var steps = _state2.steps;

      if (!___portal) return null;

      var current = steps[step - 1];

      return _react2['default'].createElement(
        _Wrapper2['default'],
        { show: show },
        _react2['default'].createElement(_Step2['default'], {
          theme: this.theme,
          data: current,
          steps: steps,
          step: step,
          hide: this.hide.bind(this),
          next: this.next.bind(this),
          goTo: this.goTo.bind(this)
        })
      );
    }
  }]);

  return WalkThru;
})(_react.Component);

exports['default'] = WalkThru;

WalkThru.defaultProps = {
  renderer: _react2['default'],
  show: true,
  theme: {},
  noStyle: false,
  steps: []
};

var RENDERER_DEFINITION = {
  render: _react.PropTypes.func.isRequired
};

var STEP_DEFINITION = _react.PropTypes.shape({
  position: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    top: _react.PropTypes.number,
    left: _react.PropTypes.number
  }), _react.PropTypes.instanceOf(HTMLElement), _react.PropTypes.func]).isRequired,
  offset: _react.PropTypes.shape({
    top: _react.PropTypes.number,
    left: _react.PropTypes.number
  }),
  endDate: _react.PropTypes.instanceOf(Date),
  startDate: _react.PropTypes.instanceOf(Date),
  content: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]).isRequired
});

var THEME_DEFINITION = {
  arrow: _react.PropTypes.object,
  content: _react.PropTypes.object,
  footer: _react.PropTypes.object,
  button: _react.PropTypes.object,
  fullButton: _react.PropTypes.object,
  navText: _react.PropTypes.object,
  nav: _react.PropTypes.object,
  dots: _react.PropTypes.object,
  dot: _react.PropTypes.object,
  dotActive: _react.PropTypes.object,
  dotPast: _react.PropTypes.object
};

WalkThru.propTypes = {
  id: _react.PropTypes.string,
  frequencyCap: function frequencyCap(props, propName, componentName) {
    if (props.hasOwnProperty('frequencyCap') && !props.hasOwnProperty('id')) {
      return new Error('You specified frequencyCap to a step in ' + componentName + ' but didn\'t specify an id.');
    }
  },
  renderer: _react.PropTypes.shape(RENDERER_DEFINITION),
  steps: _react.PropTypes.arrayOf(STEP_DEFINITION),
  show: _react.PropTypes.bool,
  theme: _react.PropTypes.shape(THEME_DEFINITION),
  noStyle: _react.PropTypes.bool
};
module.exports = exports['default'];