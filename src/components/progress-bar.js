import React from 'react';

export default class ProgressBar extends React.Component {


  clamp = (min, value, max) => {
    return Math.min(Math.max(min, value), max)
  }

  render() {
    return (
      <div style={{ width: '30%', height: 10, background: '#000', borderRadius: 10, position: 'absolute', zIndex: 1, top: 10, right: 8 }}>
        <div style={{ width: `${this.clamp(0, this.props.percentage, 100)}%`, height: '100%', background: '#00f6f0', borderRadius: 8, transition: `width ${this.props.transitionBarTime}s ease-in-out` }}>

        </div>
      </div>
    );
  }
}
