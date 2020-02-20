import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TicketList from './TicketList';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import NotFound from './NotFound';
import { v4 } from 'uuid';

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
    const newMasterTicketList = Object.assign({}, this.state.masterTicketList)
    Object.keys(newMasterTicketList).forEach(ticketId =>
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[itcketId].timeOpen).fromNow(true)
    );
    this.setState({
      masterTicketList: newMasterTicketList
    });
  }
  
  handleAddingNewTicketToList(newTicket) {
    const newTicketId = v4()
    const newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true)
    this.setState({
      masterTicketList: newMasterTicketList
    });
  }

  handleChangingSelectedTicket(ticketId) {
    this.setState({
      selectedTicket: ticketId
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