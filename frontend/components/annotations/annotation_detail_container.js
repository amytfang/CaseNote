import { connect } from 'react-redux';
import {
  fetchAnnotation,
  editAnnotation,
  deleteAnnotation,
  clearAnnotation
 } from '../../actions/annotation_actions';
import { fetchSingleOpinion } from '../../actions/opinion_actions';
import AnnotationDetail from './annotation_detail';

const mapStateToProps = (state, ownProps) => {
  const annotationId = (ownProps.annotationId) ? ownProps.annotationId : state.annotationDetail.id ;
  return ({
    loading: state.loading,
    annotationId: ownProps.annotationId,
    currentUser: state.currentUser,
    annotationDetail: state.annotationDetail,
    locationY: ownProps.location,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAnnotation: (id) => dispatch(fetchAnnotation(id)),
  editAnnotation: (annotation) => dispatch(editAnnotation(annotation)),
  deleteAnnotation: (id) => dispatch(deleteAnnotation(id)),
  fetchSingleOpinion: (id) => dispatch(fetchSingleOpinion(id)),
  clearAnnotation: () => dispatch(clearAnnotation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnnotationDetail);
