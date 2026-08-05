import {useState} from "react";

interface ISearchInputProps {
  type: string
  text: string
  onSearch: (query: string) => void;
  placeholder?: string
}

export const SearchBar = ({
                            type,
                            text,
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

  return (
    <div className="search-container">
      <input type={type}
             placeholder={placeholder}
             value={query}
             onChange={e => setQuery(e.target.value)}
             onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{text}</button>
    </div>
  )
}
