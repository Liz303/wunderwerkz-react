import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import Navigation from '../Navigation';

class HomePage extends React.Component {
  constructor(...args) {
    super(...args);
  }

  handleTransition(path) {
    browserHistory.push(path);
  }

  render() {
    return (
      <Navigation one="root" two="about" three="work" four="contact">
        <div className="page" ref={c => this.homepage = c}>
          <h2> Home Page </h2>
        </div>
      </Navigation>
    )
    // return (
    //   <div className="card four"
    //       key="root"
    //       ref={c => this.cardFour = c}>
    //     <div className="card three"
    //          ref={c => this.cardThree = c}
    //          onClick={this.handleTransition.bind(this, '/work')}>
    //          <div className="sidebar">
    //             <span>W<br/>O<br/>R<br/>K</span>
    //          </div>
    //       <div className="card two"
    //            ref={c => this.cardTwo = c}
    //            onClick={this.handleTransition.bind(this, '/about')}>
    //            <div className="sidebar">
    //               <span>A<br/>B<br/>O<br/>U<br/>T</span>
    //            </div>
    //         <div className={`card one ${this.activeClass("/about") ? "move" : ""}`}
    //              ref={c => this.cardOne = c}>
    //           <div className="sidebar">
    //               <span>H<br/>O<br/>M<br/>E</span>
    //           </div>
    //           <div className="page" ref={c => this.homepage = c}>
    //             <h2> Home Page </h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default HomePage;
