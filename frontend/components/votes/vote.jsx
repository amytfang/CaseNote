import React from 'react';

const Vote = (props) => {
  const upvoteClass = (props.userVote === 1) ?
    "upvote-icon selected" : "upvote-icon";
  const downvoteClass = (props.userVote === -1) ?
    "downvote-icon selected" : "downvote-icon";
  let countClass;
  if (props.numVotes < 0) {
    countClass = "vote-count negative";
  } else if (props.numVotes > 0){
    countClass = "vote-count positive";
  } else {
    countClass = "vote-count";
  }

  return(
    <div className="vote-buttons group">
      <div
        className={ upvoteClass }
        onClick={() => props.upvote(props.votableId)}></div>
      <div className={ countClass }>{props.numVotes}</div>
      <div
        className={ downvoteClass }
        onClick={() => props.downvote(props.votableId)}></div>
    </div>
  );
};

export default Vote;
