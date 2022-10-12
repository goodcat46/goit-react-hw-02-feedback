import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';
import Feedback from './Feedback/Feedback';
import Title from '../Title/Title';

const Statistics = ({ state, total, percentage }) => {
  return (
    <div className={css.statistics}>
      <Title message="Statistics" />
      {Object.keys(state).map((el, i) => (
        <Feedback key={i} feedbackName={el} value={state[el]} />
      ))}
      <span>
        Total: <span>{total}</span>
      </span>
      <span>
        Positive feedbacks: <span>{percentage}%</span>
      </span>
    </div>
  );
};

Statistics.propTypes = {
  state: PropTypes.object,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
