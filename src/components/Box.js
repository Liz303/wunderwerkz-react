import React from 'react';
import {TweenMax} from "gsap";

// Since this component is simple and static, there's no parent container for it.
class Box extends React.Component {
  componentWillEnter (callback) {
   const el = this.container;
   TweenMax.fromTo(el, 1, {left: '100px', opacity: 1}, {left: 0, opacity: 1, onComplete: callback});
 }

 componentWillLeave (callback) {
   const el = this.container;
   TweenMax.fromTo(el, 1, {left: 0, opacity: 1}, {left: '100%', opacity: 1, onComplete: callback});
 }

 render () {
   return <div className="box" ref={c => this.container = c}/>;
 }
}

export default Box;
