import { connect } from 'react-redux';
import { fetchAnnotation } from '../../actions/annotation_actions';
import AnnotationDetail from './annotation_detail';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  currentUser: state.currentUser,
  annotation: state.annotationDetails
});

const mapDispatchToProps = (dispatch) => ({
  fetchAnnotation: (id) => dispatch(fetchAnnotation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationDetail);
