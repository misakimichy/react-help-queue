import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import constants from './../constants'
const { constant } = constants

const Ticket = props => {
  const handleSavingSelectedTicket = ticketId => {
    const { dispatch } = props
    const action = {
      type: constant.SELECT_TICKET,
      ticketId: ticketId
    }
    dispatch(action)
  }
  const ticketInformation = 
    <div>
      <h3 className="location" >{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr />
    </div>
  if(props.currentRouterPath === '/admin') {
    return (
      <div onClick={() =>
      {handleSavingSelectedTicket(props.ticketId)}}>
        {ticketInformation}
      </div>
    )
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    )
  }
}

Ticket.propTypes = {
  ticketId: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
}

export default connect()(Ticket)