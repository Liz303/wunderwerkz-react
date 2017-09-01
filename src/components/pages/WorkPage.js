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
       description: "This is one"},
      { id: 2,
        image: '2.jpg',
        description: "This is two"},
      { id: 3,
        image: '3.png',
        description: "This is three"},
      { id: 4,
        image: '4.jpg',
        description: "This is four"},
      { id: 5,
        image: '5.jpg',
        description: "This is five"},
      { id: 6,
        image: '6.jpg',
        description: "This is six"},
      { id: 7,
        image: '7.jpg',
        description: "This is seven"},
      { id: 8,
        image: '8.jpg',
        description: "This is eight"},
      { id: 9,
        image: '9.jpg',
        description: "This is nine"},
      { id: 10,
        image: '10.jpg',
        description: "This is ten"}];
    this.colorArray = ['#00ffec', '#00b3a5', '#ff4300', '#cc3314'];

    this.yPositionArray = [];
    this.xPositionArray = [];
    this.colorArrayStatic = [];

    this.winWidth = window.innerWidth - 100;
    this.winHeight = window.innerHeight -100;

    this.imageArray.forEach(i => {
      let yPos = this.getRandomInt(10, this.winHeight) + 'px';
      let xPos = this.getRandomInt(60, (this.winWidth - 60)) + 'px';
      let color = this.colorArray[this.getRandomInt(0,3)];
      this.yPositionArray.push(yPos);
      this.xPositionArray.push(xPos);
      this.colorArrayStatic.push(color);
    });
    console.log(this.xPositionArray);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  setActiveElement(i) {
    console.log('active element ', i);
    this.setState({activeElement: i});
  }

  onStart(i) {
    console.log('start ', i);
   this.setState({activeDrags: ++this.state.activeDrags,
                  activeElement: i});
  }

  onStop() {
    console.log('stopt');
    this.setState({activeDrags: --this.state.activeDrags});
  }


  renderimages() {
    return this.imageArray.map(i => {
      let image = i.id;
      let border = '1px solid ' + this.colorArrayStatic[image - 1];
      let boxShadow = '5px 5px ' + this.colorArrayStatic[image -1];
      let zIndex = this.state.activeElement === image ? '1000' : image;
      let yPos = this.yPositionArray[image - 1];
      let xPos = this.xPositionArray[image - 1];

      return (
        <Draggable bounds="parent" key={image}
                  onStart={this.onStart.bind(this, image)}
                  onStop={this.onStop.bind(this)}>
           <div className="image-wrapper"
                style={{position: 'absolute',
                        bottom: yPos,
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
