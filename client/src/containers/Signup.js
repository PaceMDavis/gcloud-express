import { connect } from 'react-redux'
import {createUser} from '../redux/actions'
import Signup from '../components/Signup'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)