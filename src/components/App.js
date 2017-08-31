import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      previousPath: null,
      nextPath: null,
      cardsToMove: null
    }
  }

  componentWillReceiveProps(nextProps) {
    let previousPath = this.props.location.pathname;
    let nextPath =  nextProps.location.pathname;
    if (previousPath !== nextPath) {
      if ((previousPath === '/' && nextPath === '/about') ||
          (previousPath === '/about' && nextPath ==='/work')) {
        this.setState({cardsToMove: 'one'});
      } else if ((previousPath === '/' && nextPath === '/work')) {
        this.setState({cardsToMove: 'two'});
      }
      this.setState({previousPath: this.props.location.pathname});
      this.setState({nextPath: nextProps.location.pathname});
    }
  }

  render() {
    let path = this.props.location.pathname;
    let segment = path.split('/')[1] || 'root';
    let previousPath = this.state.previousPath;
    let nextPath = this.state.nextPath;

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
