export const createComment = (comment) => {
  return $.ajax({
    type: "POST",
    url: "/api/comments",
    data: { comment }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `/api/comments/${id}`
  });
};
