import { connect } from 'react-redux';
import { editOpinion, deleteOpinion } from '../../actions/opinion_actions';
import { editAnnotation } from '../../actions/annotation_actions';
import OpinionDetailBody from './opinion_detail_body';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  opinion: state.opinionDetail,
  formErrors: state.formErrors.opinion
});

const mapDispatchToProps = (dispatch) => ({
  editOpinion: (opinion) => dispatch(editOpinion(opinion)),
  deleteOpinion: (id) => dispatch(deleteOpinion(id)),
  editAnnotation: (anno) => dispatch(editAnnotation(anno))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpinionDetailBody);
