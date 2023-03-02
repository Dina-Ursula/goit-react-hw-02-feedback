import React, { Component } from 'react';

import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickChoice = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const textFeedback = 'Please leave feedback';
    const textStatistics = 'Statistics';
    return (
      <>
        <Section
          title={textFeedback}
          child={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.clickChoice}
            />
          }
        />
        <Section
          title={textStatistics}
          child={
            this.countTotalFeedback() === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )
          }
        />
      </>
    );
  }
}
export default App;
