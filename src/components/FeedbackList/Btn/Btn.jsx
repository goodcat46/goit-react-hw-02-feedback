import React from 'react';
import PropTypes from 'prop-types';
import css from './btn.module.css';

const Btn = ({feedbackName, toAddFeedback }) => {
  return (
    <button
      className={css.button}
      onClick={toAddFeedback}
      type="button"
    >
      {feedbackName}
    </button>
  );
};

Btn.propTypes = {
  feedbackName: PropTypes.string,
  toAddFeedback: PropTypes.func,
};

export default Btn;
