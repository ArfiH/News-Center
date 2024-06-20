const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: (action.payload.hits || []).filter(
          (post) => post.title != "[Removed]"
        ), // Ensure hits is always an array
        nbPages: action.payload.nbPages || 0, // Default value for nbPages
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((post) => post.objectID !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
