import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser, 
  errors: state.formErrors.comment,
  opinionId: ownProps.opinionId
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
