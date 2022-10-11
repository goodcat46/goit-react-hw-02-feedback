import React from 'react'
// import PropTypes from 'prop-types'

const Feedback = ({ feedbackName, value }) => {
  return (
    <span>
      <span>{feedbackName}: </span>
      <span>{value}</span>
    </span>
  );
};

Feedback.propTypes = {}

export default Feedback