import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';
import Feedback from './Feedback/Feedback';
import Title from '../Title/Title';

const Statistics = props => {
  return (
    <div className={css.statistics}>
      <Title message="Statistics" />
      {Object.keys(props).map((el, i) => (
        <Feedback key={i} feedbackName={el} value={props[el]} />
      ))}
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
  }),
};

export default Statistics;
