import { SearchIcon } from '@heroicons/react/solid';
import React, { Dispatch, SetStateAction } from 'react';

interface SearchProps {
    searchInput: string;
    updateSearch(data: string): void;
}

const Search = ({searchInput, updateSearch}: SearchProps) => (
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input 
            type='text'
            value={searchInput}
            onChange={(e) => updateSearch(e.target.value)}
            placeholder='Start your Search'
            className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
    </div>
);

export default Search;
