import React from 'react';

class ScrollText extends React.Component {
  render() {
    return (
      <div className={`scrolltext ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default ScrollText;
