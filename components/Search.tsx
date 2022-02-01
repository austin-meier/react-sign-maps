import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';

function Search() {
  return (
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='Start your Search' />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>
  );
}

export default Search;
