import React from 'react';
import PropTypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => {
  return <div className={css.notification}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;