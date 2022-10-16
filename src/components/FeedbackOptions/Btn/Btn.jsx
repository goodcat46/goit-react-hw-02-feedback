import React from 'react';
import PropTypes from 'prop-types';
import css from './btn.module.css';

const Btn = ({ feedbackName, onLeaveFeedback }) => {
  return (
    <button
      className={css.button}
      onClick={() => onLeaveFeedback(feedbackName)}
      type="button"
    >
      {feedbackName}
    </button>
  );
};

Btn.propTypes = {
  feedbackName: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
};

export default Btn;
