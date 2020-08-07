import {connect} from 'react-redux'
import Navigation from '../components/Navigation'
import {logout} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    isLoggedIn: state.isLoggedIn,
    user:state.user,
    spots: state.spots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (bool) => dispatch(logout(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)