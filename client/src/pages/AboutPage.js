import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-1 p-4 text-white'>
      <h1 className='text-3xl md:text-5xl mb-12 font-bold text-accentOrange'>
       Covid Relief Fund On Blockchain
      </h1>

{/* Profile Card 1 */}
      <div className="flex  w-[40%] px-6 py-4 mt-8 rounded-xl shadow-2xl bg-backgroundSecondary ">
        {/*profile pic  */}
        <div className="flex w-1/3 ">
          <img className='rounded-full p-4 h-full' src="https://avatars.dicebear.com/api/initials/aryan-sharma.svg" alt="profile image" />
        </div>
        {/* info coloumn */}
        <div className="flex flex-col px-6 w-2/3 ">
          <h1 className='text-4xl md:text-2xl mt-6 font-bold' >Aryan Sharma</h1>
          <h2 className='text-2xl font-semibold text-accentOrange mt-2' > UE195035</h2>

          <h3 className='text-2xl mt-4   md:text-xl '>A third year undergrad pursuing bachelor's of engineering in electronics and communication engineering interested in web/android and UI design</h3>
        </div>
      </div>

        {/* Profile Card 2 */}
        <div className="flex  w-[40%] px-6 py-4 mt-8 rounded-xl shadow-2xl bg-backgroundSecondary ">
        {/*profile pic  */}
        <div className="flex w-1/3 ">
          <img className='rounded-full p-4 h-full' src="https://avatars.dicebear.com/api/initials/aryan-basu.svg" alt="profile image" />
        </div>
        {/* info coloumn */}
        <div className="flex flex-col px-6 w-2/3 ">
          <h1 className='text-4xl md:text-2xl mt-6 font-bold' >Aryan Basu</h1>
          <h2 className='text-2xl font-semibold text-accentOrange mt-2' > UE195034</h2>
          <h3 className='text-2xl mt-4  md:text-xl '>A third year undergrad pursuing bachelor's of engineering in electronics and communication engineering interested in web/android and blockchain technology </h3>
        </div>
        </div>
        



      
        <Link to='/'>
          <button className=' px-4 md:px-6 py-2 md:py-3  mt-12 md:mt-16 text-lg md:text-2xl transition-all mb-16 border-2 rounded-lg border-accentPurple w-fit active:scale-95 hover:bg-accentPurple hover:text-white'>
            Go Back To Home
          </button>
        </Link>
    
    </div>
  );
};

export default AboutPage;
