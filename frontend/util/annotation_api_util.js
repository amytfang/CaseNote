export const fetchAnnotation = (id) => {
  return $.ajax({
    type: "GET",
    url: `/api/annotations/${id}`
  });
};

export const createAnnotation = (annotation) => {
  return $.ajax({
    type: "POST",
    url: "/api/annotations",
    data: { annotation }
  });
};

export const editAnnotation = (annotation) => {
  return $.ajax({
    type: "PATCH",
    url: `/api/annotations/${annotation.id}`,
    data: { annotation }
  });
};

export const deleteAnnotation = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `/api/annotations/${id}`
  });
};
