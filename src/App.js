import React, { createContext } from "react";
import "./App.css";
import Table from "./Table";
import useResponsive from "./useResponsive";

export const ResponsiveContext = createContext();

function App() {
  const responsiveData = useResponsive();
  return (
    <ResponsiveContext.Provider value={responsiveData}>
      <div className="App">
        <header className="App-header">
          <Table responsiveData={responsiveData} />
        </header>
      </div>
    </ResponsiveContext.Provider>
  );
}

export default App;
