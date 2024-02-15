import  { useContext } from 'react'
import BookCards from '../shared/BookCards';
import { AuthContext } from '../../contexts/AuthProvider';

const BestSeller = () => {
    const {books} = useContext(AuthContext)
    return (
        <div className='container mx-auto'>
            <div className='text-white mx-auto text-center font-extrabold text-6xl '>Best Seller Books</div>
            <BookCards books={books}  />
        </div>
    )
}

export default BestSeller