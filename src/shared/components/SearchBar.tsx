interface ISearchInputProps {
    type: string
    text: string
    placeholder?: string
}

export const SearchBar = ({type, text, placeholder = "Buscar"}: ISearchInputProps) => {
    return (
        <div className="search-container">
            <input type={type} placeholder={placeholder}/>
            <button>{text}</button>
        </div>
    )
}
