import {describe, expect, test, vi} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useGifs} from "./useGifs.tsx";
import * as gifActions from "../actions/get-gifs-by-query.action.ts";

describe('useGifs', () => {
  test('should return default values and methods', () => {
    const {result} = renderHook(() => useGifs())

    expect(result.current.gifs.length).toBe(0)
    expect(result.current.previousTerms.length).toBe(0)
    expect(result.current.handleSearch).toBeDefined()
    expect(result.current.handleTermClicked).toBeDefined()
  })

  test('should return an empty array if no value is passed to it.', async () => {
    const {result} = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearch("")
    })
    expect(result.current.gifs).toStrictEqual([])
  })

  test('should return an empty array if previousTerm already exists', async () => {
    const {result} = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearch("goku")
    })
    await act(async () => {
      await result.current.handleSearch("goku")
    })

    expect(result.current.previousTerms).toStrictEqual(["goku"])
  })

  test('should return a list of gifs', async () => {
    const {result} = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleSearch("goku")
    })
    expect(result.current.gifs.length).toBe(10)
  })

  test('should return a list of gifs when handleTermClicked is called', async () => {
    const {result} = renderHook(() => useGifs())
    const handleTermClickedSpy = vi.spyOn(result.current, "handleTermClicked")

    await act(async () => {
      await result.current.handleTermClicked("goku")
    })
    expect(handleTermClickedSpy).toHaveBeenCalled()
  })

  test('should return a list of gifs from cache', async () => {
    const {result} = renderHook(() => useGifs())

    await act(async () => {
      await result.current.handleTermClicked("goku")
    })

    vi.spyOn(gifActions, "getGifsByQuery")
      .mockRejectedValue(new Error("This is my custom error"))

    await act(async () => {
      await result.current.handleTermClicked("goku")
    })

    expect(result.current.gifs.length).toBe(10)
  })

  test('should return no more than 8 previous terms', async () => {
    const {result} = renderHook(() => useGifs())

    vi.spyOn(gifActions, "getGifsByQuery").mockResolvedValue([])

    for (let i = 1; i <= 9; i++) {
      await act(async () => {
        await result.current.handleSearch(`Goku${i}`);
      });
    }

    expect(result.current.previousTerms).toStrictEqual([
      'goku8', 'goku7',
      'goku6', 'goku5',
      'goku4', 'goku3',
      'goku2', 'goku1'
    ])
    expect(result.current.previousTerms.length).toBe(8)
  })
})
