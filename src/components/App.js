import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import TransitionGroup from 'react-addons-transition-group';

// import { browserHistory } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  constructor(...args) {
    super(...args);
  }



  render() {
    let path = this.props.location.pathname;
    let segment = path.split('/')[1] || 'root';
    // return (
    //   <div>
    //     <div className="card two"></div>
    //     <div className="card one"
    //       onClick={this.handleTransition.bind(this)}>
    //       <TransitionGroup
    //         transitionEnterTimeout={600}
    //         transitionLeaveTimeout={600}
    //         transitionAppear={true}
    //         transitionName="pageSlider">
    //         {this.props.children}
    //      </TransitionGroup>
    //     </div>
    //
    //   </div>
    // );

    return (
      <div>
        <div className="card two"/>
           <ReactCSSTransitionGroup
            transitionEnterTimeout={600}
            transitionLeaveTimeout={600}
            transitionName="pageSlider">
            {React.cloneElement(this.props.children, { key: segment })}
         </ReactCSSTransitionGroup>
      </div>
    );

  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default App;
