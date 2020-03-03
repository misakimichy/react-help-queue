import React from 'react'
import Moment from 'moment'
import { connect } from 'react-redux'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import constants from './../constants'
const { constant } = constants

const NewTicketForm = props => {
  let _names = null
  let _location = null
  let _issue = null

  const handleNewTicketFormSubmission = event => {
    event.preventDefault()
    const { dispatch } = props
    const action = {
      type: constant.ADD_TICKET,
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    }
    dispatch(action)
    _names.value = ''
    _location.value = ''
    _issue.value = ''
  }

  return (
    <div className="form-container">
      <form onSubmit={handleNewTicketFormSubmission} autocomplete='off'>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={input => {_names = input}} />
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={input => {_location = input}} />
        <textarea
          id='issude'
          placeholder='Describe your issue.'
          ref={textarea => {_issue = textarea}} />
        <button type='submit'>Help!</button>
      </form>
    </div>
  )
}

NewTicketForm.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(NewTicketForm)