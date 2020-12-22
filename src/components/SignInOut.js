import React from "react";

import { auth } from "../firebase";
import firebase from "firebase/app";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
// import { AuthContext } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";

const SignInOut = () => {
	const history = useHistory();
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
		history.push("/");
	};

	const [user] = useAuthState(auth);

	return user ? (
		// <Grid container justify="flex-end" alignItems="center" spacing={1}>
		<>
			<Grid item>
				<Button
					style={{ textTransform: "none" }}
					variant="contained"
					onClick={signOutWithGoogle}
				>
					<Typography variant="subtitle1">Sign Out</Typography>
				</Button>
			</Grid>
			<Grid item>
				<Avatar src={user.photoURL} />
			</Grid>
		</>
	) : (
		// </Grid>
		// <Grid container justify="flex-end" alignItems="center" spacing={1}>
		<Button
			style={{ textTransform: "none" }}
			variant="contained"
			onClick={signInWithGoogle}
		>
			<Typography variant="subtitle1">Sign in with Google</Typography>
		</Button>
		// </Grid>
	);
};

export default SignInOut;
