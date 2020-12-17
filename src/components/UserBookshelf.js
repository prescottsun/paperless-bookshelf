import React, { useContext, useEffect, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth, firestore } from "../firebase";
import firebase from "firebase/app";
import { Container, Grid, Typography } from "@material-ui/core";
import BookOnShelf from "./BookOnShelf";
import { AuthContext } from "../contexts/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";

const UserBookshelf = () => {
	// const { userInfo } = useContext(AuthContext);
	// const { uid, displayName } = auth.currentUser;
	const [user] = useAuthState(auth);

	const { uid, displayName } = user;
	const bookshelfRef = firestore.collection(`bookshelf-${uid}`);

	const [books] = useCollectionData(bookshelfRef, { idField: "id" });

	// const getBooks =	bookshelfRef.get().then((querySnapshot) => {
	// 		querySnapshot.docs.map((book) => {
	// 			setBooks([...books, book.data()]);
	// 		});
	// 		console.log(books);
	// 	});

	return (
		<Container>
			<Typography>{`${displayName}'s Bookshelf`}</Typography>
			<Grid container alignItems="stretch">
				{books &&
					books.map((book) => (
						<Grid item xs={12} sm={4} md={3}>
							<BookOnShelf key={book.id} book={book} />
						</Grid>
					))}
			</Grid>
		</Container>
	);
};

export default UserBookshelf;
