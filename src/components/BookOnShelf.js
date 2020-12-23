import React, { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import DeleteBook from "./DeleteBook";

import Modal from "@material-ui/core/Modal";
import EmbeddedViewer from "./EmbeddedViewer";
import { Grid } from "@material-ui/core";
import Axios from "axios";

const BookOnShelf = ({ book }) => {
	const { author, authorId, goodReadsId, imageUrl, title } = book;

	const [open, setOpen] = useState(false);
	const [googleId, setGoogleId] = useState("");

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const titleURI = encodeURIComponent(title);
	const authorURI = encodeURIComponent(author);
	const getGoogleBook = async (titleURI, authorURI) => {
		let res = await Axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleURI}+inauthor:${authorURI}`
		);

		setGoogleId(res.data.items[0].id);
	};

	useEffect(() => {
		getGoogleBook(titleURI, authorURI);
	}, []);

	return (
		<Card>
			<CardContent>
				<Grid container>
					<Grid item xs={10}>
						<Typography gutterBottom variant="h6">
							{title}
						</Typography>
					</Grid>
					<Grid item xs={2}>
						<DeleteBook goodReadsId={goodReadsId} showText={false} />
					</Grid>
				</Grid>

				<CardMedia title={title}>
					<img src={imageUrl} alt={title} />
				</CardMedia>

				<Typography
					component={Link}
					to={`/authors/${authorId}`}
					variant="h6"
					color="textSecondary"
				>
					{author}
				</Typography>
			</CardContent>
			<CardActions>
				<Grid container justify="space-between">
					<Link to={`/books/${goodReadsId}`}>
						<Button style={{ textTransform: "none" }} size="large">
							Details Page
						</Button>
					</Link>

					<Button
						variant="outlined"
						onClick={handleOpen}
						style={{ textTransform: "none" }}
						size="large"
						color="primary"
					>
						Preview
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="Book Preview"
						aria-describedby="Book preview provided by Google Books"
					>
						<EmbeddedViewer googleId={googleId} />
					</Modal>
				</Grid>
			</CardActions>
		</Card>
	);
};

export default BookOnShelf;
