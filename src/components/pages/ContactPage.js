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
                 Reach Out and Touch Us
              </HalfText>
            </div>
            <div className="flex-half center"
                 onClick={e => e.stopPropagation()}>
              <ScrollText
                className='cursor-scroll'>
                <div className="info-group">
                  <p className="center single-line">
                    📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍
                  </p>
                  <p> Stop By </p>
                  <a href="https://www.google.com/maps/place/3515+Ringsby+Ct,+Denver,+CO+80216/@39.7733508,-104.9828953,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7903ec2bc8b1:0x5782fe9631c8fd61!8m2!3d39.7733508!4d-104.9807066?sa=X&ved=0ahUKEwitgtycvITWAhVT6Z8KHRlVA5EQ8gEIJzAA"
                     className="center">
                    <p> 3515 Ringsby Ct #308 <br/> DENVER, CO 80216 </p>
                  </a>
                </div>
                <div className="info-group">
                  <p className="center single-line">
                    📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫
                  </p>
                  <p> send a note </p>
                  <a href="mailto:hello@iheartwunderwerkz.com">
                    <p> hello@iheartwunderwerkz.com </p>
                  </a>
                </div>
                <div className="info-group">
                  <p className="center single-line">
                     📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞
                  </p>
                  <p> drop a line </p>
                  <p>303.594.4990</p>
                </div>
                <div className="info-group">
                  <p className="center single-line">
                    📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷
                  </p>
                  <p> peep the grams </p>
                  <a href="https://www.instagram.com/wunder_werkz/">
                    <p>@wunder_werkz</p>
                  </a>
                </div>
                <div className="info-group">
                  <p className="center single-line">
                    👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿
                  </p>
                  <p> like us on the fbs </p>
                  <a href="https://www.facebook.com/wunderwerkz">
                    <p>/wunderwerkz</p>
                  </a>
                </div>
                <div className="info-group">
                  <p className="center single-line"> 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎</p>
                  <p> get behanced </p>
                  <a href="https://www.behance.net/wunder_werkz">
                    <p>/wunder_werkz</p>
                  </a>
                </div>
          </ScrollText>
            </div>
          </div>
        </div>
      </Navigation>
    );
  }
}
//
// <p className="center single-line"> 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍 📍</p>
// <a href="https://www.google.com/maps/place/3515+Ringsby+Ct,+Denver,+CO+80216/@39.7733508,-104.9828953,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7903ec2bc8b1:0x5782fe9631c8fd61!8m2!3d39.7733508!4d-104.9807066?sa=X&ved=0ahUKEwitgtycvITWAhVT6Z8KHRlVA5EQ8gEIJzAA"
//    className="center">
//   <p> 3515 Ringsby Ct #308 <br/> DENVER, CO 80216 </p>
// </a>
// <p className="center single-line"> 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫 📫</p>
// <a href="mailto:hello@iheartwunderwerkz.com">
//   <p> hello@iheartwunderwerkz.com </p>
// </a>
// <p className="center single-line">  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞  📞</p>
// <p>303.594.4990</p>
// <p className="center single-line"> 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 📷 </p>
// <a href="https://www.instagram.com/wunder_werkz/">
//   <p>@wunder_werkz</p>
// </a>
// <p className="center single-line"> 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿 👍 👍🏻 👍🏼 👍🏽 👍🏾 👍🏿  </p>
// <a href="https://www.facebook.com/wunderwerkz">
//   <p>/wunderwerkz</p>
// </a>
// <p className="center single-line"> 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎 📎</p>
// <a href="https://www.behance.net/wunder_werkz">
//   <p>/wunder_werkz</p>
// </a>

export default ContactPage;
