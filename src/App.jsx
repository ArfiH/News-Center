import Search from "./components/Search"
import Pagination from "./components/Pagination";
import Stories from "./components/Stories";
import Toggle from "./components/Toggle";
import useLocalStorage from "use-local-storage";
import "./App.css";

const App = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
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