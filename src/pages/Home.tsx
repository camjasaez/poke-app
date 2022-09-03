import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/pokedex');
  };
  return (
    <main className="flex min-h-[90vh] flex-col items-center bg-gradient-to-b from-Third to-Primary">
      <article className="order-2 flex min-w-[50vw] flex-col items-center justify-evenly text-center">
        <section className="m-4 w-[320px] min-w-[50%] items-center">
          <h1 className="  text-4xl font-bold leading-[49px] tracking-[4px]  ">
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </h1>
        </section>
        <section className="m-5 max-w-[50%]">
          <p className="text-[24px] leading-[28px]">
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>
        </section>

        <button
          onClick={handleClick}
          className="z-10 m-3 rounded-xl bg-green-500 px-5 py-3 shadow-buttonShadow"
        >
          See pokemons
        </button>
      </article>
      <article className="order-1 flex max-w-[50vw] items-center">
        <img
          src="/img/pikachu.png"
          className="max-h-[50%] object-contain"
          // className="mix-w-lg max-w-lg object-contain"
        />
      </article>
    </main>
  );
};

export default Home;
