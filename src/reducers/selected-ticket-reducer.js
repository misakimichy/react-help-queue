import constants from './../constants'
const { constant } = constants

export default (state = {}, action) => {
  switch(action.type) {
  case constant.SELECT_TICKET :
    return action.ticketId
  default:
    return state
  }
}