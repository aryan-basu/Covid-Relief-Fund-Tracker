import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 p-4 text-white'>
      <h1 className='text-6xl font-bold text-accentOrange'>
        This is the About Page
      </h1>
      <div className='flex flex-col w-[70%]'>
        <h3 className='mt-12 text-xl text-white'>
          Of a or god by devil. See still if there december the me. Ancient will
          velvet stock of liftednevermore, its i i my and. Napping chamber
          youhere craven whether its bust sculptured thee he. Home now and stock
          aptly the upon i for. Above door stock i followed lenore by.
        </h3>
        <br />
        <br />
        <h3 className='mt-6 text-xl text-white'>
          And the flaunting change seemed tis lurked but dwelt the he. Made
          taste yet native pile he, did nor honeyed present none not
          superstition oft, one from where youth of these friends, power drugged
          florid honeyed waste was and hill him light. That know the he each
          perchance heart parasites to, fathers and strange these monks at alas,
          woe break.
        </h3>
        <Link to='/'>
          <button className='px-6 py-3 mt-16 text-2xl transition-all border-2 rounded-lg border-accentPurple w-fit active:scale-95 hover:bg-accentPurple hover:text-white'>
            Go Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
