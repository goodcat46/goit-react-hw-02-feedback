import React from 'react';
// import PropTypes from 'prop-types';
import css from './btn.module.css';

const Btn = ({ id, feedbackName, toAddFeedback }) => {
  return (
    <button key={id} className={css.button} onClick={toAddFeedback} type="button">
      {feedbackName}
    </button>
  );
};

Btn.propTypes = {};

export default Btn;
