import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTicket } from './../actions'

const NewTicketForm = props => {
  let _names = null
  let _location = null
  let _issue = null

  const handleNewTicketFormSubmission = event => {
    event.preventDefault()
    const { dispatch } = props
    dispatch(addTicket(_names.value, _location.value, _issue.value))
    _names.value = ''
    _location.value = ''
    _issue.value = ''
  }

  return (
    <div className="form-container">
      <form onSubmit={handleNewTicketFormSubmission} autoComplete='off'>
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