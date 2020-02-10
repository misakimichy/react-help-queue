import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>
        <h3>{props.location}- {props.names}</h3>
        <p><em>{ProgressPlugin.issue}</em></p>
        <hr/>
    </div>
  );
}

Ticket.PropTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;