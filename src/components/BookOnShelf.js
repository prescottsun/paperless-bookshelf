import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
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

const BookOnShelf = ({ book }) => {
	const { author, goodReadsId, imageUrl, title, isbn } = book;

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Card>
			<CardContent>
				<Grid container>
					<Grid item xs={9}>
						<Typography gutterBottom variant="subtitle1">
							{title}
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<DeleteBook goodReadsId={goodReadsId} showText={false} />
					</Grid>
				</Grid>

				<CardMedia title={title}>
					<img src={imageUrl} />
				</CardMedia>

				<Typography variant="body1" color="textSecondary" component="p">
					{author}
				</Typography>
			</CardContent>
			<CardActions>
				<Grid container justify="space-between">
					<Link to={`/books/${goodReadsId}`}>
						<Button size="small">Details Page</Button>
					</Link>

					<Button
						size="small"
						variant="contained"
						onClick={handleOpen}
						style={{ textTransform: "none" }}
					>
						Preview
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="Book Preview"
						aria-describedby="Book preview provided by Google Books"
					>
						<EmbeddedViewer isbn={isbn} />
					</Modal>
				</Grid>
			</CardActions>
		</Card>
	);
};

export default BookOnShelf;
