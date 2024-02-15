/* eslint-disable react/no-unescaped-entities */

// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"

const ReviewCard = () => {
    return (
        <div className='space-y-6 '>
            <div className='text-amber-500 flex gap-2'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>

            {/* texts */}
            <div className='mt-7 '>
                <p className='mb-5 text-green-50'>"To Kill a Mockingbird" has received critical acclaim for its compelling narrative and thought-provoking themes. It continues to be widely studied in schools and cherished by readers for its timeless relevance.</p>
                <Avatar
                    alt="avatar of Jese"
                    img={profile}
                    rounded
                    className='w-10 mb-4'
                />
                <h5 className='text-lg font-medium'>Mark Ping</h5>
                <p className='text-sm'> CEO, ABC Company</p>
            </div>
        </div>
    )
}

export default ReviewCard