import React from 'react';
import { browserHistory } from 'react-router';

class Navigation extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cardOne: false,
      cardTwo: false,
      cardThree: false,
      cardFour: false
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

  getRoute(route) {
    if (route === "root") { return "/"; }
    return "/" + route;
  }

  handleTransition() {
    let activeCard;
    if (!this.state.cardOne && this.state.cardTwo && this.state.cardThree && this.state.cardFour) {
      browserHistory.push(this.getRoute(this.props.two));
    } else if ( !this.state.cardOne && !this.state.cardTwo && this.state.cardThree && this.state.cardFour) {
      browserHistory.push(this.getRoute(this.props.three));
    } else if ( !this.state.cardOne && !this.state.cardTwo && !this.state.cardThree && this.state.cardFour) {
      browserHistory.push(this.getRoute(this.props.four));
    }
  }

  cardSidebar(card) {
    switch (card) {
      case 'root':
        return <span>H<br/>O<br/>M<br/>E</span>;
      case 'about':
        return <span>A<br/>B<br/>O<br/>U<br/>T</span>;
      case 'work':
        return <span>W<br/>O<br/>R<br/>K</span>;
      case 'contact':
        return <span>C<br/>O<br/>N<br/>T<br/>A<br/>C<br/>T</span>;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={`card four ${this.activeCardClass() === 'four' ? 'active' : ''}`}
          onMouseOver={this.updateActive.bind(this, 'cardFour', true)}
          onMouseOut={this.updateActive.bind(this, 'cardFour', false)}
          onClick={this.handleTransition.bind(this)}
          key={this.props.one}>
          <div className="sidebar">
            {this.cardSidebar(this.props.four)}
          </div>
       <div className={`card three ${this.activeCardClass() === 'three' ? 'active' : ''}`}
            onMouseOver={this.updateActive.bind(this, 'cardThree', true)}
            onMouseOut={this.updateActive.bind(this, 'cardThree', false)}
            onClick={this.handleTransition.bind(this)}>
            <div className="sidebar">
              {this.cardSidebar(this.props.three)}
            </div>
         <div className={`card two ${this.activeCardClass() === 'two' ? 'active' : ''}`}
              onMouseOver={this.updateActive.bind(this, 'cardTwo', true)}
              onMouseOut={this.updateActive.bind(this, 'cardTwo', false)}
              onClick={this.handleTransition.bind(this)}>
              <div className="sidebar">
                {this.cardSidebar(this.props.two)}
              </div>
           <div className={`card one ${this.activeCardClass() === 'one' ? 'active' : ''}`}
                onMouseOver={this.updateActive.bind(this, 'cardOne', true)}
                onMouseOut={this.updateActive.bind(this, 'cardOne', false)}
                onClick={this.handleTransition.bind(this, "one")}>
                <div className="sidebar">
                  {this.cardSidebar(this.props.one)}
                </div>
                {this.props.children}
           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default Navigation;
