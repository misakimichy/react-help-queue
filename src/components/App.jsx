import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    );
  }

  updateTicketElapsedWaitTime() {
    [...this.state.masterTicketList].forEach(ticket =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({
      masterTicketList: [...this.state.masterTicketList]
    });
  }
  
  handleAddingNewTicketToList(newTicket) {
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    this.setState({
      masterTicketList: [...this.state.masterTicketList, newTicket]
    });
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <TicketList ticketList={this.state.masterTicketList}/> } />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={props =>
            <Admin
              ticketList={this.state.masterTicketList}
              currentRouterPath={props.location.pathname}
            />}
          />
          <Route component={NotFound} />
        </Switch>
        <style global jsx>{`
          div {
            font-family:  Arial, Helvetica, sans-serif;
            font-size: 18px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;