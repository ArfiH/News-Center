const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: (action.payload.hits || []).filter(
          (post) => post.title !== "[Removed]"
        ),
        nbPages: action.payload.nbPages || 0,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((post) => post.url !== action.payload),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
        page: 0, // Reset page number on new search
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
        page: 0, // Reset page number on new category
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1 >= state.nbPages ? state.nbPages - 1 : state.page + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: state.page - 1 < 0 ? 0 : state.page - 1,
      };
    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
