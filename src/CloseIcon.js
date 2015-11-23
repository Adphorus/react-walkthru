import React from 'react';

export default function(props) {
  return (
    <svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' fit style={ props.style } onClick={ props.onClick }>
      <g><path d='M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z'></path></g>
    </svg>
  )
}
