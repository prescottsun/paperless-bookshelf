import React, { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";
import { auth } from "../firebase";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [userInfo, setUserInfo] = useState([]);

	// const AuthChange = async () => {
	// 	const [user] = await useAuthState(auth);

	// 	setUserInfo(user);
	// };

	return (
		<AuthContext.Provider
			value={{
				userInfo,
				setUserInfo,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
