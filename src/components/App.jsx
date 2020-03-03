import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './Header'
import NewTicketControl from './NewTicketControl'
import TicketList from './TicketList'
import NotFound from './NotFound'
import Admin from './Admin'
import constant from './../constants'
import './styles.css'

class App extends Component {
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    )
  }

  componentWillMount() {
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateTicketElapsedWaitTime() {
    const { dispatch } = this.props
    Object.keys(this.props.masterTicketList).map(ticketId => {
      const ticket = this.props.masterTicketList[ticketId]
      const newFormattedWaitTime = ticket.timeOpen.fromNow(true)
      const action = {
        type: constant.UPDATE_TIME,
        id: ticketId,
        formattedWaitTime: newFormattedWaitTime
      }
      dispatch(action)
    })
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <TicketList ticketList={this.props.masterTicketList}/> } />
          <Route path='/newticket' render={() => <NewTicketControl />} />
          <Route path='/admin' render={props =>
            <Admin currentRouterPath={props.location.pathname} />}
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