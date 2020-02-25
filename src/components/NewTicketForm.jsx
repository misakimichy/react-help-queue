import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import { connect } from 'react-redux'
import Ticket from './Ticket'

class NewTicketForm extends Component {
  let _names = null
  let _location = null
  let _issue = null

  handleNewTicketFormSubmission = event => {
    event.preventDefault()
    const { dispatch } = props
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Date().getTime()
    }
    dispatch(action)
    props.onNewTicketCreation({
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    })
    _names.value = ''
    _location.value = ''
    _issue.value = ''
  }

  return (
    <div className="form-container">
      <form onSubmit={handleNewTicketFormSubmission}>
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
  onNewTicketCreation: PropTypes.func
}

NewTicketForm = connect()(NewTicketForm)
export default NewTicketForm