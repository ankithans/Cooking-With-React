import React, { useState } from "react";
import Counter from "./counter";
import CounterHooks from "./counterHooks";

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("green");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      Counter Counter
      <CounterHooks initialCount={0} />
      <button
        onClick={() =>
          setTheme((prevTheme) => {
            return prevTheme === "red" ? "blue" : "red";
          })
        }
      >
        Toogle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
