import React, { Component, PropTypes } from 'react';
import Wrapper from './Wrapper';
import Step from './Step';
import getStyles from './styles';

export default class WalkThru extends Component {

  static checkFrequency({ id, frequencyCap, steps }) {
    if (!id) return false;

    const storageId   = `___walkthru___.${id}.${frequencyCap}.${steps.length}`;
    const impressions = parseInt(localStorage.getItem(storageId) || 0);

    if (impressions >= frequencyCap) {
      return impressions >= frequencyCap;
    } else {
      localStorage.setItem(storageId, impressions + 1);
      return false;
    }
  }

  static create(props){

    if (WalkThru.checkFrequency(props)) return null;

    const wrapper  = document.createElement('div');
    const element  = React.createElement(WalkThru, Object.assign({
      ___wrapper : wrapper,
      ___portal  : true
    }, props));

    const instance = props.renderer.render(element, wrapper);
    document.body.appendChild(wrapper);

    return instance;
  }

  constructor(props) {
    super(props);

    this.state = {
      step  : 1,
      show  : props.show,
      steps : this.processSteps(props.steps),
    }

    this.theme = props.noStyle ? {} : getStyles(props.theme);
  }

  processSteps(steps) {
    return steps.reduce((list, step) => {
      const { startDate, endDate } = step;

      if (!startDate && !endDate) {
        list.push(step);
        return list;
      }

      const now       = Date.now();
      const startTime = ( startDate && startDate.getTime() ) || now;
      const endTime   = ( endDate && endDate.getTime() ) || now;

      if (now >= startTime && now <= endTime) {
        list.push(step);
      }

      return list;
    }, []);
  }

  next() {
    const { step, steps }  = this.state;

    if (step === steps.length) {
      this.props.onEnd && this.props.onEnd();
      return this.destroy();
    }

    if (!this.props.___portal) {
      this.___portal.goTo(step + 1);
    }

    this.goTo(step + 1);
  }

  goTo(step) {
    const { steps } = this.state;

    if (steps[step - 1]) {

      if (!this.props.___portal) {
        this.___portal.setState({ step });
      }

      this.setState({ step });
    }
  }

  show() {
    if (!this.props.___portal) {
      this.___portal.setState({ show : true });
    }

    this.setState({ show : true });
  }

  hide() {
    if (!this.props.___portal) {
      this.___portal.setState({ show : false });
    }

    this.setState({ show : false });
  }

  destroy() {
    const { renderer, ___wrapper, ___portal } = this.props;

    if (!___portal) {
      return this.___portal.destroy();
    }

    try {
      renderer.unmountComponentAtNode(___wrapper, this);
    } catch (e) {
    } finally {
      document.body.removeChild(this.props.___wrapper);
    }
  }

  componentWillUnmount() {
    if (!this.props.___portal) {
      this.___portal.destroy();
    } else {
      window.removeEventListener('resize', this.___resizeHandler);
    }
  }

  componentWillMount() {
    if (!this.props.___portal && this.checkFrequency()) {
      this.___portal = WalkThru.create(this.props);
    } else {
      this.___resizeHandler = function() {
        this.forceUpdate();
      }.bind(this);

      window.addEventListener(
        'resize', this.___resizeHandler
      )
    }
  }

  render() {
    const { ___portal, theme } = this.props;
    const { show, step, steps } = this.state;

    if (!___portal) return null;

    const current = steps[step - 1];

    return (
      <Wrapper show={ show }>
        <Step
          theme={ this.theme }
          data={ current }
          steps={ steps }
          step={ step }
          hide={ this.hide.bind(this) }
          next={ this.next.bind(this) }
          goTo={ this.goTo.bind(this) }
        />
      </Wrapper>
    )
  }
}

WalkThru.defaultProps = {
  renderer          : React,
  show              : true,
  theme             : {},
  noStyle           : false,
  steps             : [],
}

const RENDERER_DEFINITION = {
  render            : PropTypes.func.isRequired
}

const STEP_DEFINITION = PropTypes.shape({
  position          : PropTypes.oneOfType([
    PropTypes.shape({
      top           : PropTypes.number,
      left          : PropTypes.number,
    }),
    PropTypes.instanceOf(HTMLElement),
    PropTypes.func,
  ]).isRequired,
  offset            : PropTypes.shape({
    top             : PropTypes.number,
    left            : PropTypes.number,
  }),
  endDate           : PropTypes.instanceOf(Date),
  startDate         : PropTypes.instanceOf(Date),
  content           : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
});

const THEME_DEFINITION = {
  arrow             : PropTypes.object,
  content           : PropTypes.object,
  footer            : PropTypes.object,
  button            : PropTypes.object,
  fullButton        : PropTypes.object,
  navText           : PropTypes.object,
  nav               : PropTypes.object,
  dots              : PropTypes.object,
  dot               : PropTypes.object,
  dotActive         : PropTypes.object,
  dotPast           : PropTypes.object,
}

WalkThru.propTypes = {
  id                : PropTypes.string,
  frequencyCap      : (props, propName, componentName) => {
    if (props.hasOwnProperty('frequencyCap') && !props.hasOwnProperty('id')) {
      return new Error('You specified frequencyCap to a step in '+ componentName +' but didn\'t specify an id.');
    }
  },
  renderer          : PropTypes.shape( RENDERER_DEFINITION ),
  steps             : PropTypes.arrayOf( STEP_DEFINITION ),
  show              : PropTypes.bool,
  theme             : PropTypes.shape( THEME_DEFINITION ),
  noStyle           : PropTypes.bool,
}
