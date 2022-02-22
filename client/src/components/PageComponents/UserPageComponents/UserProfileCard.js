const UserProfileCard = ({
  setSendDonationModal,
  setViewDonationRequests,
  userWalletAddress,
}) => {
  return (
    <div className='flex flex-col  w-[50%] px-8 py-12 border-2 shadow-lg bg-backgroundSecondary border-accentOrange rounded-xl'>
      {/* profile img */}
      <div className='flex self-center w-64 p-8 mb-8 border-2 rounded-full aspect-square border-accentPurple'>
        <img
          src={`https://avatars.dicebear.com/api/bottts/${userWalletAddress}.svg`}
          alt='profile-img'
        />
      </div>
      {/* title */}
      <div className='flex flex-col align-center '>
        <div className='flex mb-2'>
          <span className='mr-6 text-4xl font-bold'>Hello👋, </span>
          <span className='flex px-4 py-2 text-xl text-white align-center'>
            {userWalletAddress}
          </span>
        </div>
        <span className='mt-6 text-xl '>
          Thank You for donating to Covid Relief Fund,
          <br /> You can donate more Ether using <strong>Donate</strong> button,
          <br /> and view all the voting requests in <strong>
            Requests
          </strong>{' '}
          menu
        </span>
      </div>

      {/* donation Buttons */}

      <div className='flex flex-row justify-between mt-16 mb-12 '>
        <button
          onClick={() => {
            setSendDonationModal(true);
          }}
          className='flex justify-center px-4 py-2 mr-8 font-semibold transition-all rounded-lg shadow-lg h-fit w-fit-content bg-accentPurple active:scale-95'>
          Donate
        </button>
        <button
          onClick={() => {
            setViewDonationRequests(true);
          }}
          className='flex justify-center px-4 py-2 font-semibold transition-all border-2 rounded-lg shadow-lg h-fit w-fit-content border-accentPurple active:scale-95'>
          My Requests
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
