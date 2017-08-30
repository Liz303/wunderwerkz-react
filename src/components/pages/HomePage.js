import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class HomePage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isTransitioning: this.isTransitioning
    }
  }

  get isTransitioning() {
    if (this.props.key === 'root') {
      return this.props.transitioning;
    }
    return false;
  }

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
    const el = this.container;
    TweenMax.fromTo(el, 1, {left: 0}, {left: '100%', onComplete: callback});
  }

  componentDidLeave() {
    debugger;
  }

  // handleTransition() {
  //   debugger;
  //   browserHistory.push('/about');
  // }

  render() {
    return (
      <div className={`page ${this.state.isTransitioning ? 'transitioning' : ''}`} key="home" ref={c => this.homepage = c}>
        <h2> Home Page </h2>
      </div>
    );
  }
}

export default HomePage;
