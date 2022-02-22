// Assets
import { ImCancelCircle } from 'react-icons/im';

const ViewDonationRequests = ({ closeModal, donationData }) => {
  const approveDonationHandler = address => {
    console.log(`Donation Approved for ${address}`);
  };

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex backdrop-blur-lg'>
      <div className='relative flex items-center justify-center w-full h-full'>
        {/* close modal button */}
        <button
          onClick={() => {
            closeModal(false);
          }}
          className='absolute p-4 text-4xl font-light text-white transition-all rounded-md bg-accentOrange top-10 right-10 active:scale-95 '>
          <ImCancelCircle />
        </button>

        {/* modal content *******************************************/}
        <div className='flex flex-col items-center h-[80%] w-3/4 px-12 py-8 overflow-y-scroll text-white border-2 rounded-lg bg-backgroundPrimary border-accentOrange'>
          <span className='mb-12 text-5xl font-bold'>Requested Donations</span>

          {/* requested donations list */}

          {donationData.map(item => {
            return (
              // list item
              <div className='flex flex-col w-full p-4 px-6 mt-4 mb-4 rounded-lg bg-backgroundSecondary'>
                <div className='flex w-full'>
                  {/* col 1 */}
                  <div className='flex w-[60%] flex-col  px-4 items-center justify-center'>
                    {/* address */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>{item.address}</span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Address
                      </span>
                    </div>
                    {/* description */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>{item.description}</span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Description
                      </span>
                    </div>
                  </div>
                  {/* col 2 */}
                  <div className='flex w-[40%] flex-col px-4 items-center justify-center'>
                    {/* amount */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>
                        {item.request_amount} Eth.
                      </span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Amount
                      </span>
                    </div>
                    {/* Approvals */}
                    <div className='relative flex items-center justify-between w-full px-6 py-2 mt-6 border-2 rounded-lg shadow-lg border-accentOrange bg-backgroundSecondary'>
                      <span className='text-lg'>
                        {item.total_approval_count} /
                        {item.current_approval_count}
                      </span>
                      <span className='absolute top-[-15px] left-15 text-md bg-backgroundPrimary px-4 rounded-md border-[1px] border-accentPurple'>
                        Approval Count
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => approveDonationHandler(item.address)}
                  className='flex items-center px-5 py-2 mt-4 mb-2 ml-4 text-xl font-semibold transition-all border-2 rounded-lg w-fit border-accentPurple hover:bg-accentPurple bg-backgroundPrimary active:scale-95'>
                  Approve
                </button>
              </div>
            );
          })}
        </div>
        {/* ******************************************************** */}
      </div>
    </div>
  );
};

export default ViewDonationRequests;
