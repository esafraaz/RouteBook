import { useContext, useEffect, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { AuthContext } from "../../contexts/AuthProvider";

const Cart = () => {
	const { setCartVal } = useContext(AuthContext);
	const [data, setData] = useState([]);
	const [storedId, setIds] = useState([]);
	console.log(storedId);
	useEffect(() => {
		const storedData = localStorage.getItem("cart");
		const existingCartId = JSON.parse(localStorage.getItem("Id")) || [];
		setIds(existingCartId);
		// Parse the JSON data if it exists
		const parsedData = storedData ? JSON.parse(storedData) : [];
		setData(parsedData);
	}, []);
	const handleDelete = (ids) => {
		console.log(ids);
		const newData = data.filter((item) => item._id !== ids);
		setData(newData);
		localStorage.removeItem("cart");
		localStorage.setItem("cart", JSON.stringify(newData));

		const newIds = storedId.filter((item) => item._id !== ids);
		setIds(newIds);
		localStorage.removeItem("Id");
		localStorage.setItem("Id", JSON.stringify(newData));
	};
	setCartVal(data.length);
	const totalPrice = data.reduce((sum, obj) => sum + obj.price, 0);

	return (
		<div className="mt-10 pt-6 ">
			<h1 className="text-green-50 font-bold text-center text-6xl">
				Your Cart
			</h1>
			<div className="container mx-auto my-10">
				<h2 className="text-center text-green-50">
					You have total {data.length} item in the Cart:
				</h2>
				<div className="mx-auto align-middle items-center flex justify-center w-full">
					{data.length > 0 ? (
						<>
							<div className="">
								<table className="md:w-[900px] text-green-50 p-2">
									<tr className="text-center my-7 border-emerald-100 ">
										<th className="p-1 lg:p-5">Title</th>
										<th className="p-1 lg:p-5">Category</th>
										<th className="p-1 lg:p-5">Author</th>
										<th className="p-1 lg:p-5">price</th>
										<th className="p-1 lg:p-5">Delete</th>
									</tr>
									{data.map((book) => (
										// eslint-disable-next-line react/jsx-key
										<tr className="text-center ">
											<td className="py-2 ">{book.bookTitle}</td>
											<td className="py-2 ">{book.category}</td>
											<td className="py-2 ">{book.authorName}</td>
											<td className="py-2 ">{book.price}</td>
											<td >
												<button
													onClick={() => handleDelete(book._id)}
													className="hover:text-red-500 text-red-700"
												>
													{" "}
													<FaDeleteLeft></FaDeleteLeft>{" "}
												</button>
											</td>
										</tr>
									))}
								</table>
							</div>
						</>
					) : (
						" "
					)}
				</div>
				{data.length > 0 ? (
					<div className="flex flex-col md:flex-row gap-4 lg:gap-10 mt-10 container items-center justify-center ">
						<div className="text-green-100">
							<h1 className="text-xl">
								Total Amount:{" "}
								<span className="text-red-300 text-4xl">${totalPrice}</span>
							</h1>
						</div>
						<div>
							<button className="bg-red-300  rounded-lg px-6 py-2 text-black font-medium hover:bg-red-100 transition-all ease-in duration-200">
								Shop Now
							</button>
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Cart;
