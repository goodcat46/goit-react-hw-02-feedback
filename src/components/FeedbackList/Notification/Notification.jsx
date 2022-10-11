import React from 'react'
// import PropTypes from 'prop-types'
import css from './notification.module.css'

const Notification = ({text}) => {
  return (
    <div className={css.notification}>{text}</div>
  )
}

Notification.propTypes = {}

export default Notification