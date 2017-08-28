import React from 'react';

class Navigation extends React.Component {
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

export default Navigation;
