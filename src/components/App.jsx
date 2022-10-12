import { Component } from 'react';
import FeedbackList from './FeedbackList/FeedbackList';
import css from './app.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  toAddFeedback = ({ target: { textContent } }) => {
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
    return (
      <div className={css.app}>
        <FeedbackList
          feedbackList={Object.keys(this.state)}
          toAddFeedback={this.toAddFeedback}
          totalFeedback={this.countTotalFeedback()}
          positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          state={this.state}
        />
      </div>
    );
  }
}
