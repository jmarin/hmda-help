import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './InputSubmit.css'

const values = {
  search: 'Search institutions',
  add: 'Add the institution',
  update: 'Update the institution'
}

class InputSubmit extends Component {
  render() {
    return (
      <input
        className="inputSubmit"
        type="submit"
        value={values[this.props.actionType]}
      />
    )
  }
}

InputSubmit.propTypes = {
  actionType: PropTypes.string.isRequired
}

export default InputSubmit
