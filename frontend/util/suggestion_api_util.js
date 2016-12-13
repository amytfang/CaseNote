export const createSuggestion = (suggestion) => {
  return $.ajax({
    type: "POST",
    url: "/api/suggestions",
    data: { suggestion }
  });
};

export const editSuggestion = (suggestion) => {
  return $.ajax({
    type: "PATCH",
    url: `/api/suggestions/${suggestion.id}`,
    data: { suggestion }
  });
};

export const deleteSuggestion = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `/api/suggestions/${id}`
  });
};
