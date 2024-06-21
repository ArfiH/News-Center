import React from "react";
import { useState } from "react";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Toggle from "./components/Toggle";
import CategoryFilter from "./components/CategoryFilter";
import Favorites from "./components/Favorites";
import Dialog from "./components/Dialog";
import useLocalStorage from "use-local-storage";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <div className="top-container">
        <Search />
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
      <CategoryFilter />
      <button className="see-favorites-button" onClick={toggleDialog}>
        See Favourites
      </button>
      <Pagination />
      <Stories />
      <Dialog isOpen={isDialogOpen} onClose={toggleDialog}>
        <Favorites />
      </Dialog>
    </div>
  );
};

export default App;
