import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const API = "https://gnews.io/api/v4/search?";
const API_KEY = "1cc6e317e34975fd9166170648f1dfff";

const initialState = {
  isLoading: true,
  query: "India",
  totalPages: 0,
  page: 1,
  hits: [],
  favorites: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Fetched Data:", data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.articles || [],
          totalPages: Math.ceil(data.totalArticles / 10),  // Assume 10 results per page
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_URL) => {
    dispatch({ type: "REMOVE_POST", payload: post_URL });
  };

  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  const addToFavorites = (story) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: story });
  };

  const removeFromFavorites = (url) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: url });
  };

  useEffect(() => {
    fetchApiData(`${API}q=${state.query}&token=${API_KEY}&page=${state.page}&max=10`);
  }, [state.query, state.page]);

  console.log("AppContext State:", state);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removePost,
        searchPost,
        getNextPage,
        getPrevPage,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useGlobalContext };
