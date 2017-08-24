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
    window.removeEventListener('resize', this.handelResize);
  }

  handleResize(e) {
    let width = this.width;
    let height = this.height;

    if ( width !== this.state.width ) { this.setState({ width }); }
    if (height !== this.state.height ) { this.setState({ height }); }
  }

  render() {
    let fontSize = this.state.width > this.state.height ?
                    {fontSize: '24vh', lineHeight: '27vh'} :
                   {fontSize: '14vw', lineHeight: '16vw'};
    return (
      <h2
        className={this.props.className}
        style={fontSize}> {this.props.children} </h2>
    );
  }
}

export default HalfText;
