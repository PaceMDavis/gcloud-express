import { connect } from 'react-redux'
import SpotDetail from '../components/SpotDetail'

const mapStateToProps = (state) => {
  return {
    spots: state.spots.data,
    isLoggedIn: state.isLoggedIn,
    user: state.user
  }
}

export default connect(mapStateToProps)(SpotDetail)