import React from 'react';
import { toArray } from '../../util/selectors';
import { timeSince } from '../../util/date';
import VoteContainer from '../votes/vote_container';

const CommentIndex = (props) => {
  if (!props.comments) return null;
  const comments = toArray(props.comments);
  return (
    <ul className="comment-index">
      { comments.map((comment) =>
        <li className="comment-item" key={comment.id}>
          <header className="group">
            <h4>{ comment.user.username }</h4>
            <span>{ timeSince(comment.created_at) } ago</span>
          </header>
          <p>{ comment.body }</p>
          <VoteContainer
            numVotes={ comment.numVotes }
            userVote={ comment.userVote }
            votableId={ comment.id }
            votableType="Comment"/>
        </li>
      )}
    </ul>
  );
};

export default CommentIndex;
