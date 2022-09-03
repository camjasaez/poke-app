import { useFetchPokemonsQuery } from './pokeApiSlice';
import PokemonCard from './PokemonCard';

const ListPoke = () => {
  const { data, error, isLoading } = useFetchPokemonsQuery('');

  return (
    <section className=" flex flex-wrap justify-center ">
      {data?.results?.map(({ name }: any) => (
        <PokemonCard key={name} name={name} add={true} />
      ))}
    </section>
  );
};

export default ListPoke;
