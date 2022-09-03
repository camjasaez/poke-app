import ListPoke from '../features/pokeApi/ListPoke';
import SearchPoke from '../features/pokeApi/SearchPoke';
import TitlePoke from '../features/pokeApi/TitlePoke';

const Pokedex = () => {
  return (
    <main className="flex min-h-[90vh]  flex-col  items-center bg-gradient-to-b from-Third to-Primary">
      <TitlePoke />
      <SearchPoke />
      <ListPoke />
    </main>
  );
};

export default Pokedex;
