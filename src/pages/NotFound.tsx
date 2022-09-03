import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  let navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <main className=" z-10 flex min-h-[90vh] flex-col items-center justify-center bg-gradient-to-b from-Third to-Danger">
      <p className=" fixed z-0 text-center text-[15rem] xs:text-[20rem] sm:text-[25rem] md:text-[30rem] lg:text-[50rem]">
        404
      </p>
      <img
        className=" md:max-h-screen-md relative z-10 sm:max-w-screen-sm"
        src="/img/TR.png"
        alt="Team Rocket"
      />
      <h1 className="z-10 text-White">The rocket team has won this time.</h1>
      <button
        onClick={handleClick}
        className=" z-10 rounded-xl bg-Primary px-5 py-3 shadow-buttonShadow"
      >
        Return
      </button>
    </main>
  );
};

export default NotFound;
