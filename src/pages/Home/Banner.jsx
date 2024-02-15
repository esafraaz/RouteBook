/* eslint-disable react/no-unescaped-entities */
import BannerCard from '../shared/BannerCard'

export const Banner = () => {
    return (
        <div className=' bg-transparent  px-4 lg:px-24 flex items-center container mx-auto'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-white mb-5 lg:leading-tight leading-snug'>Buy and sell your books <span className='text-red-300'>for the best prices</span></h1>
                    <p className='text-green-50'>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Good reads.</p>
                    <div>
                        <input type="search" placeholder='Search a book here' className='py-2 px-2 rounded-s-sm bg-inherit text-red-300' />
                        <button className='bg-red-300  px-6 py-2 text-black font-medium hover:bg-black hover:text-white transition-all ease-in duration-200'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
