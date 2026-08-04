import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifLIst} from "./gifs/components/GifLIst.tsx";
import {mockGifs} from "./mock-data/gifs.mock.ts";

export const GifsApp = () => {
    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el GIF perfecto"/>
            <SearchBar type="text" text="Buscar" placeholder="Buscar gifs"/>
            <PreviousSearches/>
            <GifLIst gifs={mockGifs}/>
        </>
    );
};
