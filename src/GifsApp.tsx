import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifLIst} from "./gifs/components/GifLIst.tsx";
import {useGifs} from "./gifs/hooks/useGifs.tsx";

export const GifsApp = () => {
  const {gifs, previousTerms, handleTermClicked, handleSearch} = useGifs()

  return (
    <>
      <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el GIF perfecto"/>
      <SearchBar placeholder="Buscar gifs" onSearch={handleSearch}/>
      <PreviousSearches searches={previousTerms} onTermClicked={handleTermClicked}/>
      <GifLIst gifs={gifs}/>
    </>
  );
};
