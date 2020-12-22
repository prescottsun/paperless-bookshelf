import React from "react";

import { auth, firestore } from "../firebase";

import { Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const DeleteBook = ({ goodReadsId, showText }) => {
	const { uid } = auth.currentUser;
	const bookshelfRef = firestore.collection(`bookshelf-${uid}`);

	const query = bookshelfRef.where("goodReadsId", "==", goodReadsId);

	const deleteBook = async () => {
		await query.get().then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				doc.ref.delete();
			});
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		deleteBook();
	};

	return uid && showText ? (
		<Button variant="contained" color="secondary" onClick={handleSubmit}>
			Remove from bookshelf
		</Button>
	) : (
		<IconButton color="secondary" onClick={handleSubmit}>
			<ClearIcon />
		</IconButton>
	);
};

export default DeleteBook;
