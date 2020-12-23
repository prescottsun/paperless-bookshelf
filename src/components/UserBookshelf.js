import React, { useEffect, useState } from "react";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "../firebase";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import BookOnShelf from "./BookOnShelf";
// import { AuthContext } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const UserBookshelf = () => {
	// const { userInfo } = useContext(AuthContext);
	// const { uid, displayName } = auth.currentUser;
	const [user] = useAuthState(auth);
	const [books, setBooks] = useState([]);

	// const { uid, displayName } = user;
	// bookshelfRef = firestore.collection(`bookshelf-${user.uid}`);

	useEffect(() => {
		if (user) {
			firestore
				.collection(`bookshelf-${user.uid}`)
				.onSnapshot((booksSnapshot) => {
					setBooks(booksSnapshot.docs.map((doc) => doc.data()));
				});
		}
	}, [user]);

	// const [books, loading, error] = useCollectionData(
	// 	firestore.collection(`bookshelf-${user.uid}`),
	// 	{
	// 		idField: "id",
	// 	}
	// );

	return user ? (
		<Container>
			<Typography variant="h5">{`${user.displayName}'s Bookshelf`}</Typography>
			<Grid container alignItems="stretch">
				{books.map((book) => (
					<Grid item xs={12} sm={4} md={3}>
						<BookOnShelf key={book.id} book={book} />
					</Grid>
				))}
			</Grid>
		</Container>
	) : (
		<Container>
			<Paper>
				<Typography variant="h4">Sign in to view your bookshelf</Typography>
			</Paper>
		</Container>
	);

	// return (
	// 	<Container>
	// 		<Typography>{`${user.displayName}'s Bookshelf`}</Typography>
	// 		<Grid container alignItems="stretch">
	// 			{books &&
	// 				books.map((book) => (
	// 					<Grid item xs={12} sm={4} md={3}>
	// 						<BookOnShelf key={book.id} book={book} />
	// 					</Grid>
	// 				))}
	// 		</Grid>
	// 	</Container>
	// );
	// }
};

export default UserBookshelf;
