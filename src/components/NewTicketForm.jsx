import React from 'react'
import Moment from 'moment'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

const NewTicketForm = props => {
  let _names = null
  let _location = null
  let _issue = null

  const handleNewTicketFormSubmission = event => {
    event.preventDefault()
    const { dispatch } = this.props
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Date().getTime()
    }
    dispatch(action)
    this.props.onNewTicketCreation({
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

export default connect()(NewTicketForm)