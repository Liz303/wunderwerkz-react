import React from 'react';

class HalfText extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      width: this.width,
      height: this.height
    }
  }

  get width() {
    return window.innerWidth/2;
  }

  get height() {
    return window.innerHeight/2;
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handelResize.bind(this));
  }

  handleResize(e) {
    let width = this.width;
    let height = this.height;

    if ( width !== this.state.width ) { this.setState({ width }); }
    if (height !== this.state.height ) { this.setState({ height }); }
  }

  render() {
    let fontSize = this.state.width > this.state.height ?
                   {fontSize: '14vw', lineHeight: '16vw'} :
                   {fontSize: '14vh', lineHeight: '16vh'};
    return (
      <h2 style={fontSize}> {this.props.children} </h2>
    );
  }
}

export default HalfText;
