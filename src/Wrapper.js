import React, { Component, PropTypes } from 'react';

export default class Wrapper extends Component {
  getStyles() {
    const { show } = this.props;

    return {
      display     : (show) ? 'block' : 'none',
      position    : 'absolute',
      width       : '100%',
      height      : 0,
      left        : 0,
      top         : 0,
      transform   : 'scale(1)',
    }
  }

  render() {
    return (
      <div className='WalkThru-Wrapper' style={ this.getStyles() }>
        { this.props.children }
      </div>
    )
  }
}
