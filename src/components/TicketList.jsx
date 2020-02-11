import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: `Firebase won't save record. Help!!!!!!`
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
]

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket
          location={ticket.location}
          names={ticket.names}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default TicketList;