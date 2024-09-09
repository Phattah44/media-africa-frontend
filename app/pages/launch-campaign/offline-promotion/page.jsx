'use client';

import LaunchCampaignLayout from '@components/pagesLayout/launchCampaignLay';
import { useState } from 'react';

const PressRelease = () => {
  const [offlineAd, setOfflineAd] = useState({
    launchCountry: '',
    launchTime: '',
    launchDuration: '',
    banner: '',
  });

  const handleChange = (e) => {
    e.target.value;
  };
  return (
    <LaunchCampaignLayout pageTitle='Offline Promotion'>
      <div>
        <form className='w-9/12 flex flex-col gap-y-5 m-auto'>
          <div className='flex justify-between w-full items-center'>
            <label className='text-[#040C5E] font-semibold'>
              Where do you want to launch
            </label>
            <select
              id='launchCountry'
              value={offlineAd.launchCountry}
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

          <p className='text-[#040C5E] font-semibold'>
            Contact Form <br />
            <span className='text-[#040C5E] text-xs'>
              Fill the contact form below to launch this campaign{' '}
            </span>
          </p>
          <div className='bg-white rounded-lg w-4/6 p-10'>
            <div className='w-full'>
              <p className='text-[#040C5E] font-semibold'>
                When do you want to launch
              </p>
              <select
                id='launchDuration'
                value={offlineAd.launchTime}
                name='launchDuration'
                onChange={handleChange}
                className='bg-transparent p-2 my-3 w-full border-solid border-[#040C5E] border-2 text-gray-400'
              >
                <option value=''>DD/MM/YYYY</option>
                <option value='1week'>1 Week</option>
                <option value='1month'>1 Month</option>
                <option value='3months'>3 Months</option>
                <option value='6months'>6 Months</option>
              </select>
            </div>
            <div className='w-full'>
              <p className='text-[#040C5E] font-semibold'>
                Duration of campaign
              </p>
              <select
                id='launchDuration'
                value={offlineAd.launchDuration}
                name='launchDuration'
                onChange={handleChange}
                className='bg-transparent p-2 my-3 w-full border-solid border-[#040C5E] border-2 text-gray-400'
              >
                <option value=''>select duration</option>
                <option value='1week'>1 Week</option>
                <option value='1month'>1 Month</option>
                <option value='3months'>3 Months</option>
                <option value='6months'>6 Months</option>
              </select>
            </div>
            <div className='w-full'>
              <p className='text-[#040C5E] font-semibold'>
                Banner Cartegory and size
              </p>
              <select
                id='launchDuration'
                value={offlineAd.launchDuration}
                name='launchDuration'
                onChange={handleChange}
                className='bg-transparent p-2 my-3 w-full border-solid border-[#040C5E] border-2 text-gray-400'
              >
                <option value=''>Banner cartegory</option>
                <option value='1week'>Large Billboard (14ft * 48ft)</option>
                <option value='1month'>Medium Billboard (12ft * 24ft)</option>
                <option value='3months'>Poster (A1)</option>
                <option value='6months'>Poster (A2)</option>
                <option value='6months'>Poster (A4)</option>
                <option value='6months'>Poster (A5)</option>
              </select>
            </div>
          </div>
          <button type='submit'>Add to cart</button>
        </form>
      </div>
    </LaunchCampaignLayout>
  );
};

export default PressRelease;
