import { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import commonImg from "../../assets/banner-books/book5.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

// react icons
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

// eslint-disable-next-line react/prop-types
const BookCards = ({ headline, books }) => {
	const { cartVal, setCartVal } = useContext(AuthContext);
	const [ids, setIds] = useState([])
	// Event handler for the button click
	const handleAddToCart = (book, _id) => {
		// Increment the count
		for(const id of ids){
			if(id === _id){
				alert("not added")
				return;
			}
		}
        setCartVal(cartVal+1)
		// Get the existing array from local storage or default to an empty array
		const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
		const existingCartId = JSON.parse(localStorage.getItem("Id")) || [];
        console.log(existingCart , existingCartId)
		setIds(existingCartId)

		// Update the local storage with the new or updated count for the specific book ID
		// Add a new book to the cart
        existingCart.push( book );
        existingCartId.push( _id );

		// Save the updated array back to local storage
		localStorage.setItem("cart", JSON.stringify(existingCart));
		localStorage.setItem("Id", JSON.stringify(existingCartId));

		// Update the state to re-render the component with the new count
	};
	useEffect(()=>{
		const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
		const existingCartId = JSON.parse(localStorage.getItem("Id")) || [];
        console.log(existingCart , existingCartId)
		setIds(existingCartId)
	},[])

	return (
		<div className="my-16 px-4 lg:px-24">
			<h2 className="text-5xl my-5 font-bold text-center">{headline}</h2>

			{/* cards */}
			<div className="mt-20">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
					modules={[Pagination]}
					className=" w-full h-full"
				>
					{
						// eslint-disable-next-line react/prop-types
						books.map((book) => (
							<SwiperSlide
								className="text-center flex items-center justify-center "
								key={book._id}
							>
								<div className="bg-green-100  rounded-lg relative">
									<img
										src={book?.imageURL || commonImg}
										alt=""
										className="w-full h-[420px]"
									/>
									<div className="absolute top-3 right-3 bg-green-700 hover:bg-black p-2 rounded ">
										<FaCartShopping
											onClick={() => {  handleAddToCart(book, book._id); }}
											className="w-4 h-4 text-green-50"
										/>
									</div>
								</div>
								<Link to={`/book/${book._id}`} className="cursor-pointer">
									<div className="mt-5 mb-8 text-left space-y-2 flex justify-between items-start">
										<div>
											<h3 className="text-green-50 font-semibold">
												{book.bookTitle}
											</h3>
											<p className="text-green-200">{book.authorName}</p>
										</div>
										<div>
											<p className="font-bold text-green-100">{book.price}</p>
										</div>
									</div>
								</Link>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>
		</div>
	);
};

export default BookCards;
