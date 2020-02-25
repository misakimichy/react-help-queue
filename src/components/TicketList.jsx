import React from 'react'
import PropTypes from 'prop-types'
import Ticket from './Ticket'

const TicketList = props => {
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(ticketId => {
        const ticket = props.ticketList[ticketId]
        return (
          <Ticket
            key={ticketId}
            ticketId={ticketId}
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            onTicketSelection={props.onTicketSelection}  
          />
        )
      })}
    </div>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
}

export default TicketList