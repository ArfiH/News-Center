import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const API = "https://newsapi.org/v2/everything?apiKey=7aaa9a88543d4b349ee2263dd30036f0&";

const initialState = {
  isLoading: true,
  query: "India",
  category: "",
  nbPages: 0,
  page: 0,
  hits: [],
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
          nbPages: Math.ceil(data.totalResults / 24), // Calculate total pages
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  const setCategory = (category) => {
    dispatch({
      type: "SET_CATEGORY",
      payload: category,
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

  useEffect(() => {
    const categoryQuery = state.category ? `&category=${state.category}` : "";
    fetchApiData(`${API}q=${state.query}${categoryQuery}&page=${state.page + 1}&pageSize=24`);
  }, [state.query, state.category, state.page]);

  console.log("AppContext State:", state);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removePost,
        searchPost,
        setCategory,
        getNextPage,
        getPrevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};

export { AppContext, AppProvider, useGlobalContext };
