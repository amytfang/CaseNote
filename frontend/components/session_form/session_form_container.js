import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const loggedIn = state.currentUser === null ? false : true;
  return {
    logged_in: loggedIn,
    formErrors: state.formErrors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname.split("/").includes('signin')) {
    return {
      formType: 'signin',
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      formType: 'signup',
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
