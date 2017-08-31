import React from 'react';
import { browserHistory } from 'react-router';
import HalfText from '../HalfText';
import ScrollText from '../ScrollText';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  constructor(...args) {
    super(...args);
  }

  handleTransition() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="card four"
           key="about"
          ref={c => this.cardFour = c}>
          <div className="sidebar">
              <span>H<br/>O<br/>M<br/>E</span>
          </div>
        <div className="card three"
             ref={c => this.cardThree = c}>
          <div className="card two"
               ref={c => this.cardTwo = c}
               onClick={this.handleTransition.bind(this)}>
            <div className="card one"
                 ref={c => this.cardOne = c}>
                 <div className="sidebar">
                    <span>A<br/>B<br/>O<br/>U<br/>T</span>
                 </div>
              <div className="page"
                   ref={c => this.aboutpage = c}>
                <h2> About Page </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// <h4> Awesome Client List </h4>
// <p className="small-text">
//   DGS Law, Track Architecture, The Source Hotel, The Source, RiNo Yacht Club, Goldyn, New Belgium, Tomahawk International, Full Tilt, Line Skis, The Bureau, South of France, Among the Colors, Zeppelin Development, Phunkshun Wear, 34 degrees, Dynia Architects, MM Local, Plot Project, The Proper Pour, Guilded, Oso, Bun Bun, Wurstküche.
// </p>

export default AboutPage;
