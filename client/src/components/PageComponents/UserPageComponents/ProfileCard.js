const ProfileCard = ({ setSendDonationModal, setViewDonationRequests }) => {
  return (
    <div className='flex flex-col w-1/4 px-8 py-12 border-2 shadow-lg bg-backgroundSecondary border-accentOrange rounded-xl'>
      {/* profile img */}
      <div className='flex self-center w-1/2 mb-8 border-2 rounded-full aspect-square border-accentPurple'></div>
      {/* title */}
      <span className='text-5xl font-bold '> Red Cross </span>
      <span className='text-2xl font-semibold'>Covid Relief</span>

      {/* donation Buttons */}

      <div className='flex flex-row justify-between mt-16 mb-12 '>
        <button
          onClick={() => {
            setSendDonationModal(true);
          }}
          className='flex justify-center px-4 py-2 font-semibold transition-all rounded-lg shadow-lg w-fit-content bg-accentPurple active:scale-95'>
          Donate
        </button>
        <button
          onClick={() => {
            setViewDonationRequests(true);
          }}
          className='flex justify-center px-4 py-2 font-semibold transition-all border-2 rounded-lg shadow-lg w-fit-content border-accentPurple active:scale-95'>
          Requests
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
