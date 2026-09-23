import { useState } from "react";
import "./Style.css";
import Header from "../Components/Header.jsx";
import ResultSeacrh from "../Components/ResultSeacrh";
import SearchBar from "../Components/SearchBar";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
