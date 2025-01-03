'use client';

import PagesLayout from '@components/pagesLayout/pagesLayout';
import React, { useState, useEffect } from 'react';

const MyCampaign = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    'Press Releases and Sponsored Articles'
  );
  const [tableData, setTableData] = useState([]);
  const [categories, setCategories] = useState([
    'Press Releases and Sponsored Articles',
    'Influencer Marketing',
    'Social Media Marketing',
    // Add more categories here
  ]);

  useEffect(() => {
    // Fetch data based on the selected category
    const data = fetchDataForCategory(selectedCategory);
    setTableData(data);
  }, [selectedCategory]);

  const fetchDataForCategory = (category) => {
    // Fetch data from an API or from a local data source
    // and return the appropriate data for the selected category
    switch (category) {
      case 'Press Releases and Sponsored Articles':
        return [
          {
            dateLaunched: '3rd May, 2022',
            website: 'www.nairaland.com',
            duration: '1 Month',
            status: 'Active',
          },
          // More data for this category
        ];
      case 'Influencer Marketing':
        return [
          {
            dateLaunched: '3rd May, 2022',
            socialMedia: 'Instagram',
            influencer: 'Shola Adeboye',
            duration: '1 Month',
            status: 'Active',
          },
          // More data for this category
        ];
      // Add more cases for other categories
      default:
        return [];
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <PagesLayout>
      <div className=' mt-10 mb-10 bg-[#DCDFED] p-3'>
        <h2 className='  text-2xl text-[#040C5E]  font-bold pl-12'>
          My Campaigns
        </h2>
      </div>
      <div className='px-14'>
        {/* <div className='bg-[#040C5E] text-white text-lg font-semibold py-5 px-7'>
          <button
            onClick={() =>
              handleCategoryChange('Press Releases and Sponsored Articles')
            }
          >
            Press Releases and Sponsored Articles
          </button>
          <button
            onClick={() =>
              handleCategoryChange('Press Releases and Sponsored Articles')
            }
          >
            Influencer Marketing
          </button>
          <button
            onClick={() =>
              handleCategoryChange('Press Releases and Sponsored Articles')
            }
          >
            Social Media Marketing
          </button>
          <button
            onClick={() =>
              handleCategoryChange('Press Releases and Sponsored Articles')
            }
          >
            Banner Advertisement
          </button>
          <button
            onClick={() =>
              handleCategoryChange('Press Releases and Sponsored Articles')
            }
          >
            Offline Promotion
          </button>
        </div> */}
        <div className='bg-[#040C5E] text-white text-lg font-semibold py-5 px-7'>
          <button
            type='button'
            className='inline-flex justify-center w-full '
            id='menu-button'
            aria-expanded='true'
            aria-haspopup='true'
          >
            {selectedCategory}
            <svg
              className='-mr-1 ml-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div
          className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex='-1'
        ></div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Date Launched</th>
                <th>Website</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.dateLaunched}</td>
                  <td>{row.website || row.socialMedia}</td>
                  <td>{row.duration}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PagesLayout>
  );
};

export default MyCampaign;
