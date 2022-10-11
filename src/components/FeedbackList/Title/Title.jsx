import React from 'react'
// import PropTypes from 'prop-types'
import css from './title.module.css'

const Title = ({title}) => {
  return (
    <div className={css.title}>{title}</div>
  )
}

Title.propTypes = {}

export default Title