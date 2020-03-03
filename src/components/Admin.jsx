import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TicketDetail from './TicketDetail'
import TicketList from './TicketList'

const Admin = props => {
  let optionalSelectedTicketContent = null
  if(props.selectedTicket.length > 0) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]} />
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath}
      />
    </div>
  )
}

Admin.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTicket: PropTypes.string
}

const mapStateToProps = state => {
  return {
    selectedTicket: state.string,
    ticketList: state.masterTicketList
  }
}

export default connect(mapStateToProps)(Admin)