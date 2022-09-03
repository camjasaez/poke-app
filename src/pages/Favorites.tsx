import PokemonCard from '../features/pokeApi/PokemonCard';
import { useSelector } from 'react-redux';
import { selectPokemons } from '../features/favorites/favoriteSlice';
const Favorites = () => {
  const pokemons = useSelector(selectPokemons);

  return (
    <main className="min-h-[90vh] bg-gradient-to-b from-Third to-Primary">
      <div className="flex flex-wrap justify-center">
        {pokemons?.map(({ name }: any) => (
          <PokemonCard key={name} name={name} add={false} />
        ))}
      </div>
    </main>
  );
};

export default Favorites;
