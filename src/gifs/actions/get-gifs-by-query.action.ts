import {giphyApi} from "../api/giphy.api.ts";
import type {GiphyResponse} from "../interfaces/giphy.response.ts";
import type {IGif} from "../interfaces/gif.interface.ts";

export const getGifsByQuery = async (query: string): Promise<IGif[]> => {
  if (query.trim().length === 0) {
    return []
  }

  try {
    const response = await giphyApi.get<GiphyResponse>("/search", {
      params: {
        q: query,
        limit: 10,
      }
    })

    return response.data.data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: +gif.images.original.width,
      height: +gif.images.original.height
    }))
  } catch (error) {
    console.error(error)
    return []
  }
}