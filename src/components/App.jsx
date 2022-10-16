import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Title from './Title/Title';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from './app.module.css';

export const App = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const seters = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };
  const values = {
    good: good,
    neutral: neutral,
    bad: bad,
  };
  const onLeaveFeedback = fName => {
    seters[fName]((values[fName] += 1));
  };
  const countTotalFeedback = () => {
    return Object.values(values).reduce((acc, el) => {
      return acc + el;
    }, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((values.good / countTotalFeedback()) * 100);
    }
  };
  return (
    <div className={css.app}>
      <div className={css.container}>
        <Title title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(values)}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Title title="Statistics" />
        {countTotalFeedback() !== 0 && (
          <Statistics
            good={values.good}
            neutral={values.neutral}
            bad={values.bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        )}
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedbacks" />
        )}
      </div>
    </div>
  );
};
