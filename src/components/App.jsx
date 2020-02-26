import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './Header'
import NewTicketControl from './NewTicketControl'
import TicketList from './TicketList'
import NotFound from './NotFound'
import Admin from './Admin'
import './styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this)
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    )
  }

  componentWillMount() {
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateTicketElapsedWaitTime() {
    // const newMasterTicketList = Object.assign({}, this.state.masterTicketList)
    // Object.keys(newMasterTicketList).forEach(ticketId =>
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true)
    // )
    // this.setState({
    //   masterTicketList: newMasterTicketList
    // })
  }
  
  handleAddingNewTicketToList(newTicket) {
    const newTicketId = v4()
    const newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    })
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true)
    this.setState({
      masterTicketList: newMasterTicketList
    })
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
          <Route exact path='/' render={() => <TicketList ticketList={this.props.masterTicketList}/> } />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={props =>
            <Admin
              ticketList={this.props.masterTicketList}
              currentRouterPath={props.location.pathname}
              onTicketSelection={this.handleChangingSelectedTicket}
              selectedTicket={this.state.selectedTicket}
            />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  }
}

export default withRouter(connect(mapStateToProps)(App))