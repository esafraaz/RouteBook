import { useContext, useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import { AuthContext } from '../../contexts/AuthProvider';

const OtherBooks = () => {
    const {books} = useContext(AuthContext)

    return (
        <div className='mt-24 container mx-auto'>
            <div className='text-6xl font-bold text-green-50 text-center'>
                Other Books
            </div>
            <BookCards books={books} />

           
        </div>
    )
}

export default OtherBooks