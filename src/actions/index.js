import firebase from 'firebase'
import constants from './../constants'
const { firebaseConfig } = constants 

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
      console.log(data.val())
    })
  }
}