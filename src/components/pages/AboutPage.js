import React from 'react';
import HalfText from '../HalfText';
import ScrollText from '../ScrollText';
import Navigation from '../Navigation';

class AboutPage extends React.Component {
  render() {
    return (
      <Navigation one="about" two="work" three="contact" four="root">
        <div className="page"
             ref={c => this.aboutpage = c}>
          <h2> About Page </h2>
        </div>
      </Navigation>
    );
  }
}

export default AboutPage;
