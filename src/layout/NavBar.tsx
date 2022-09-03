import { Pokeball, PokeLogo, Sandwich } from '../utils/svg/svg';
import { Link } from 'react-router-dom';
import {
  selectCount,
  selectPokemons,
} from '../features/favorites/favoriteSlice';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const counterFav = useSelector(selectCount);
  const pokemons = useSelector(selectPokemons);
  console.log(pokemons);
  return (
    <header className="relative z-10 min-h-[10vh] min-w-full bg-Third drop-shadow-lg">
      <nav className=" mx-auto flex flex-wrap items-center justify-around">
        <PokeLogo />
        <button
          type="button"
          className="  ml-3 inline-flex items-center rounded-lg p-2 text-sm text-black  focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        >
          <Sandwich />
        </button>
        <div className=" z-40 hidden w-auto md:block">
          <ul className="  mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li className="   text-base lg:text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="  text-base lg:text-lg">
              <Link to="/pokedex">Pokedex</Link>
            </li>
            <li className="  text-base lg:text-lg">
              <Link to="/legendary">Legendary</Link>
            </li>
            <li className="flex text-base lg:text-lg">
              <Link to="/favorites">My Favorites</Link>
              <Pokeball />
              <span>{counterFav}</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
