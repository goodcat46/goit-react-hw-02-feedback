import React from 'react';
// import PropTypes from 'prop-types';
import css from './feedbackList.module.css';
import Title from './Title/Title';
import Btn from './Btn/Btn';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const FeedbackList = ({ toAddFeedback, feedbackListKeys, state }) => {
  function toCountTotalFeedbacks() {
    return Object.values(state).reduce((acc, el) => {
      return acc + el;
    }, 0);
  }
  function toCountPosFeedbackPercentage() {
    if (toCountTotalFeedbacks() === 0) {
      return 0;
    } else {
      return Math.round((state.good / toCountTotalFeedbacks()) * 100);
    }
  }

  return (
    <div className={css.feedbackList}>
      <Title title="Please leave feedback" />
      <div className={css.options}>
        {feedbackListKeys.map((el, i) => (
          <Btn key={i} toAddFeedback={toAddFeedback} feedbackName={el} />
        ))}
      </div>
      {toCountTotalFeedbacks() !== 0 && (
        <Statistics
          state={state}
          total={toCountTotalFeedbacks()}
          percentage={toCountPosFeedbackPercentage()}
        />
      )}
      {toCountTotalFeedbacks() === 0 && <Notification text="There is no feedback" />}
    </div>
  );
};

FeedbackList.propTypes = {};

export default FeedbackList;
