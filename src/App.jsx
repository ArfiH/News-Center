import Search from "./components/Search"
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Toggle from "./components/Toggle";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <Search />
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <Pagination />
      <Stories /> 
    </div>
  );
};

export default App;