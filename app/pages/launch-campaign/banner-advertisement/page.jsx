'use client';

import LaunchCampaignLayout from '@components/pagesLayout/launchCampaignLay';
import { useState } from 'react';
import { RiUpload2Fill } from 'react-icons/ri';

const PressRelease = () => {
  const [bannerAd, setBannerAd] = useState({
    launchCountry: '',
    launchWebsite: '',
    launchDuration: '',
  });

  const handleChange = (e) => {
    e.target.value;
  };
  return (
    <LaunchCampaignLayout pageTitle='Banner Advertisement'>
      <div>
        <form className='w-9/12 flex flex-col gap-y-5 m-auto'>
          <div className='flex justify-between w-full items-center'>
            <label className='text-[#040C5E] font-semibold'>
              Where do you want to launch
            </label>
            <select
              id='launchCountry'
              value={bannerAd.launchCountry}
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
          <div className='flex justify-between w-full items-center'>
            <label className='text-[#040C5E] font-semibold'>
              Select Website
            </label>
            <select
              id='launchWebsite'
              value={bannerAd.launchWebsite}
              onChange={handleChange}
              name='launchWebsite'
              className='bg-white items-center gap-3 w-3/5 p-2 rounded-lg text-gray-300'
            >
              <option value=''>
                Select Website or Blogs to launch campaign
              </option>
              <option value='netnaija.com'>Netnaija.com</option>
              <option value='nairaland.com'>Nairaland.com</option>
              <option value='davelink.com'>Davelink.com</option>
              <option value='lindaikeji.com'>Lindaikeji.com</option>
              <option value='thorben.com'>Thorben.com</option>
              <option value='foxtriangle.com'>Foxtriangle.com</option>
            </select>
          </div>
          <p className='text-[#040C5E] font-semibold'>Available Banner size</p>
          <div className='flex flex-row gap-x-10'></div>
          <div className='flex flex-row w-5/6 justify-between mt-10'>
            <div className='flex flex-col w-1/2'>
              <p className='text-[#040C5E] font-semibold'>
                Duration of campaign
              </p>
              <select
                id='launchDuration'
                value={bannerAd.launchDuration}
                name='launchDuration'
                onChange={handleChange}
                className='bg-transparent p-2 my-3 w-4/5 border-solid border-[#040C5E] border-2 text-gray-400'
              >
                <option value=''>select duration</option>
                <option value='1week'>1 Week</option>
                <option value='1month'>1 Month</option>
                <option value='3months'>3 Months</option>
                <option value='6months'>6 Months</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <p className='text-[#040C5E] font-semibold'>Your Banner Media</p>
              <div className='flex items-center'>
                <input
                  type='file'
                  placeholder='Choose file'
                  id='launchContent'
                  name='launchContent'
                  className='block text-[#040C5E] bg-transparent p-1 my-3 w-4/5 border-dashed border-[#040C5E] border-2 file:mr-4 file:px-6  file:text-md file:font-bold file:border-0 file:bg-transparent file:text-[#040C5E] hover:file:cursor-pointer'
                />
                <button className='bg-[#040C5E] h-10 w-14'>
                  <RiUpload2Fill className=' text-white m-auto' />
                </button>
              </div>
              <p className='text-[#040C5E] font-thin text-xs'>
                (JPEG, PNG, based on banner size only, max size 108)
              </p>
            </div>
          </div>
          <button type='submit'>Add to cart</button>
        </form>
      </div>
    </LaunchCampaignLayout>
  );
};

export default PressRelease;
