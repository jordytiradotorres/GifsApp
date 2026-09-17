import {useState} from "react";
import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifLIst} from "./gifs/components/GifLIst.tsx";
import {getGifsByQuery} from "./gifs/actions/get-gifs-by-query.action.ts";
import type {IGif} from "./gifs/interfaces/gif.interface.ts";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<IGif[]>([]);
  console.log("gifs: ", gifs)


  const handleTermClicked = async (term: string) => {
    const gifs = await getGifsByQuery(term)
    setGifs(gifs)
  }

  const handleSearch = async (query: string = "") => {
    query = query.toLowerCase().trim()
    if (query.length === 0) return
    if (previousTerms.length > 7) return
    if (previousTerms.includes(query)) return

    setPreviousTerms((prev) => [query, ...prev])

    const gifs = await getGifsByQuery(query)
    setGifs(gifs)
  }

  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el GIF perfecto"/>
      <SearchBar placeholder="Buscar gifs" onSearch={handleSearch}/>
      <PreviousSearches searches={previousTerms} onTermClicked={handleTermClicked}/>
      <GifLIst gifs={gifs}/>
    </>
  );
};
