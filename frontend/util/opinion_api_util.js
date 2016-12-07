export const fetchAllOpinions = () => {
  return $.ajax({
    type: "GET",
    url: "/api/opinions"
  });
};

export const fetchSingleOpinion = (id) => {
  return $.ajax({
    type: "GET",
    url: `/api/opinions/${id}`
  });
};

export const createOpinion = (opinion) => {
  return $.ajax({
    type: "POST",
    url: "/api/opinions",
    data: { opinion }
  });
};

export const editOpinion = (opinion) => {
  return $.ajax({
    type: "PATCH",
    url: `/api/opinions/${opinion.id}`,
    data: { opinion }
  });
};

export const deleteOpinion = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `/api/opinions/${id}`
  });
};
