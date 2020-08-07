import { connect } from 'react-redux'
import Home from '../components/Home'
import {spots} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user.info,
    spots: state.spots.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    spots: (data) => dispatch(spots(data))
    // login: (bool) => dispatch(login(bool)),
    // user: (name) => dispatch(user(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)