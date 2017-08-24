import React from 'react';
import { browserHistory } from 'react-router';
import HalfText from './HalfText';
import ScrollText from './ScrollText';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  handleTransition() {
    browserHistory.push('/');
  }

  componentDidMount() {
    debugger;
  }

  componentWillLeave() {
    debugger;
  }

  render() {
    return (
      <div className="page card one"
            key="about">
        <div className="flex-wrapper about">
          <div className="flex-half center"
               onClick={this.handleTransition.bind(this)}>
            <HalfText
              className='cursor-click'>
               Bad Apples Good Design
            </HalfText>
          </div>
          <div className="flex-half">
            <ScrollText
              className='cursor-scroll'>
              <p className="center rainbow"> ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏</p>
              <p>
                Wunder Werkz is a full service design studio based in Denver,
                Colorado and filled with design geeks and
                pizza 🍕 🍕 🍕 lovers.
                We work on both self produced and commissioned projects and
                believe in style and simplicity that isn’t afraid to have some
                fun 🎉 🎉 🎉.
              </p>
              <p>
                From posters to palaces, typography to tattoo parlors,
                barber shops to brothels, if you want to step out of the box and
                get a little dangerous then we are the design studio for you.
              </p>
              <div className="full-width-button cursor-download">
                <button> Download a Deck </button>
              </div>
              <p className="center rainbow"> ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏</p>

          </ScrollText>

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
