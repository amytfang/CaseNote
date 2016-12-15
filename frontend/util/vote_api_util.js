export const downvoteAnnotation = (id) => {
  return $.ajax({
    type: "POST",
    url: `/api/annotations/${id}/downvote`
  });
};

export const upvoteAnnotation = (id) => {
  return $.ajax({
    type: "POST",
    url: `/api/annotations/${id}/upvote`
  });
};

export const downvoteComment = (id) => {
  return $.ajax({
    type: "POST",
    url: `/api/comments/${id}/downvote`
  });
};

export const upvoteComment = (id) => {
  return $.ajax({
    type: "POST",
    url: `/api/comments/${id}/upvote`
  });
};

export const downvoteSuggestion = (id) => {
  return $.ajax({
    type: "POST",
    url: `/api/suggestions/${id}/downvote`
  });
};

export const upvoteSuggestion = (id) => {
  return $.ajax({
    type: "POST",
    url: `/api/suggestions/${id}/upvote`
  });
};
