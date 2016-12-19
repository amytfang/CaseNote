import { connect } from 'react-redux';
import {
  createAnnotation,
  receiveAnnotationErrors
} from '../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state, ownProps) => ({
  range: ownProps.range,
  location: ownProps.location,
  opinionId: ownProps.opinionId,
  errors: state.formErrors.annotation,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (anno) => dispatch(createAnnotation(anno)),
  receiveAnnotationErrors: (errors) => dispatch(receiveAnnotationErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
