import React from 'react';
import { toArray } from '../../util/selectors';
import { timeSince } from '../../util/date';

const CommentIndex = (props) => {
  const comments = toArray(props.comments);
  return (
    <ul className="comment-index">
      { comments.map((comment) =>
        <li className="comment-item" key={comment.id}>
          <header>
            <h4>{ comment.user.username }</h4>
            <span>{ timeSince(comment.created_at) } ago</span>
          </header>
          <p>{ comment.body }</p>
        </li>
      )}
    </ul>
  );
};

export default CommentIndex;
