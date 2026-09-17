import React, {useEffect, useState} from "react";

interface ISearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string
}

export const SearchBar = ({
                            placeholder = "Buscar",
                            onSearch
                          }: ISearchInputProps) => {

  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query)
    setQuery("")
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query)
    }, 700)

    return () => {
      clearTimeout(timeout)
    }
  }, [query, onSearch])

  return (
    <div className="search-container">
      <input type="text"
             placeholder={placeholder}
             value={query}
             onChange={e => setQuery(e.target.value)}
             onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
