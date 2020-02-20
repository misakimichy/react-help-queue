import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

const TicketList = props => {
  return (
    <div>
      <hr/>
      {props.ticketList.map(ticket =>
        <Ticket
          key={ticket.id}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onTicketSelection={props.onTicketSelection}  
        />
      )}
    </div>
  );
};

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;