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

  clickChoice() {
    console.log('hello');
  }
  countTotalFeedback() {
    console.log('bye');
  }
  countPositiveFeedbackPercentage() {
    console.log('good day');
  }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const textFeedback = 'Please leave feedback';
    const textStatistics = 'Statistics';
    return (
      <>
        <Section
          title={textFeedback}
          child={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.clickChoice}
            />
          }
        />
        <Section
          title={textStatistics}
          child={
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          }
        />
      </>
    );
  }
}
export default App;

{
  /* /* // export class App extends Component  */
}
{
  /* //   state = { */
}
{
  /* //     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countChoice = choice => { */
}
{
  /* //     switch (choice) { */
}
{
  /* //       case 'Good':
//         this.state.good++;
//         break;
//       case 'Neutral':
//         this.state.neutral++;
//         break;
//       case 'Bad':
//         this.state.bad++;
//         break;
//     }
//   };
//   countTotalFeedback = () => { */
}
{
  /* //     return this.state.good + this.state.bad + this.state.neutral;
//   };
//   countPositiveFeedbackPercentage = () => { */
}
{
  /* //     return (
//       (this.state.good /
//         (this.state.good + this.state.bad + this.state.neutral)) *
//       100
//     );
//   };

//   render() { */
}
{
  /* //     const { good } = this.state;
//     const { neutral } = this.state;
//     const { bad } = this.state;
//     return (
//       <div>
//         <Section */
}
{
  /* //           title={'Feedback'}
//           child={ */
}
{
  /* //             <FeedbackOptions */
}
{
  /* //               options={['Good', 'Neutral', 'Bad']}
//               onLeaveFeedback={this.countChoice}
//             ></FeedbackOptions>
//           }
//         />
//         <Section */
}
{
  /* //           title={'Statistics'}
//           child={ */
}
{
  /* //             this.countTotalFeedback() ? (
//               <Statistics */
}
{
  /* //                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={this.countTotalFeedback}
//                 positivePercentage={this.countPositiveFeedbackPercentage}
//               ></Statistics>
//             ) : (
//               <Notification message="There is no feedback"></Notification>
//             )
//           }
//         />
//       </div> */
}
{
  /* //     );
//   }
// } */
}

// // import styled from '@emotion/styled';
// // import {
// //   FriendDescr,
// //   Status,
// //   ImgAvatar,
// //   NameFriend,
// // } from './FriendList.styled';
