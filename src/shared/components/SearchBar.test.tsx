import {describe, test, expect, vi} from "vitest"
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {SearchBar} from "./SearchBar.tsx";

describe('SearchBar', () => {
  test('should render searchBar correctly', () => {
    render(<SearchBar onSearch={() => {
    }}/>)

    expect(screen.getByRole("textbox")).toBeDefined()
    expect(screen.getByRole("button")).toBeDefined()
  })

  test('should call onQuery with the correct value after 700ms', async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch}/>)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, {target: {value: "test"}})

    // await new Promise(resolve => setTimeout(resolve, 701))
    await waitFor(() => {
      expect(onSearch).toHaveBeenCalled()
      expect(onSearch).toHaveBeenCalledWith("test")
    })
  })

  test('should call only once with the last value (debounce)', async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch}/>)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, {target: {value: "t"}})
    fireEvent.change(input, {target: {value: "te"}})
    fireEvent.change(input, {target: {value: "tes"}})
    fireEvent.change(input, {target: {value: "test"}})

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledTimes(1)
      expect(onSearch).toHaveBeenCalledWith("test")
    })
  })

  test('should call onSearch when button clicked with the input value', () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch}/>)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, {target: {value: "test"}})

    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(onSearch).toHaveBeenCalledTimes(1)
    expect(onSearch).toHaveBeenCalledWith("test")
  })

  test('should the input has the correct placeholder value', () => {
    const value = "Buscar gifs"
    render(<SearchBar onSearch={() => {
    }} placeholder={value}/>)
    expect(screen.getByPlaceholderText(value)).toBeDefined()
  })

  test('should call handleSearch when the Enter key is pressed.', async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch}/>)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, {target: {value: "test"}})
    fireEvent.keyDown(input, {key: "enter", code: "Enter", charCode: 13})

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalled()
      expect(onSearch).toHaveBeenCalledWith("test")
    })
  })

  test('should do not call onSearch if the value does not change.', async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch}/>)

    const input = screen.getByRole("textbox")
    fireEvent.change(input, {target: {value: "test"}})
    fireEvent.change(input, {target: {value: "test"}})

    await waitFor(() => {
      expect(onSearch).toHaveBeenCalledTimes(1)
    })
  })
})
