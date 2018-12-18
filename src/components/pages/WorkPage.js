import React from "react";
import Draggable from "react-draggable";
import Navigation from "../Navigation.jsx";

class WorkPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeDrags: 0,
      activeElement: 1,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      }
    };
    this.imageArray = [
      {
        id: 1,
        image: "1.png",
        width: 300,
        height: 401,
        description:
          "Taking the old and making it new. Typography for Isabel Juice/Bar."
      },
      {
        id: 2,
        image: "2.png",
        width: 300,
        height: 401,
        description:
          "Morning mouth is the worst. Pizza mouth is the best. T-shirt as part of a collateral package for Cart Driver."
      },
      {
        id: 3,
        image: "3.jpg",
        width: 454,
        height: 391,
        description:
          "The packaging for Artic Beauty is almost as beautiful as this product will make you."
      },
      {
        id: 4,
        width: 300,
        height: 450,
        image: "4.gif",
        description:
          "Whether open or closed always stay in Big Trouble, part of our branding for Zeppelin Station."
      },
      {
        id: 5,
        image: "5.gif",
        width: 300,
        height: 225,
        description:
          "Keep your Eyes Open. Design for retail and pop-up concept."
      },
      {
        id: 6,
        image: "6.gif",
        width: 300,
        height: 450,
        description:
          "Taking design and experience from in person and into world wide web."
      },
      {
        id: 7,
        image: "7.jpg",
        width: 400,
        height: 270,
        description:
          "We do all the things print. Some examples of our work: Waves North, The Source Hotel Notebook, Wunder Werkz Business Card."
      },
      {
        id: 8,
        image: "8.jpg",
        width: 400,
        height: 600,
        description: "Ass us about our profanity posters..."
      },
      {
        id: 9,
        image: "9.png",
        width: 234,
        height: 234,
        description: "Rhyming names are fun, so is this logo for OK Poke."
      },
      {
        id: 10,
        image: "10.jpg",
        width: 300,
        height: 396,
        description:
          "Catch some zzz's in style. Part of our interiors package for The Source Hotel."
      },
      {
        id: 11,
        image: "11.jpg",
        width: 300,
        height: 450,
        description:
          "Typography, pattern and poster, oh my! See it come together at Studio Vetiver."
      },
      {
        id: 12,
        image: "12.png",
        width: 400,
        height: 154,
        description:
          "An 1800s foundry reimagined. Logo for The Source Hotel + Market Hall."
      },
      {
        id: 13,
        image: "13.jpg",
        width: 500,
        height: 333,
        description:
          "Two different beds in one and a logo as versitele as the product. Oso logo and accompanying branding."
      }
    ];

    this.yPositionArray = [];
    this.xPositionArray = [];

    this.winWidth = window.innerWidth - 100;
    this.winHeight = window.innerHeight - 100;

    this.imageArray.forEach(i => {
      let yPos = this.getRandomInt(0, this.winHeight - i.height) + "px";
      let xPos = this.getRandomInt(60, this.winWidth - i.width) + "px";
      this.yPositionArray.push(yPos);
      this.xPositionArray.push(xPos);
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  setActiveElement(i) {
    this.setState({ activeElement: i });
  }

  onStart(i) {
    this.setState({
      activeDrags: ++this.state.activeDrags,
      activeElement: i
    });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }

  renderimages() {
    return this.imageArray.map(i => {
      let image = i.id;
      let zIndex = this.state.activeElement === image ? "1000" : image;
      let yPos = this.yPositionArray[image - 1];
      let xPos = this.xPositionArray[image - 1];

      return (
        <Draggable
          bounds="parent"
          key={image}
          onStart={this.onStart.bind(this, image)}
          onStop={this.onStop.bind(this)}
        >
          <div
            className="image-wrapper"
            style={{
              position: "absolute",
              top: yPos,
              right: xPos,
              zIndex: zIndex
            }}
            onClick={this.setActiveElement.bind(this, image)}
          >
            <div className="overlay" />
            <img src={`../styles/images/work/${i.image}`} />
          </div>
        </Draggable>
      );
    });
  }

  render() {
    return (
      <Navigation one="work" two="contact" three="root" four="about">
        <div className="work page">
          {this.renderimages()}
          <div className="instagram-link rainbow">
            <a href="https://www.instagram.com/wunder_werkz/" target="blank">
              some stuff we're doing <br /> @wunder_werkz
            </a>
          </div>
          <div className="info-box">
            <p>
              {this.imageArray[this.state.activeElement - 1]
                ? this.imageArray[this.state.activeElement - 1].description
                : "go fuck yourself"}
            </p>
          </div>
        </div>
      </Navigation>
    );
  }
}

export default WorkPage;
