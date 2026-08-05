import {useState} from "react";
import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifLIst} from "./gifs/components/GifLIst.tsx";
import {mockGifs} from "./mock-data/gifs.mock.ts";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dragon ball", "pokemon"]);

  const handleTermClicked = (term: string) => {
    console.log("click", term)
  }

  const handleSearch = (query: string) => {
    console.log({query})
  }

  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el GIF perfecto"/>
      <SearchBar type="text" text="Buscar" placeholder="Buscar gifs" onSearch={handleSearch}/>
      <PreviousSearches searches={previousTerms} handleTermClicked={handleTermClicked}/>
      <GifLIst gifs={mockGifs}/>
    </>
  );
};
