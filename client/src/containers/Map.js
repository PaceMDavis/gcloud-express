import { connect } from 'react-redux'
import Map from '../components/Map'


const mapStateToProps = (state) => {
  return {
    spots: state.spots,
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    mapLocations: state.mapLocations
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
    
//   }
// }

export default connect(mapStateToProps)(Map)