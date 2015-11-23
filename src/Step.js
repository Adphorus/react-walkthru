import React, { Component, PropTypes } from 'react';
import CloseIcon from './CloseIcon';

export default class Step extends Component {

  constructor(props, context) {
    super(props, context);
    this.styles = props.theme;
  }

  getPositionStyle(interpolated) {
    const { offset } = this.props.data;
    const position = interpolated || this.props.data.position;

    let top = 0, left = 0;

    if (position instanceof HTMLElement) {
      let element = position;

      do {
        if (!isNaN(element.offsetLeft)) {
          left += element.offsetLeft;
          top  += element.offsetTop;
        }
      } while ( element = element.offsetParent );

    } else if (typeof position === 'function') {
      return this.getPositionStyle( position() );
    } else  {
      top  = position.top;
      left = position.left;
    }

    offset && offset.top && (top = top + offset.top);
    offset && offset.left && (left = left + offset.left);

    return {
      top,
      left,
      position   : 'absolute'
    }
  }

  renderDots() {
    const { steps, step, goTo } = this.props;

    return steps.map((data, index) => {
      const active = (index + 1) === step;
      const past   = (index + 1) < step;

      let style;

      if (active) {
        style = this.styles['dotActive'];
      } else if (past) {
        style = this.styles['dotPast'];
      } else {
        style = this.styles['dot'];
      }

      return (
        <div
          key={ index }
          className={ 'WalkThru-Nav-dot ' + (active ? 'active ' : '') + (past ? 'past ' : '')  }
          style={ style }
          onClick={ ()=> goTo(index + 1) }
        />
      )
    });
  }

  render() {
    const { data, step, steps, next, hide } = this.props;
    const single = (steps.length === 1);
    const last   = (!single && steps.length === step) ? true : false;

    return (
      <div className={ 'WalkThru-Step ' + (single ? 'single ' : 'multi') } style={{ ...this.getPositionStyle(), ...this.styles['step'] }}>
        <div className='WalkThru-arrow' style={ this.styles['arrow'] } />
        <div className='WalkThru-Content' style={ this.styles['content'] }>
          <CloseIcon style={ this.styles['closeIcon'] } onClick={ hide } />
          { data.content }
          <div className='WalkThru-Footer' style={ this.styles['footer'] }>
            <button onClick={ next } style={ single ? this.styles['fullButton'] : this.styles['button'] }>
              { single ? 'OK Got It' : '' }
              { last ? 'Done' : 'Next' }
            </button>
            <div className='WalkThru-Nav' style={ this.styles['nav'] }>
              <span className='WalkThru-Nav-text' style={ this.styles['navText'] }>step { step }</span>
              <div className='WalkThru-Nav-dots' style={ this.styles['dots'] }>
                { this.renderDots() }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Step.defaultProps = {
  theme : {}
}
