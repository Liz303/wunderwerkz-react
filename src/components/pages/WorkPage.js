import React from 'react';
import {Link} from 'react-router';
import Draggable from 'react-draggable';

// Since this component is simple and static, there's no parent container for it.
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
    this.imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.colorArray = ['#00ffec', '#00b3a5', '#ff4300', '#cc3314'];

    this.yPositionArray = [];
    this.xPositionArray = [];
    this.colorArrayStatic = [];

    this.winWidth = window.innerWidth - 100;
    this.winHeight = window.innerHeight -100;

    this.imageArray.forEach(i => {
      let yPos = this.getRandomInt(0, this.winHeight) + 'px';
      let xPos = this.getRandomInt(0, this.winWidth) + 'px';
      let color = this.colorArray[this.getRandomInt(0,3)];
      this.yPositionArray.push(yPos);
      this.xPositionArray.push(xPos);
      this.colorArrayStatic.push(color);
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

  renderimages() {
    return this.imageArray.map(i => {
      let border = '1px solid ' + this.colorArrayStatic[i - 1];
      let boxShadow = '5px 5px ' + this.colorArrayStatic[i -1];
      let zIndex = this.state.activeElement === i ? '1000' : i;
      let yPos = this.yPositionArray[i - 1];
      let xPos = this.xPositionArray[i -1 ];

      return (
        <Draggable key={i}>
           <div className="image-wrapper"
                style={{position: 'absolute',
                        bottom: yPos,
                        right: xPos,
                        border: border,
                        boxShadow: boxShadow,
                        zIndex: zIndex}}
                onStart={this.onStart.bind(this, i)}
                onStop={this.onStop.bind(this)}
                onClick={this.setActiveElement.bind(this, i)}>
             <div className="overlay"/>
             <img src={`../styles/images/work/${i}.jpg`}/>
           </div>
         </Draggable>
      );
    });
  }

  onStart(i) {
   this.setState({activeDrags: ++this.state.activeDrags,
                  activeElement: i});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
  }

  render() {
    return (
      <div className="work page">
        {this.renderimages()}
      </div>
    );
  }

};

export default WorkPage;
