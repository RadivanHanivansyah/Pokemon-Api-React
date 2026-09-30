import { useState } from "react";
import "./Style.css";
import Header from "../Components/Header.jsx";
import ResultSeacrh from "../Components/ResultSeacrh";
import SearchBar from "../Components/SearchBar";
function App() {
  return (
    <div className="px-3 -top-9 sm:-top-12 relative lg:h-screen">
      <Header />
      <SearchBar />
      <main>
        <ResultSeacrh />
      </main>
    </div>
  );
}

export default App;
