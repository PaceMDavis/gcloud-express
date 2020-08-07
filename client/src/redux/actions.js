
export const login = (bool) => {
  return {
    type: 'TOGGLE_LOGIN',
    value: bool
  }
}


export const logout = (bool) => {
  return {
    type: 'TOGGLE_LOGOUT',
    value: bool
  }
}

export const user = (name) => {
  return {
    type: 'GETS_USER_INFO',
    value: name
  }
}

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    value: user
  }
}

export const spots = (data) => {
  return {
    type: 'GETS_SPOT_INFO',
    value: data
  }
}

export const addSpot = (spot) => {
  return {
    type: 'ADD_SPOT',
    value: spot
  }
}

export const addMapLocations = (location) => {
  return {
    type: 'ADD_MAPLOCATIONS',
    value: location
  }
}


// export const getsUserInfo = user_id => {
//   return async dispatch => {
//     try {
//       let response = await axios.get(`/users/${user_id}`)
//       let info = response.data;
//       dispatch({type: 'GETS_USER_INFO', payload: info})
//     } catch(err) { alert (err)}
//   }
// }
