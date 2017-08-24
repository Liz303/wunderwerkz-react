import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class HomePage extends React.Component {
  componentWillAppear(callback) {
    debugger;
  }

  componentDidAppear() {
    debugger;
  }
  componentWillEnter() {
    debugger;
  }
  componentDidEnter() {
    debugger;
  }
  componentWillLeave (callback) {
    debugger;
    // const el = this.container;
    // TweenMax.fromTo(el, 1, {left: 0}, {left: '100%', onComplete: callback});
  }

  componentDidLeave() {
    debugger;
  }

  handleTransition() {
    browserHistory.push('/about');
  }

  render() {
    return (
      <div>
        <div className="card two"/>
        <div className="page card one"
              onClick={this.handleTransition.bind(this)}
              key="home">
          <h2> Home Page </h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
