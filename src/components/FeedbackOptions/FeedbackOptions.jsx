import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';
import Btn from './Btn/Btn';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.options}>
      {options.map((el, i) => (
        <Btn key={i} onLeaveFeedback={onLeaveFeedback} feedbackName={el} />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  toAddFeedback: PropTypes.func,
};

export default FeedbackOptions;
