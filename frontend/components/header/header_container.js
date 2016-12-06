import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
