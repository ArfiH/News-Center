import React from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Toggle from "./components/Toggle";
import CategoryFilter from "./components/CategoryFilter";
import useLocalStorage from "use-local-storage";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <div className="top-container">
        <Search />
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
      <CategoryFilter />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
