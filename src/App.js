import React from "react";
import "./App.css";
import SearchParams from "./searchParams";

import Pet from "./pet";

function App() {
  return (
    <div className="App">
      <h1>Adopt me!</h1>
      <SearchParams />
      <Pet />
    </div>
  );
}

export default App;
