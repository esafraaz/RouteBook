/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { AuthContext } from "../../contexts/AuthProvider";
import { SwiperSlide } from "swiper/react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import commonImg from "../../assets/banner-books/book5.jpg";

export default function Shop() {
	const { loading, books, cartVal, setCartVal } = useContext(AuthContext);
	const [loadBooks, setLoadBook] = useState([]);
	const [ids, setIds] = useState([]);

	console.log(loadBooks);
	useEffect(() => {
		const existingCartId = JSON.parse(localStorage.getItem("Id")) || [];
		console.log(existingCartId);
		setIds(existingCartId);
		setLoadBook(books.slice(0, 8));
	}, [books]);

	// Event handler for the button click
	const handleAddToCart = (book, _id) => {
		// Increment the count
		for (const id of ids) {
			if (id === _id) {
				
				return;
			}
		}
		setCartVal(cartVal + 1);
		// Get the existing array from local storage or default to an empty array
		const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
		const existingCartId = JSON.parse(localStorage.getItem("Id")) || [];
		console.log(existingCart, existingCartId);
		setIds(existingCartId);

		// Update the local storage with the new or updated count for the specific book ID
		// Add a new book to the cart
		existingCart.push(book);
		existingCartId.push(_id);

		// Save the updated array back to local storage
		localStorage.setItem("cart", JSON.stringify(existingCart));
		localStorage.setItem("Id", JSON.stringify(existingCartId));

		// Update the state to re-render the component with the new count
	};

	// loader
	if (loading) {
		return (
			<div className="text-center mt-28">
				<Spinner aria-label="Center-aligned spinner example" />
			</div>
		);
	}

	return (
		<div className="mx-28 pt-16 lg:px-24">
			<div></div>
			<h2 className="text-3xl font-bold text-center mb-16 z-40 text-green-50">
				All Books are Available Here
			</h2>
			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{loadBooks.map((loadBook) => (
					<SwiperSlide
						className="text-center flex items-center justify-center "
						key={loadBook._id}
					>
						<div className="bg-green-100  rounded-lg relative">
							<img
								src={loadBook?.imageURL || commonImg}
								alt=""
								className="w-full h-[420px]"
							/>
							<div
								onClick={() => {
									handleAddToCart(loadBook, loadBook._id);
								}}
								className="absolute top-3 right-3 bg-green-700 hover:bg-black p-2 rounded "
							>
								<FaCartShopping className={`w-4 h-4 text-green-50`} />
							</div>
						</div>
						<Link to={`/book/${loadBook._id}`} className="cursor-pointer">
							<div className="mt-5 mb-8 text-left space-y-2 flex justify-between items-start">
								<div>
									<h3 className="text-green-50 font-semibold">
										{loadBook.bookTitle}
									</h3>
									<p className="text-green-200">{loadBook.authorName}</p>
								</div>
								<div>
									<p className="font-bold text-green-100">{loadBook.price}</p>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</div>
			<div
				className="font-bold text-green-50 hover:text-green-200 ease-in-out duration-300 py-7"
				onClick={() => setLoadBook(books)}
			>
				{" "}
				Load More....
			</div>
		</div>
	);
}
