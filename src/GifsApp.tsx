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

  const handleSearch = (query: string = "") => {
    query = query.toLowerCase().trim()
    if (query.length === 0) return
    if (previousTerms.length > 7) return
    if (previousTerms.includes(query)) return

    setPreviousTerms([query, ...previousTerms])
  }

  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el GIF perfecto"/>
      <SearchBar placeholder="Buscar gifs" onSearch={handleSearch}/>
      <PreviousSearches searches={previousTerms} onTermClicked={handleTermClicked}/>
      <GifLIst gifs={mockGifs}/>
    </>
  );
};
