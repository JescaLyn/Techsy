export const fetchSearchTerms = (success, error) => {
  $.ajax({
    method: "get",
    url: "/api/search_terms",
    success,
    error
  });
};
