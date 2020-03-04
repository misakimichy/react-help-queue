import firebase from 'firebase'
import Moment from 'moment'
import constants from './../constants'
const { firebaseConfig, constant } = constants 

firebase.initializeApp(firebaseConfig)

// Specify a node
const tickets = firebase.database().ref('ticket')

// Add these data to database
export const addTicket = (_names, _locations, _issue) => {
  return () => tickets.push({
    names: _names,
    location: _locations,
    issue: _issue,
    timeOpen: new Date().getTime()
  })
}

export const watchFirebaseTicketsRef = () => {
  return dispatch => {
    tickets.on('child_added', data => {
      const newTicket = Object.assign({}, data.val(), {
        // Replaced data.getKey() with data.key
        id: data.key,
        formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
      })
      dispatch(receiveTicket(newTicket))
    })
  }
}

const receiveTicket = ticketFromFirebase => {
  return {
    type: constant.RECEIVE_TICKET,
    ticket: ticketFromFirebase
  }
}