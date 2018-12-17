import React from "react";
import { browserHistory } from "react-router";
import HalfText from "../HalfText.jsx";
import ScrollText from "../ScrollText.jsx";
import Navigation from "../Navigation.jsx";

class AboutPage extends React.Component {
  render() {
    return (
      <Navigation one="about" two="work" three="contact" four="root">
        <div className="page">
          <div className="flex-wrapper about">
            <div
              className="flex-half center"
              onClick={() => {
                browserHistory.push("/work");
              }}
            >
              <HalfText className="cursor-click">
                Bad Apples Good Design
              </HalfText>
            </div>
            <div className="flex-half" onClick={e => e.stopPropagation()}>
              <ScrollText className="cursor-scroll">
                <p className="center rainbow">
                  {" "}
                  ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏
                </p>
                <p>
                  Wunder Werkz is a full service design studio based in Denver,
                  Colorado and filled with design geeks and pizza 🍕 🍕 🍕
                  lovers. We work on both self produced and commissioned
                  projects and believe in style and simplicity that isn’t afraid
                  to have some fun 🎉 🎉 🎉.
                </p>
                <p>
                  From posters to palaces, typography to tattoo parlors, barber
                  shops to brothels, if you want to step out of the box and get
                  a little dangerous then we are the design studio for you.
                </p>
                <p className="center rainbow">
                  {" "}
                  ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏ ✏
                </p>
                <h2> We've Worked With Some Cool Cats: </h2>
                <p className="small">
                  The Source Hotel + Market Hall 👌 New Belgium 👌 Zeppelin
                  Station 👌 Safta 👌 Big Trouble 👌 Niceland 👌 DVLP DNVR 👌
                  Station 16 👌 Cart Driver 👌 OSO 👌 Winter session 👌
                  Wurstkütche 👌 Dynia Architects 👌 Madison House 👌 Shake
                  Shack 👌 Open Desk 👌 Skingraft 👌 Hrim 👌 Goodr 👌 Poketo 👌
                  Yacht Club 👌 Comal
                </p>
              </ScrollText>
            </div>
            <div className="absolute-button cursor-download">
              <a
                href="../styles/images/about/Wunderwerkz_capabilities.pdf"
                download
              >
                <button> The Deck </button>
              </a>
            </div>
          </div>
        </div>
      </Navigation>
    );
  }
}

export default AboutPage;
