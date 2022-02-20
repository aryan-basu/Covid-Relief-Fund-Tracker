const Navbar = () => {
  return (
    <div className='flex items-center self-center justify-between w-full px-8 py-2 mt-4 mb-16 border-2 border-accentOrange rounded-xl bg-backgroundSecondary'>
      {/* Logo */}
      <div className='my-2 text-2xl font-bold transition-all border-b-2 cursor-pointer border-b-backgroundSecondary hover:border-b-accentOrange text-accentOrange'>
        ETHER
      </div>

      {/* Links */}
      <div className='flex'>
        <div className='mr-8 font-semibold text-white transition-all cursor-pointer active:scale-95'>
          Home
        </div>
        <div className='font-semibold text-white transition-all cursor-pointer active:scale-95 '>
          Info
        </div>
      </div>

      {/* Login/Signup Button */}
      <button className='flex items-center justify-center px-5 py-2 font-semibold text-white transition-all rounded-lg active:scale-95 bg-accentPurple'>
        Login
      </button>
    </div>
  );
};

export default Navbar;
