import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';

class HomePage extends React.Component {
  constructor(...args) {
    super(...args);
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
      <div className="card four"
          key="root"
          ref={c => this.cardFour = c}>
        <div className="card three"
             ref={c => this.cardThree = c}>
          <div className="card two"
               ref={c => this.cardTwo = c}
               onClick={this.handleTransition.bind(this)}>
               <div className="sidebar">
                  <span>A<br/>B<br/>O<br/>U<br/>T</span>
               </div>
            <div className="card one"
                 ref={c => this.cardOne = c}>
              <div className="sidebar">
                  <span>H<br/>O<br/>M<br/>E</span>
              </div>
              <div className="page"  ref={c => this.homepage = c}>
                <h2> Home Page </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
