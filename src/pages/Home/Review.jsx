/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// react icons
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import profile from "../../assets/profile.jpg"
import ReviewCard from '../shared/ReviewCard';

const Review = () => {
    return (
        <div className='mt-12 px-4 lg:px-24'>
            <h2 className='text-6xl text-green-50 font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            {/* reviews card */}
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl bg-gradient-to-t from-green-300  py-8 px-4 md:m-5 rounded-lg border'>
                    <div className='space-y-6'>
                        <div className='text-amber-500 flex gap-2'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        {/* texts */}
                        <div className='mt-7'>
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
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-gradient-to-t from-green-300 py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-gradient-to-t from-green-300  py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-gradient-to-t from-green-300 py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='shadow-2xl bg-gradient-to-t from-green-300  py-8 px-4 md:m-5 rounded-lg border'>
                    <ReviewCard />
                </SwiperSlide>
            </Swiper>

            <div className='h-20'></div>
        </div>
    )
}

export default Review