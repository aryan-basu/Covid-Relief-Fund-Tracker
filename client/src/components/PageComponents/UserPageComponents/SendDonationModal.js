import { useRef } from 'react';

// Assets
import { ImCancelCircle } from 'react-icons/im';
import DonationImg from './../../../assets/Donation.svg';

const SendDonationModal = ({ closeModal }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const amountInputRef = useRef(null);

  const formSubmitHandler = event => {
    event.preventDefault();

    // do something

    console.log(
      nameInputRef.current.value,
      amountInputRef.current.value,
      emailInputRef.current.value
    );

    // clearing input fields
    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
    amountInputRef.current.value = '';
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
        <div className='flex w-3/4 px-12 py-6 text-white border-2 rounded-lg bg-backgroundPrimary border-accentOrange'>
          <div className='flex flex-col w-1/2 h-full'>
            {/* headings */}
            <span className='mt-8 mb-2 text-5xl font-bold'> Red Cross</span>
            <span className='mb-8 text-3xl '>Covid Relief</span>

            {/* form */}
            <form onSubmit={event => formSubmitHandler(event)}>
              {/* name ********************************************/}
              <div className='relative flex flex-col py-4'>
                <label
                  htmlFor='name'
                  className='absolute top-0 px-4 text-lg font-semibold border-2 rounded-lg border-accentPurple bg-backgroundPrimary left-10'>
                  Name
                </label>
                <input
                  ref={nameInputRef}
                  type='text'
                  className='w-full px-4 py-4 text-lg border-2 rounded-lg outline-none border-accentOrange bg-backgroundSecondary'
                />
              </div>

              {/* amount ******************************************/}
              <div className='relative flex flex-col py-4'>
                <label
                  htmlFor='amount'
                  className='absolute top-0 px-4 text-lg font-semibold border-2 rounded-lg border-accentPurple bg-backgroundPrimary left-10'>
                  Amount
                </label>
                <input
                  ref={amountInputRef}
                  type='text'
                  className='w-full px-4 py-4 text-lg border-2 rounded-lg outline-none border-accentOrange bg-backgroundSecondary'
                />
              </div>

              {/* email **********************************************/}
              <div className='relative flex flex-col py-4'>
                <label
                  htmlFor='name'
                  className='absolute top-0 px-4 text-lg font-semibold border-2 rounded-lg border-accentPurple bg-backgroundPrimary left-10'>
                  E-Mail
                </label>
                <input
                  ref={emailInputRef}
                  type='email'
                  className='w-full px-4 py-4 text-lg border-2 rounded-lg outline-none border-accentOrange bg-backgroundSecondary'
                />
              </div>
              {/* Submit Button ******************************************* */}
              <button
                type='submit'
                className='px-6 py-3 my-8 font-semibold transition-all rounded-lg bg-accentPurple active:scale-95'>
                Proceed To Payment
              </button>
            </form>
          </div>
          {/* page decoration image */}
          <div className='flex items-center justify-center w-1/2 h-full p-12'>
            <img src={DonationImg} alt='' />
          </div>
        </div>
        {/* ******************************************************** */}
      </div>
    </div>
  );
};

export default SendDonationModal;
