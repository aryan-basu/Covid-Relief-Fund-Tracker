import { useState } from 'react';

// Page Components
import ProfileCard from '../components/PageComponents/UserPageComponents/ProfileCard';
import AddressBar from './../components/PageComponents/UserPageComponents/AddressBar';
import DonarList from '../components/PageComponents/UserPageComponents/DonarList';
import TotalAmountCard from '../components/PageComponents/UserPageComponents/TotalAmountCard';

// Request and Send Modals
import SendDonationModal from '../components/UIComponents/SendDonationModal';
import ViewDonationRequests from '../components/PageComponents/UserPageComponents/ViewDonationRequests';

const UserDashboard = () => {
  //* Modal Open/Close States *******************************************************
  // prettier-ignore
  const [isSendDonationModalOpen, setIsSendDonationModalOpen] = useState(false);
  const [isViewDonationRequestsModalOpen, setIsViewDonationRequestModalOpen] =
    useState(false);

  //* ********************************************************************************


  return (
    <>
      {/* Modals ***********************************************/}

      {/* send donation */}
      {isSendDonationModalOpen && (
        <SendDonationModal closeModal={setIsSendDonationModalOpen} />
      )}
      {/* Donation Requests for User List */}
      {isViewDonationRequestsModalOpen && (
        <ViewDonationRequests
          //! This data is Dummy !!!!!!!!!!!!!!!!!!!!!
          closeModal={setIsViewDonationRequestModalOpen}
        />
      )}

      {/* ****************************************************** */}
      {/* HomePage */}
      <div className='flex flex-1 mt-16 text-white '>
        {/** 1st column,  user/admin profile card */}
        <ProfileCard
          setSendDonationModal={setIsSendDonationModalOpen}
          setViewDonationRequests={setIsViewDonationRequestModalOpen}
        />
        {/*2nd column, address, total donation and donor list  */}
        <div className='flex flex-col items-center w-3/4 px-12 '>
          {/* wallet address bar */}
          <AddressBar />
          {/* stats */}
          <div className='flex justify-between flex-1 w-full pt-6'>
            {/* total donations card */}
            <TotalAmountCard />
            {/* donar list card */}
            <DonarList />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
