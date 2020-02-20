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
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    );
  }

  componentWillMount() {
    clearInterval(this.waitTimeUpdateTimer)
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
    const newMaterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicket.id]: newTicket
    });
    newMaterTicketList[newTicket.id].formattedWaitTime = newMaterTicketList[newTicket.id].timeOpen.fromNow(true)
    this.setState({
      masterTicketList: newMaterTicketList
    });
  }

  handleChangingSelectedTicket(ticket) {
    this.setState({
      selectedTicket: ticket
    })
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
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket}
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