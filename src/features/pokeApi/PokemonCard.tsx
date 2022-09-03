import { useFetchPokemonByNameQuery } from './pokeApiSlice';
import { colors } from '../../utils/colors';
import { useEffect, useState } from 'react';
import { Pokeball } from '../../utils/svg/svg';
import { useDispatch } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../features/favorites/favoriteSlice';

interface Props {
  name: string;
  add: boolean;
}

interface ResponsePokeType {
  type: { name: string };
  slot: number;
}

const PokemonCard = ({ name, add }: Props) => {
  const { data, error, isLoading } = useFetchPokemonByNameQuery(name);
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setColor(() => data?.types[0].type.name);
  }, [data]);

  const handleClickPokeBall = () => {
    add ? dispatch(addFavorite(name)) : dispatch(removeFavorite(name));
  };

  return isLoading ? (
    <h1>Cargando...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <article className=" m-2 flex h-40 w-80 flex-row justify-between shadow-lg">
      <section className=" flex min-w-[50%] flex-col items-center justify-evenly bg-gradient-to-b from-White to-gray-100">
        <p className="text-center capitalize">{name}</p>
        <div className="flex min-w-full flex-col justify-evenly">
          <div className="flex justify-evenly">
            <p className="rounded-full border-4 border-solid border-Dark p-1 text-center">
              {data?.stats[1].base_stat}
            </p>
            <p className="rounded-full border-4 border-solid border-Dark p-1 text-center">
              {data?.stats[2].base_stat}
            </p>
          </div>
          <div className="flex justify-evenly ">
            <p className="text-center ">Atack</p>
            <p className="text-center ">Defense</p>
          </div>
        </div>
        <div className="flex min-w-full justify-evenly">
          {data?.types.map(({ type, slot }: ResponsePokeType) => (
            <div
              key={slot}
              className="bg-[] py-1shadow-lg  rounded-lg px-2 shadow-buttonShadow "
              style={{
                backgroundColor: colors[type.name],
              }}
            >
              {type.name}
            </div>
          ))}
        </div>
      </section>
      <section
        className="group relative flex min-w-[50%] justify-end"
        style={{
          backgroundColor: colors[color],
        }}
      >
        <button
          className="absolute z-10 m-1 self-start"
          onClick={handleClickPokeBall}
        >
          <Pokeball />
        </button>
        <img
          className="drop-shadow-lg"
          src={data?.sprites.other.dream_world.front_default}
          // src={data?.sprites.front_default}
          // src={data?.sprites?.other?.home?.front_default}
        />
      </section>
    </article>
  );
};

export default PokemonCard;
