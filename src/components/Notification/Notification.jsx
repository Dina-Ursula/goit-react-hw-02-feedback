import React, { Component } from 'react';

export default Notification = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

// <Statistics
//   good={good}
//   neutral={neutral}
//   bad={bad}
//   total={this.countTotalFeedback()}
//   positivePercentage={this.countPositiveFeedbackPercentage()}
// />
