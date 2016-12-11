import { connect } from 'react-redux';
import { createAnnotation } from '../../actions/annotation_actions';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state, ownProps) => ({
  range: ownProps.range,
  location: ownProps.location,
  opinionId: ownProps.opinionId,
  errors: state.formErrors.annotation,
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createAnnotation: (anno) => dispatch(createAnnotation(anno))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationForm);
