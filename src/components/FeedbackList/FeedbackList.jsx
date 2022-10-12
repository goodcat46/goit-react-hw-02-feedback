import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackList.module.css';
import Title from './Title/Title';
import Btn from './Btn/Btn';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const FeedbackList = ({
  feedbackList,
  toAddFeedback,
  state,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <div className={css.feedbackList}>
      <Title title="Please leave feedback" />
      <div className={css.options}>
        {feedbackList.map((el, i) => (
          <Btn key={i} toAddFeedback={toAddFeedback} feedbackName={el} />
        ))}
      </div>
      {totalFeedback !== 0 && (
        <Statistics
          state={state}
          total={totalFeedback}
          percentage={positiveFeedbackPercentage}
        />
      )}
      {totalFeedback === 0 && <Notification message="There is no feedback" />}
    </div>
  );
};

FeedbackList.propTypes = {
  feedbackList: PropTypes.array,
  toAddFeedback: PropTypes.func,
  state: PropTypes.object,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};

export default FeedbackList;
