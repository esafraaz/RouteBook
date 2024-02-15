import { createContext } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [cartVal, setCartVal] = useState(0);
	const [books, setBooks] = useState([]);
	// const [dbBooks, setDbBooks] = useState([]);


	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signUpWithGmail = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		localStorage.removeItem("genius-token");
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	// useEffect(() => {
	// 	fetch("http://localhost:5000/all-books")
	// 		.then((res) => res.json())
	// 		.then((data) => setDbBooks(data.slice(0, 8)));
	// }, []);
	useEffect(() => {
		fetch("/books.json")
			.then((res) => res.json())
			.then((data) => setBooks(data));
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		login,
		logOut,
		signUpWithGmail,
		cartVal,
		setCartVal,
		books,
		setBooks
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
