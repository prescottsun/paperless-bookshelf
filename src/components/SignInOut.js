import React, { useContext } from "react";

import { auth } from "../firebase";
import firebase from "firebase/app";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import { AuthContext } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const SignInOut = () => {
	// const { userInfo, setUserInfo } = useContext(AuthContext);

	const signInWithGoogle = async () => {
		// await firebase
		// 	.auth()
		// 	.setPersistence(firebase.auth.Auth.Persistence.SESSION);
		const provider = new firebase.auth.GoogleAuthProvider();
		await auth.signInWithPopup(provider);
		// setUserInfo(auth.currentUser);
	};

	const signOutWithGoogle = () => {
		auth.signOut();
		// setUserInfo(null);
	};

	const [user] = useAuthState(auth);

	return user ? (
		// <Grid container justify="flex-end" alignItems="center" spacing={1}>
		<>
			<Grid item>
				<Button variant="contained" onClick={signOutWithGoogle}>
					Sign Out
				</Button>
			</Grid>
			<Grid item>
				<Avatar src={user.photoURL} />
			</Grid>
		</>
	) : (
		// </Grid>
		// <Grid container justify="flex-end" alignItems="center" spacing={1}>
		<Button variant="contained" onClick={signInWithGoogle}>
			<Typography>Sign in with Google</Typography>
		</Button>
		// </Grid>
	);
};

export default SignInOut;
