import React, { useState } from 'react';
import Image from 'next/image'
import Search from './Search';
import { GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,    
} from '@heroicons/react/solid';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const updateSearch = (data: string): void => {
        setSearchInput(data);
    }

    const handleSelect = (ranges: RangeKeyDict) => {
        setStartDate(ranges.selection.startDate ? ranges.selection.startDate : new Date());
        setEndDate(ranges.selection.endDate ? ranges.selection.endDate : new Date());
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* Left - Logo*/}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image 
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* Middle - Search Bar*/}
            <Search 
                searchInput={searchInput}
                updateSearch={updateSearch}
            />

            {/* Right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer' >
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6' />
                </div>
            </div>

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                </div>
            )}
        </header>
    );
};

export default Header;
