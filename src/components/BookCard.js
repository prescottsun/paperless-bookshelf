import React from "react";

import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";
import AddBook from "./AddBook";
import StarRating from "./StarRating";

const BookCard = ({ book }) => {
	const { id, title, image_url, average_rating, ratings_count } = book;

	// const [open, setOpen] = useState(false);

	// const handleOpen = () => {
	// 	setOpen(true);
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	return (
		<Card>
			<CardContent>
				<CardMedia title="Book Cover">
					<img src={image_url.data} alt="Book Cover" />
				</CardMedia>
				<Typography variant="h5">{title.data}</Typography>
				<Grid container spacing={1}>
					<Grid item>
						<StarRating rating={average_rating.data} />
					</Grid>
					<Grid item>
						<Typography variant="subtitle2" color="textSecondary">
							{`${ratings_count.data} total ratings`}
						</Typography>
					</Grid>
				</Grid>

				<CardActions>
					<Grid container justify="space-between">
						<Link to={`/books/${id.data}`}>
							<Button size="large" color="primary">
								Go to book page
							</Button>
						</Link>
						<AddBook
							goodReadsId={id.data}
							title={title.data}
							author={book.authors.author.name.data}
							authorId={book.authors.author.id.data}
							imageUrl={image_url.data}
							isbn={book.isbn.data}
						/>
					</Grid>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default BookCard;
