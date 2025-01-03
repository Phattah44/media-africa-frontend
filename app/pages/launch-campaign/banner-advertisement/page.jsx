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
  const handleSelect = () => {};

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
          <div className='flex flex-row gap-x-10'>
            {/* Banner Goes here */}
            <div className='w-full flex justify-between'>
              <div className='w-7/12'>
                <div className='bg-[#040C5E] p-7 rounded-t-2xl'>
                  <h2 className='text-white text-xl font-semibold text-center'>
                    www.nairaland.com
                  </h2>
                </div>
                <div className='flex justify-between p-5 bg-white text-[#040C5E] rounded-b-xl'>
                  <div className='w-full border-r-2 border-r-[#DCDFED]'>
                    <h2 className='bg-[#DCDFED] font-semibold px-5 py-2 rounded-l-xl'>
                      Banner Type
                    </h2>
                    <p className='text-sm pt-4 pb-2 px-5'>Leaderboard</p>
                    <p className='text-sm py-2 px-5'>Large Rectangle</p>
                    <p className='text-sm py-2 px-5'>Medium Rectangle</p>
                    <p className='text-sm py-2 px-5'>Wide Skyscraper</p>
                    <p className='text-sm py-2 px-5'>Skyscraper</p>
                  </div>
                  <div className='w-full '>
                    <h2 className='bg-[#DCDFED] font-semibold px-7 py-2 rounded-r-xl'>
                      Banner Size
                    </h2>
                    <div>
                      <p className='text-sm pt-4 pb-2 px-7'>728 x 90 px</p>
                    </div>
                    <div>
                      <p className='text-sm py-2 px-7'>336 x 280 px</p>
                    </div>
                    <div>
                      <p className='text-sm py-2 px-7'>300 x 250 px</p>
                    </div>
                    <div>
                      <p className='text-sm py-2 px-7'>160 x 600 px</p>
                    </div>
                    <div>
                      <p className='text-sm py-2 px-7'>160 x 600 px</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#040C5E] w-4/12 rounded-2xl'>
                <h2 className='text-white mt-3 p-3 text-lg'>
                  Leaderboard Sample
                </h2>
                
              </div>
            </div>
          </div>
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
