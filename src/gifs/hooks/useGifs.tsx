import {useState} from "react";
import type {IGif} from "../interfaces/gif.interface.ts";
import {getGifsByQuery} from "../actions/get-gifs-by-query.action.ts";

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<IGif[]>([]);

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

  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked
  }
}