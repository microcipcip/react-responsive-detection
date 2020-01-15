import React, {useContext} from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import useResponsive from "./useResponsive";

export const ResponsiveContext = React.createContext();

function App() {
  const responsiveData = useResponsive();
  return (
    <ResponsiveContext.Provider value={responsiveData}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Table responsiveData={responsiveData} />
        </header>
      </div>
    </ResponsiveContext.Provider>
  );
}

export default App;
