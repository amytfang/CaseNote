import { connect } from 'react-redux';
import ModalSessionForm from './modal_session_form';
import { login, signup } from '../../actions/session_actions';
import { fetchAnnotation } from '../../actions/annotation_actions';
import { fetchSingleOpinion } from '../../actions/opinion_actions';

const mapStateToProps = (state) => {
  const loggedIn = state.currentUser === null ? false : true;
  const updateAnnotationDetail =
    (Object.getOwnPropertyNames(state.annotationDetail).length === 0) ?
    false : state.annotationDetail.id;
  const updateOpinionDetail =
    (Object.getOwnPropertyNames(state.opinionDetail).length === 0) ?
    false: state.opinionDetail.id;
  return {
    logged_in: loggedIn,
    formErrors: state.formErrors,
    updateOpinionDetail,
    updateAnnotationDetail
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
    processForm,
    fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
    fetchSingleOpinion: (id) => dispatch(fetchSingleOpinion(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalSessionForm);
