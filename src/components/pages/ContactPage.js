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
                  <p className="left"> ✌ </p>
                  <p className="left">
                    Stop By <br/>
                    <a href="https://www.google.com/maps/place/3515+Ringsby+Ct,+Denver,+CO+80216/@39.7733508,-104.9828953,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7903ec2bc8b1:0x5782fe9631c8fd61!8m2!3d39.7733508!4d-104.9807066?sa=X&ved=0ahUKEwitgtycvITWAhVT6Z8KHRlVA5EQ8gEIJzAA"
                       className="center">
                      3515 Ringsby Ct #308 <br/> DENVER, CO 80216
                    </a>
                  </p>
                </div>

                <div className="info-group">
                  <p className="left"> 📫 </p>
                  <p className="left">
                    send a note <br/>
                    <a href="mailto:hello@iheartwunderwerkz.com">
                      hello@iheartwunderwerkz.com
                    </a>
                  </p>
                </div>

                <div className="info-group">
                  <p className="left"> 📟 </p>
                  <p className="left">
                    drop a line <br/>
                    303.594.4990
                  </p>
                </div>
                <div className="info-group">
                  <p className="left"> 📷  </p>
                  <p className="left">
                    peep the grams <br/>
                    <a href="https://www.instagram.com/wunder_werkz/">
                      @wunder_werkz
                    </a>
                  </p>
                </div>
          </ScrollText>
            </div>
          </div>
        </div>
      </Navigation>
    );
  }
}

export default ContactPage;
