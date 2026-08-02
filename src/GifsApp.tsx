import {mockGifs} from "./mock-data/gifs.mock.ts";

export const GifsApp = () => {
    return (
        <>
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Descubre y comparte el GIF perfecto</p>
            </div>

            <div className="search-container">
                <input type="text" placeholder="Buscar gifs"/>
                <button>Buscar</button>
            </div>

            <div className="previous-searches">
                <h2>Búsquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Dragon ball</li>
                    <li>Pokemón</li>
                    <li>Digimón</li>
                </ul>
            </div>

            <div className="gifs-container">
                {mockGifs.map(gif => (
                    <div className="gif-card" key={gif.id}>
                        <img src={gif.url} alt={gif.title}/>
                        <h3>{gif.title}</h3>
                        <p>{gif.width}*{gif.height} (1.5mb)</p>
                    </div>
                ))}
            </div>
        </>
    )
}
