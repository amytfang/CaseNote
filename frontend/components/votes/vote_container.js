import { connect } from 'react-redux';
import Vote from './vote';
import {
  downvoteAnnotation,
  upvoteAnnotation,
  downvoteSuggestion,
  upvoteSuggestion,
  downvoteComment,
  upvoteComment
} from '../../actions/vote_actions';

const mapStateToProps = (state, ownProps) => ({
  numVotes: ownProps.numVotes,
  userVote: ownProps.userVote,
  votableId: ownProps.votableId
});

const mapDispatchToProps = (dispatch, ownProps) => {
  switch(ownProps.votableType) {
    case "Annotation":
      return {
        downvote: (id) => dispatch(downvoteAnnotation(id)),
        upvote: (id) => dispatch(upvoteAnnotation(id))
      };
    case "Suggestion":
      return {
        downvote: (id) => dispatch(downvoteSuggestion(id)),
        upvote: (id) => dispatch(upvoteSuggestion(id))
      };
    case "Comment":
      return {
        downvote: (id) => dispatch(downvoteComment(id)),
        upvote: (id) => dispatch(upvoteComment(id))
      };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
