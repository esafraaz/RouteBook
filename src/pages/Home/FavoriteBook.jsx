/* eslint-disable react/no-unescaped-entities */
import favBook from '../../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 container mx-auto p-5'>
        <div className='md:w-1/2'>
            <img src={favBook} alt="" className='rounded md:w-10/12 h-[700px]' />
        </div>
        <div className='space-y-6 md:w-1/2'>
            <h2 className='text-5xl text-green-50 my-5 font-bold md:w-3/4 leading-snug'>Find Your Favorite <span className='text-red-300'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6 text-green-50'>Discover a world of captivating stories and knowledge. Whether you're a avid reader or just starting your literary journey, find your next favorite book with us. Our carefully curated collection ensures there's something for everyone. Immerse yourself in the joy of reading!</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
              <div>
                <h3 className='text-4xl font-bold text-green-50'>800+</h3>
                <p className='text-red-300 '>Book Listing</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-green-50'>550+</h3>
                <p className='text-red-300'>Regsiter User</p>
              </div>
              <div>
                <h3 className='text-4xl font-bold text-green-50'>1200+</h3>
                <p className='text-red-300'>Pdf Downloaded</p>
              </div>
            </div>
            <Link to="/shop" className='block mt-8'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 '>Explore Now</button></Link>
        </div>
    </div>
  )
}

export default FavoriteBook