import React, { useState } from "react";
import "./App.css";
import Procurar from "./Search";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  


  return (
    <div className="app">
      <Procurar/>
    </div>
  );
}

export default App;
