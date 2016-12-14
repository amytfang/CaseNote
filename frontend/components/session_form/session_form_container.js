// import { connect } from 'react-redux';
// import SessionForm from './session_form';
// import { login, signup } from '../../actions/session_actions';
//
// const mapStateToProps = (state) => {
//   const loggedIn = state.currentUser === null ? false : true;
//   return {
//     logged_in: loggedIn,
//     formErrors: state.formErrors
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   let formType;
//   if (ownProps.formType) {
//     formType = ownProps.formType;
//   } else {
//     if (ownProps.location.pathname.split("/").includes('signin')) {
//       formType = "signin";
//     } else {
//       formType = "signup";
//     }
//   }
//
//   let processForm;
//   if (formType === "signin") {
//     processForm = (user) => dispatch(login(user));
//   } else {
//     processForm = (user) => dispatch(signup(user));
//   }
//
//   return { formType, processForm };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
