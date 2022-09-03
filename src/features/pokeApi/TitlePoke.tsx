import { useFetchPokemonsQuery } from './pokeApiSlice';

const TitlePoke = () => {
  const { data, error, isLoading } = useFetchPokemonsQuery('');

  return (
    <h1 className="mx-auto">
      {data?.count || '+1000'} Pokemons for you to choose your favorite!{' '}
    </h1>
  );
};

export default TitlePoke;
