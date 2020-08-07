import { connect } from 'react-redux'
import SpotDetailMap from '../components/SpotDetailMap'
import { addMapLocations } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    spots: state.spots.data,
    isLoggedIn: state.isLoggedIn,
    mapLocations: state.mapLocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMapLocations: (location) => dispatch(addMapLocations(location))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotDetailMap)