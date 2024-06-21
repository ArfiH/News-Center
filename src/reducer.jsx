const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        totalPages: action.payload.totalPages,
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
        page: 1,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        page: state.page + 1 >= state.totalPages ? state.totalPages : state.page + 1,
      };
    case "PREV_PAGE":
      return {
        ...state,
        page: state.page - 1 <= 1 ? 1 : state.page - 1,
      };
    case "ADD_TO_FAVORITES":
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    case "REMOVE_FROM_FAVORITES":
      const remainingFavorites = state.favorites.filter(
        (item) => item.url !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
      return {
        ...state,
        favorites: remainingFavorites,
      };
    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;
