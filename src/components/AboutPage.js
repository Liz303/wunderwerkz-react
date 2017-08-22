import React from 'react';
import { browserHistory } from 'react-router';
import HalfText from './HalfText';

// Since this component is simple and static, there's no parent container for it.
class AboutPage extends React.Component {
  handleTransition() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="page card one"
            onClick={this.handleTransition.bind(this)}
            key="about">
        <div className="flex-wrapper">
          <div className="flex-half">
            <HalfText>
               Bad Apples Good Design
            </HalfText>
          </div>
          <div className="flex-half">

          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
