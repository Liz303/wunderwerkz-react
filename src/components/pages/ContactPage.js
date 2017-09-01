import React from 'react';
import {Link} from 'react-router';
import HalfText from '../HalfText';
import ScrollText from '../ScrollText';
import Navigation from '../Navigation';

class ContactPage extends React.Component {
  render() {
    return (
      <Navigation one="contact" two="root" three="about" four="work">
        <div className="page contact">
          <div className="flex-wrapper about">
            <div className="flex-half center">
              <HalfText
                className='cursor-click'>
                 Reach Out and Get in Touch
              </HalfText>
            </div>
            <div className="flex-half center"
                 onClick={e => e.stopPropagation()}>
              <ScrollText
                className='cursor-scroll'>
                <p className="center single-line"> 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍</p>
                <a href="https://www.google.com/maps/place/3515+Ringsby+Ct,+Denver,+CO+80216/@39.7733508,-104.9828953,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7903ec2bc8b1:0x5782fe9631c8fd61!8m2!3d39.7733508!4d-104.9807066?sa=X&ved=0ahUKEwitgtycvITWAhVT6Z8KHRlVA5EQ8gEIJzAA"
                   className="center">
                  <p> 3515 Ringsby Ct #308 </p>
                  <p> DENVER, CO 80216 </p>
                </a>
                <p className="center single-line"> 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫</p>
                <a href="mailto:hello@iheartwunderwerkz.com">
                  <p> hello@iheartwunderwerkz.com </p>
                </a>
                <p className="center single-line">  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞</p>
                <p>303.594.4990</p>
                <p className="center single-line"> 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 </p>
                <a href="https://www.instagram.com/wunder_werkz/">
                  <p>@wunder_werkz</p>
                </a>
          </ScrollText>
            </div>
          </div>
        </div>
      </Navigation>
    );
  }
}

export default ContactPage;
