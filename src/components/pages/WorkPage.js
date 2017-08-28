import React from 'react';
import {Link} from 'react-router';
import Draggable from 'react-draggable';

// Since this component is simple and static, there's no parent container for it.
class WorkPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
  }


  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  renderimages() {
    let imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let colorArray = ['#00ffec', '#00b3a5', '#ff4300', '#cc3314'];

    let winWidth = window.innerWidth - 100;
    let winHeight = window.innerHeight;

    return imageArray.map(i => {
      let yPosition = this.getRandomInt(0, winHeight) + 'px';
      let xPosition = this.getRandomInt(0, winWidth) + 'px';
      let color = colorArray[this.getRandomInt(0,3)];
      let border = '1px solid ' + color;
      let boxShadow = '5px 5px ' + color;
      return (
        <Draggable>
           <div className="image-wrapper"
                style={{position: 'absolute',
                        bottom: yPosition,
                        right: xPosition,
                        border: border,
                        boxShadow: boxShadow}}
                onStart={this.onStart.bind(this)}
                onStop={this.onStop.bind(this)}>
             <div className="overlay"/>
             <img src={`../styles/images/work/${i}.jpg`}/>
           </div>
         </Draggable>
      );
    });
  }

  onStart() {
    console.log('start drag');
   this.setState({activeDrags: ++this.state.activeDrags});
  }

  onStop() {
    this.setState({activeDrags: --this.state.activeDrags});
    console.log('stop drag');
  }

  render() {
    return (
      <div className="work page">
        {this.renderimages()}
      </div>
    );


  //   <Draggable
  //    onStart={this.onStart.bind(this)}
  //    onStop={this.onStop.bind(this)}>
  //   <div className="image-container oso">
  //   </div>
  //  </Draggable>
  //  <Draggable
  //   onStart={this.onStart.bind(this)}
  //   onStop={this.onStop.bind(this)}>
  //   <div className="image-wrapper">
  //     <div className="overlay"/>
  //     <img src="../styles/images/work/drive.jpg"/>
  //   </div>
  // </Draggable>
  }

};

export default WorkPage;
