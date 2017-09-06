import React from 'react';
import {Link} from 'react-router';
import Draggable from 'react-draggable';
import Navigation from '../Navigation';

class WorkPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeDrags: 0,
      activeElement: 1,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
    this.imageArray = [
      { id: 1,
        image: '1.jpg',
       description: "Two different beds in one and a logo as versitele as the product. Oso logo and accompanying branding."},
      { id: 2,
        image: '2.png',
        description: "Morning mouth is the worst. Pizza mouth is the best. T-shirt as part of a collateral package for Cart Driver."},
      { id: 3,
        image: '3.png',
        description: "Neon is so in right now. Logo for Annex."},
      { id: 4,
        image: '4.jpg',
        description: "These apartments may be based on Earth but they certainly have an otherworldly feel. Environmental signage for Freight Residences."},
      { id: 5,
        image: '5.png',
        description: "Did we mention we have a sideproject? It's a travel zine called Waves. Typeface for Waves Hong Kong."},
      { id: 6,
        image: '6.jpg',
        description: "Follow the triangles to your destiny...or office. Environmental signage for Drive 2."},
      { id: 7,
        image: '7.jpg',
        description: "We do all the things print. Some examples of our work: Waves North, The Source Hotel Notebook, Wunder Werkz Business Card."},
      { id: 8,
        image: '8.jpg',
        description: "Ass us about our profanity posters..."},
      { id: 9,
        image: '9.png',
        description: "Convenience should always come quick. Logo for Kum Quick convenience store in Zeppelin Station."},
      { id: 10,
        image: '10.png',
        description: "Metal on the mountain. Ski design spec for Moment skis."},
      { id: 11,
        image: '11.jpg',
        description: "Signage that says what it is. Environmental signage for The Source."},
      { id: 12,
        image: '12.png',
        description: "An industrial smelting building reimagined as a food hall. Logo for The Source."},
      { id: 13,
        image: '13.png',
        description: "Signage for the hangry, because finding what you're looking for should be easy. Environmental Signage for Zeppelin Station."}];

    this.yPositionArray = [];
    this.xPositionArray = [];

    this.winWidth = window.innerWidth - 100;
    this.winHeight = window.innerHeight -100;

    this.imageArray.forEach(i => {
      let yPos = this.getRandomInt(10, this.winHeight) + 'px';
      let xPos = this.getRandomInt(60, (this.winWidth - 60)) + 'px';
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
    this.setState({activeElement: i});
  }

  onStart(i) {
   this.setState({activeDrags: ++this.state.activeDrags,
                  activeElement: i});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }


  renderimages() {
    return this.imageArray.map(i => {
      let image = i.id;
      let zIndex = this.state.activeElement === image ? '1000' : image;
      let yPos = this.yPositionArray[image - 1];
      let xPos = this.xPositionArray[image - 1];

      console.log('xPOS: ', xPos, ', yPOS: ', yPos);
      return (
        <Draggable bounds="parent" key={image}
                  onStart={this.onStart.bind(this, image)}
                  onStop={this.onStop.bind(this)}>
           <div className="image-wrapper"
                style={{position: 'absolute',
                        top: yPos,
                        right: xPos,
                        zIndex: zIndex}}
                onClick={this.setActiveElement.bind(this, image)}>
             <div className="overlay"/>
             <img src={`../styles/images/work/${i.image}`}/>
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
                some stuff we're doing <br/> @wunder_werkz
              </div>
              <div className="info-box">
                <p>
                  {this.imageArray[this.state.activeElement - 1] ? this.imageArray[this.state.activeElement - 1].description : 'go fuck yourself'}
                </p>
              </div>
            </div>
        </Navigation>
    );
  }

};

export default WorkPage;
