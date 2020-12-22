import React from "react";

import { auth, firestore } from "../firebase";
import firebase from "firebase/app";
import { Button } from "@material-ui/core";

const AddBook = ({ goodReadsId, title, author, authorId, imageUrl, isbn }) => {
	const { uid } = auth.currentUser;
	const bookshelfRef = firestore.collection(`bookshelf-${uid}`);

	const addBook = async () => {
		await bookshelfRef.add({
			uid,
			goodReadsId,
			title,
			author,
			authorId,
			imageUrl,
			isbn: parseInt(isbn),
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let docRef = await bookshelfRef
			.where("goodReadsId", "==", goodReadsId)
			.get();
		if (docRef.empty) {
			addBook();
		}
	};

	return (
		uid && (
			<Button
				size="small"
				variant="contained"
				color="primary"
				onClick={handleSubmit}
			>
				Add to Bookshelf
			</Button>
		)
	);
};

export default AddBook;
