import { useContext, useEffect, useState } from "react";
// import icons from react icons
// eslint-disable-next-line no-unused-vars
import {
	FaXmark,
	FaBarsStaggered,
	FaCartPlus,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import logo from "../../assets/logo.png";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const { cartVal, setCartVal, user, logOut } = useContext(AuthContext);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const storedData = localStorage.getItem("cart");

	// Parse the JSON data if it exists
	const parsedData = storedData ? JSON.parse(storedData) : [];
	setCartVal(parsedData.length);

	const hangleSignOut = () => {
		// console.log("sign out");
		logOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
			});
	};
	const navItems = [
		{ link: "Home", path: "/" },
		{ link: "Shop", path: "/shop" },
		{ link: "Community", path: "/blog" },
	];

	return (
		<header className="w-full bg-green-950 fixed top-0 left-0 right-0 transition-all ease-in duration-300">
			<nav
				className={`py-4 lg:px-24 px-4 ${
					isSticky ? "sticky top-0 left-0 right-0 bg-green-600" : ""
				}`}
			>
				<div className="flex justify-between items-center text-base gap-8">
					<Link
						to="/"
						className="text-2xl font-bold text-white flex items-center gap-2"
					>
						<img className="h-6" src={logo} alt="" />
					</Link>

					<ul className="md:flex space-x-12 hidden navitems">
						{navItems.map(({ link, path }) => (
							<Link
								key={link}
								to={path}
								className="link block text-base cursor-pointer uppercase text-white font-bold hover:text-teal-300"
							>
								{link}
							</Link>
						))}
						{
							user ? <Link
							key={"DashBoard"}
							to={"/dashboard"}
							className="link block text-base cursor-pointer uppercase text-white font-bold hover:text-teal-300"
						>
							{"DashBoard"}
						</Link> : ''
						}
					</ul>

					<div className="space-x-12  lg:flex items-center text-white font-bold ">
						<Link to="/cart" className="btn flex align-middle gap-1">
							<div>
								<FaCartPlus></FaCartPlus>
							</div>
							<div className="badge -mt-2 font-bold text-sm ">{cartVal}</div>
						</Link>

						<button>
							{user ? (
								<button onClick={hangleSignOut}>Logout</button>
							) : (
								<Link to="/login">Login</Link>
							)}{" "}
						</button>
					</div>

					{/* menu btn, visible on mobile screen */}
					<div className="hidden">
						<button
							onClick={toggleMenu}
							className="text-black focus:outline-none"
						>
							{isMenuOpen ? (
								<FaXmark className="h-6 w-6 text-black" />
							) : (
								<FaBarsStaggered className="h-5 w-5 text-black" />
							)}
						</button>
					</div>
				</div>

				<div
					className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
						isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
					}`}
				>
					{navItems.map(({ link, path }) => (
						<a
							href={path}
							key={link}
							onClick={toggleMenu}
							className="block  text-white hover:text-gray-500"
						>
							{link}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
