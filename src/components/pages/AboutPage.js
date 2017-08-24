import React from 'react';
import { browserHistory } from 'react-router';
import HalfText from '../HalfText';
import ScrollText from '../ScrollText';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  handleTransition() {
    browserHistory.push('/');
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

  render() {
    return (
      <div>
        <div className="card two"/>
        <div className="page card one"
              onClick={this.handleTransition.bind(this)}
              key="about">
          <h2> absolutePage </h2>
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
