import React from 'react'
import PropTypes from 'prop-types'

const Ticket = props => {
  const ticketInformation = 
    <div>
      <h3 className="location" >{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p className="issue"><em>{props.issue}</em></p>
      <hr/>
    </div>
  if(props.currentRouterPath === '/admin') {
    return (
      <div onClick={() =>
        {props.onTicketSelection(props.ticketId)}}>
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
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
}

export default Ticket