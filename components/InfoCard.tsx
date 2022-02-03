import Image from 'next/image';
import { SearchResult } from '../store';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const InfoCard = (props: SearchResult) => (
    <div className='info-card'>

        {/* Image */}
        <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
            <Image
                src={props.img}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
            />
        </div>

        {/* Text */}
        <div className='flex flex-col flex-grow px-4'>

            {/* Location and Likes */}
            <div className='flex justify-between'>
                <p className='text-gray-400'>{props.location}</p>
                <HeartIcon className='h-7 cursor-pointer' />
            </div>
            
            {/* Title */}
            <h4 className='text-xl'>{props.title}</h4>

            {/* Divider */}
            <div className='border-b w-10 pt-2'/>

            {/* Description */}
            <p className='pt-2 text-sm text-gray-500 flex-grow'>{props.description}</p>

            {/* Ratings and Price */}
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-400'/>
                    {props.star}
                </p>

                <div>
                    <p className='text-lg lg:text-2xl font-semibold pb-2'>{props.price}</p>
                    <p className='text-right font-extralight'>{props.total}</p>
                </div>
            </div>
        </div>
    </div>
);

export default InfoCard;
