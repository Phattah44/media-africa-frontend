'use client';

import PagesLayout from '@components/pagesLayout/pagesLayout';
import React, { useState } from 'react';
import CustomCampaignModal from '@components/customCampaignModal/page';

const CustomCampaign = () => {
  const [CustomCampaign, setCustomCampaign] = useState({
    launchCountry: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    e.target.value;
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <PagesLayout>
        <div className=' mt-10 mb-10 bg-[#DCDFED] p-3'>
          <h2 className='  text-2xl text-[#040C5E]  font-bold pl-12'>
            Custom Campaign
          </h2>
        </div>
        <div className='flex justify-between w-full items-center px-14'>
          <label className='text-[#040C5E] font-semibold'>
            Where do you want to launch
          </label>
          <select
            id='launchCountry'
            value={CustomCampaign.launchCountry}
            onChange={handleChange}
            name='launchCountry'
            className='bg-white items-center gap-3 w-3/5 p-2 rounded-lg text-gray-300'
          >
            <option value=''>Choose Location to launch camapign</option>
            <option value='angola'>Angola</option>
            <option value='cameroon'>Cameroon</option>
            <option value='egypt'>Egypt</option>
            <option value='ethopia'>Ethopia</option>
            <option value='ghana'>Ghana</option>
            <option value='gabon'>Gabon</option>
            <option value='nigeria'>Nigeria</option>
            <option value='south africa'>South Africa</option>
          </select>
        </div>
        <div className='p-14 w-2/3'>
          <div className='bg-[#040C5E] px-8 py-3 rounded-t-lg'>
            <p className='text-white font-semibold'>Contact Form</p>
            <p className='text-white text-xs '>
              Fill the contact form below to launch your custom campaign
            </p>
          </div>
          <div className='bg-white p-10 w-full'>
            <div className='flex w-full gap-5'>
              <div className='w-[50%]'>
                <p className='text-[#040C5E] font-semibold'>First Name</p>
                <input
                  type='text'
                  className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
                />
              </div>
              <div className='w-[50%]'>
                <p className='text-[#040C5E] font-semibold'>Last Name</p>
                <input
                  type='text'
                  className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
                />
              </div>
            </div>
            <div className='flex w-full gap-5'>
              <div className='w-[50%]'>
                <p className='text-[#040C5E] font-semibold'>Email</p>
                <input
                  type='email'
                  className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
                />
              </div>
              <div className='w-[50%]'>
                <p className='text-[#040C5E] font-semibold'>Company name</p>
                <input
                  type='text'
                  className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
                />
              </div>
            </div>
            <div className='w-full'>
              <p className='text-[#040C5E] font-semibold'>Brief</p>
              <textarea
                name='brief'
                id=''
                className='block text-[#040C5E] bg-transparent p-1 my-3  border-solid border-[#040C5E] border-2 w-full'
              ></textarea>
            </div>
            <button onClick={handleOpenModal}>Send Message</button>
          </div>
        </div>
      </PagesLayout>
      <CustomCampaignModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default CustomCampaign;
