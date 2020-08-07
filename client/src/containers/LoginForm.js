import { connect } from 'react-redux'
import {login} from '../redux/actions'
import LoginForm from '../components/LoginForm'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user.info
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (bool) => dispatch(login(bool)),
    // user: (name) => dispatch(user(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)