import React from 'react';

const CustomCampaignModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
      <div className='w-1/3 bg-[#040C5E] flex flex-col p-12 rounded-lg'>
        <p className='my-4 text-center text-xl font-semibold text-white'>
          Custom Campaign
        </p>
        <p className='text-white text-center w-2/3 mx-auto'>
          Your request has been sent successfully
        </p>
        <img
          src='/rocket.png'
          className='mx-auto my-6'
          width='140px'
          alt='Success'
        />
        <button
          onClick={onClose}
          className='text-xs px-3 py-4 text-white bg-button-color w-10/12 mx-auto mb-4 rounded-md'
        >
          Launch Another Campaign
        </button>
        <button
          onClick={onClose}
          className='text-xs px-3 py-4 text-white bg-button-color w-10/12 mx-auto rounded-md'
        >
          Check My Campaign
        </button>
      </div>
    </div>
  );
};

export default CustomCampaignModal;
