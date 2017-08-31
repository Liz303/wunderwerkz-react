import React from 'react';
import {Link} from 'react-router';
import Navigation from '../Navigation';

class ContactPage extends React.Component {
  render() {
    return (
      <Navigation one="contact" two="root" three="about" four="work">
        <div className="page" ref={c => this.homepage = c}>
          <h2> Contact Page </h2>
        </div>
      </Navigation>
    );
  }
}

export default ContactPage;
