import React from 'react';
import PropTypes from 'prop-types';

const Ticket = props => {
  const ticketInformation = 
    <div>
      <h3 className="location" >{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p className="issue"><em>{props.issue}</em></p>
      <hr/>
    </div>
  if(props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {alert(`hey, you just clicked the ticket belonging to ${props.names}`)}}>
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
};

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;