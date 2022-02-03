import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { format } from 'date-fns';
import { SearchResult } from '../store'
import InfoCard from '../components/InfoCard';

interface SearchProps {
    searchResults: [
        SearchResult
    ];
}

const Search = ({searchResults}: SearchProps) => {
    const router = useRouter();
    
    const { location, startDate, endDate, numberOfGuests } = router.query;
    
    const formattedStartDate = format(startDate ? new Date(startDate.toString()) : new Date(), "dd MMMM yy");
    const formattedEndDate = format(endDate ? new Date(endDate.toString()) : new Date(), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`


    return (
        <div>
            <Header placeholder={`${location || 'New York'} | ${range} | ${numberOfGuests || '1'}`} />

            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>300+ stays - {range} - {numberOfGuests || '1'} guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6 '>Stays in {location || 'New York'}</h1>

                    <div className='hidden sm:inline-flex select-none mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='filter-button'>Cancellation Flexability</p>
                        <p className='filter-button'>Type of Place</p>
                        <p className='filter-button'>Price</p>
                        <p className='filter-button'>Rooms and Beds</p>
                        <p className='filter-button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults?.map((item) => (
                            <InfoCard 
                                key={item.title}
                                img={item.img}
                                location={item.location}
                                title={item.title}
                                description={item.description}
                                star={item.star}
                                price={item.price}
                                total={item.total}
                                long={item.long}
                                lat={item.lat}
                            />
                        ))}
                    </div>

                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export async function getServerSideProps() {
    const searchResults: SearchProps = await fetch('https://links.papareact.com/isz').
    then(res => res.json());

    return {
        props: {
            searchResults: searchResults
        }
    }
}

export default Search;
