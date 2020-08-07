import { combineReducers } from 'redux'

const spots = (state=[], action) => {
  switch(action.type) {
    case 'GETS_SPOT_INFO':
      return {...state, data: action.value}
    case 'ADD_SPOT':
      return {...state, data: action.value}
    default:
      return state;
  }
}

const user = (state = [], action) => {
  switch(action.type) {
    case 'GETS_USER_INFO':
      return {...state, info:action.value} 
    case "CREATE_USER":
      return {...state, info:action.value}
    case "LOGIN":
      return {...state, info:action.value}
    default:
      return state
  }
}



const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_LOGIN' :
      return true
    case 'TOGGLE_LOGOUT' :
      return false
    default:
      return state
  }
}

const mapLocations = (state= [], action) => {
  switch(action.type) {
    case 'ADD_MAPLOCATIONS':
      return action.value
    default:
      return state
  }
}

export default combineReducers ({spots, isLoggedIn, user, mapLocations})