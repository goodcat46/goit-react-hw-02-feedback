import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Title from './Title/Title';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './app.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = ({ target: { textContent } }) => {
    this.setState(prvState => ({
      [textContent]: (prvState[textContent] += 1),
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };
  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className={css.app}>
        <div className={css.container}>
          <Title title="Please leave feedback" />
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <Title title="Statistics" />
          {this.countTotalFeedback() !== 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {this.countTotalFeedback() === 0 && (
            <Notification message="There is no feedback" />
          )}
        </div>
      </div>
    );
  }
}
