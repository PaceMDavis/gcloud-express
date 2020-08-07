import { connect } from 'react-redux'
import AddSpot from '../components/AddSpot'
import { addSpot } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    spots: state.spots.data,
    isLoggedIn: state.isLoggedIn,
    mapLocations: state.mapLocations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSpot: (spot) => dispatch(addSpot(spot))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSpot)