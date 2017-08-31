import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import Navigation from '../Navigation';

class HomePage extends React.Component {
  render() {
    return (
      <Navigation one="root" two="about" three="work" four="contact">
        <div className="page" ref={c => this.homepage = c}>
          <h2> Home Page </h2>
        </div>
      </Navigation>
    );
  }
}

export default HomePage;
