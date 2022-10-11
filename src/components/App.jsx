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
  render() {
    return (
      <div className={css.app}>
        <FeedbackList
          toAddFeedback={this.toAddFeedback}
          feedbackListKeys={Object.keys(this.state)}
          state={this.state}
        />
      </div>
    );
  }
}
