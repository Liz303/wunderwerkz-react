import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cardsToMove: null
    }
  }

  oneCard(previousPath, nextPath) {
    if ((previousPath === '/' && nextPath === '/about') ||
        (previousPath === '/about' && nextPath ==='/work') ||
        (previousPath === '/work' && nextPath === '/contact') ||
        (previousPath === '/contact' && nextPath === '/')) {
      return true;
    }
    return false;
  }

  twoCard(previousPath, nextPath) {
    if ((previousPath === '/' && nextPath === '/work') ||
        (previousPath === '/about' && nextPath === '/contact') ||
        (previousPath === '/work' && nextPath === '/') ||
        (previousPath === '/contact') && nextPath === '/about') {
          return true;
    }
    return false;
  }

  threeCard(previousPath, nextPath) {
    if ((previousPath === '/' && nextPath === '/contact') ||
        (previousPath === '/about' && nextPath === '/') ||
        (previousPath === '/work' && nextPath === '/about') ||
        (previousPath === '/contact') && nextPath === '/work') {
          return true;
    }
    return false;
  }

  componentWillReceiveProps(nextProps) {
    let previousPath = this.props.location.pathname;
    let nextPath =  nextProps.location.pathname;
    if (previousPath !== nextPath) {
      if (this.oneCard(previousPath, nextPath)) {
        this.setState({cardsToMove: 'one'});
      } else if (this.twoCard(previousPath, nextPath)) {
        this.setState({cardsToMove: 'two'});
      } else if (this.threeCard(previousPath, nextPath)) {
        this.setState({cardsToMove: 'three'});
      }
    }
  }

  render() {
    let path = this.props.location.pathname;
    let segment = path.split('/')[1] || 'root';
    
    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionAppearTimeout={500}
        transitionAppear={true}
        transitionEnter={true}
        transitionLeave={true}
        transitionName={{
          enter: 'enter',
          enterActive: 'enterActive',
          leave: 'leave',
          leaveActive: 'leaveActive',
          appear: 'appear',
          appearActive: 'appearActive'
        }}
        className={this.state.cardsToMove}>
        {React.cloneElement(this.props.children,{ key: segment } )}
     </ReactCSSTransitionGroup>
   );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default App;
