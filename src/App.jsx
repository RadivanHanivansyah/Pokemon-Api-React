import { useState } from "react";
import "./Style.css";
import Header from "../Components/Header.jsx";
import ResultSeacrh from "../Components/ResultSeacrh";
import SearchBar from "../Components/SearchBar";
import InfoPokemon from "../Components/InfoPokemon";
function App() {
  const [pokemonDetail, setPokemonDetail] = useState();
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);
  const [isTrueName, setIsTrueName] = useState(false);
  return (
    <div className="px-3 -top-9 sm:-top-12 relative lg:h-screen">
      <Header />
      <SearchBar
        setPokemonDetail={setPokemonDetail}
        setOpen={setOpen}
        setName={setName}
        name={name}
        setIsTrueName={setIsTrueName}
      />
      <main className="flex flex-wrap items-start gap-3 lg:flex-nowrap lg:gap-8 mt-6">
        <div className="w-full lg:w-3/5">
          <ResultSeacrh
            setPokemonDetail={setPokemonDetail}
            setOpen={setOpen}
            isTrueName={isTrueName}
            name={name}
          />
        </div>
        <div className="w-full lg:w-1/4">
          {open ? <InfoPokemon data={pokemonDetail} /> : ""}
        </div>
      </main>
    </div>
  );
}

export default App;
