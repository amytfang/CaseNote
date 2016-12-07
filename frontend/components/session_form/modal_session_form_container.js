import { connect } from 'react-redux';
import ModalSessionForm from './modal_session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const loggedIn = state.currentUser === null ? false : true;
  return {
    logged_in: loggedIn,
    formErrors: state.formErrors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm;
  if (ownProps.formType === "signin") {
    processForm = (user) => dispatch(login(user));
  } else {
    processForm = (user) => dispatch(signup(user));
  }

  return {
    formType: ownProps.formType,
    signin: (user) => dispatch(login(user)),
    processForm };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSessionForm);
