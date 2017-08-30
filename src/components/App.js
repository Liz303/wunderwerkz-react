import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cardOne: false,
      cardTwo: false,
      cardThree: false,
      cardFour: false,
    }
  }

  updateActive(card, state) {
    this.setState({[card]: state});
  }

  activeCardClass() {
    if (!this.state.cardOne && this.state.cardTwo && this.state.cardThree && this.state.cardFour) {
      return 'one';
    } else if ( !this.state.cardOne && !this.state.cardTwo && this.state.cardThree && this.state.cardFour) {
      return 'two';
    } else if ( !this.state.cardOne && !this.state.cardTwo && !this.state.cardThree && this.state.cardFour) {
      return 'three';
    }
  }

  cardOneSidebar() {
    switch (window.location.pathname) {
      case "/":
        return <span>H<br/>O<br/>M<br/>E</span>;
      case "/about":
        return <span>A<br/>B<br/>O<br/>U<br/>T</span>;
      case "/work":
        return <span>W<br/>O<br/>R<br/>K</span>;
      case "/contact":
        return <span>C<br/>O<br/>N<br/>T<br/>A<br/>C<br/>T</span>;
      default:
    }
  }

  cardTwoSidebar() {
    switch (window.location.pathname) {
      case "/":
        return <span>A<br/>B<br/>O<br/>U<br/>T</span>;
      case "/about":
        return <span>W<br/>O<br/>R<br/>K</span>;
      case "/work":
        return <span>C<br/>O<br/>N<br/>T<br/>A<br/>C<br/>T</span>;
      case "/contact":
        return <span>H<br/>O<br/>M<br/>E</span>;
      default:
    }
  }

  handleTransition() {
    let activeCard;
    if (!this.state.cardOne && this.state.cardTwo && this.state.cardThree && this.state.cardFour) {
      if (this.cardOne.className.indexOf('move-it') === -1) {
        debugger;
        this.cardOne.className += " move-it ";
        browserHistory.push('/about');
        setTimeout(function() {
          this.cardOne.className = "card one left-align";
          setTimeout(function() {
            this.cardOne.className = "card one";
          }.bind(this), 3000);
        }.bind(this), 3000);
      }
    } else if ( !this.state.cardOne && !this.state.cardTwo && this.state.cardThree && this.state.cardFour) {
      this.cardTwo.className += "move-it ";
    } else if ( !this.state.cardOne && !this.state.cardTwo && !this.state.cardThree && this.state.cardFour) {
      this.cardThree.className += "move-it ";
            debugger;
    }
  }


  render() {
    let path = this.props.location.pathname;
    let segment = path.split('/')[1] || 'root';

    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionAppearTimeout={2000}
        transitionAppear={true}
        transitionName={{
          enter: 'enter',
          enterActive: 'enterActive',
          leave: 'leave',
          leaveActive: 'leaveActive',
          appear: 'appear',
          appearActive: 'appearActive'
        }}>
        {React.cloneElement(this.props.children, { key: segment })}
     </ReactCSSTransitionGroup>
   );

  //   return (
  //     <ReactTransitionGroup
  //       transitionEnterTimeout={600}
  //       transitionLeaveTimeout={600}
  //       transitionAppear={true}
  //       transitionName="pageSlider">
  //       {React.cloneElement(this.props.children, { key: segment })}
  //    </ReactTransitionGroup>
  //  );
    //     <ReactCSSTransitionGroup
    //       transitionEnterTimeout={600}
    //       transitionLeaveTimeout={600}
    //       transitionName="pageSlider">
    //       <div className={`card four ${this.activeCardClass() === 'four' ? 'active' : ''}`}
    //            onMouseOver={this.updateActive.bind(this, 'cardFour', true)}
    //            onMouseOut={this.updateActive.bind(this, 'cardFour', false)}
    //            onClick={this.handleTransition.bind(this)}
    //            ref={c => this.cardFour = c}>
    //         <div className={`card three ${this.activeCardClass() === 'three' ? 'active' : ''}`}
    //              onMouseOver={this.updateActive.bind(this, 'cardThree', true)}
    //              onMouseOut={this.updateActive.bind(this, 'cardThree', false)}
    //              onClick={this.handleTransition.bind(this)}
    //              ref={c => this.cardThree = c}>
    //           <div className={`card two ${this.activeCardClass() === 'two' ? 'active' : ''}`}
    //                onMouseOver={this.updateActive.bind(this, 'cardTwo', true)}
    //                onMouseOut={this.updateActive.bind(this, 'cardTwo', false)}
    //                onClick={this.handleTransition.bind(this)}
    //                ref={c => this.cardTwo = c}>
    //                <div className="sidebar">
    //                  {this.cardTwoSidebar()}
    //                </div>
    //             <div className={`card one ${this.activeCardClass() === 'one' ? 'active' : ''}`}
    //                  onMouseOver={this.updateActive.bind(this, 'cardOne', true)}
    //                  onMouseOut={this.updateActive.bind(this, 'cardOne', false)}
    //                  onClick={this.handleTransition.bind(this, "one")}
    //                  ref={c => this.cardOne = c}>
    //                  <div className="sidebar">
    //                    {this.cardOneSidebar()}
    //                  </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {React.cloneElement(this.props.children, { key: segment })}
    //    </ReactCSSTransitionGroup>
    // );
  }
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default App;
