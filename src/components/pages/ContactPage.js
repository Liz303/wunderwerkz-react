import React from "react";
import { browserHistory } from "react-router";
import HalfText from "../HalfText.jsx";
import ScrollText from "../ScrollText.jsx";
import Navigation from "../Navigation.jsx";

class ContactPage extends React.Component {
  render() {
    return (
      <Navigation one="contact" two="root" three="about" four="work">
        <div className="page contact">
          <div className="flex-wrapper about">
            <div
              className="flex-half center"
              onClick={() => {
                browserHistory.push("/");
              }}
            >
              <HalfText className="cursor-click">
                Reach Out and Touch Us
              </HalfText>
            </div>
            <div
              className="flex-half center"
              onClick={e => e.stopPropagation()}
            >
              <ScrollText className="cursor-scroll">
                <div className="info-wrapper">
                  <div className="info-group">
                    <p className="left"> ✌ </p>
                    <p className="left">
                      Stop By <br />
                      <a
                        href="https://goo.gl/maps/VvSC31W36duda8oTA"
                        className="center"
                      >
                        3455 Ringsby Ct #112 <br /> DENVER, CO 80216 <br /> USA
                        <br /> Earf
                      </a>
                    </p>
                  </div>

                  <div className="info-group">
                    <p className="left"> 📫 </p>
                    <p className="left">
                      send a note <br />
                      <a href="mailto:hello@iheartwunderwerkz.com">
                        hello@iheartwunderwerkz.com
                      </a>
                    </p>
                  </div>

                  <div className="info-group">
                    <p className="left"> 📟 </p>
                    <p className="left">
                      drop a line <br />
                      303.594.4990
                    </p>
                  </div>
                  <div className="info-group">
                    <p className="left"> 📷 </p>
                    <p className="left">
                      peep the grams <br />
                      <a href="https://www.instagram.com/wunder_werkz/">
                        @wunder_werkz
                      </a>
                    </p>
                  </div>
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
