import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import parse from "html-react-parser";
import Reviews from "./Reviews";
import { ApiContext } from "../contexts/ApiContext";
import axios from "../axios";
import AddBook from "./AddBook";
import DeleteBook from "./DeleteBook";
import StarRating from "./StarRating";

const BookDetails = () => {
	let { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [book, setBook] = useState([]);

	const { apiKey, xmlConversion } = useContext(ApiContext);

	const getBook = async (id) => {
		try {
			const result = await axios.get(
				`/https://www.goodreads.com/book/show/${id}.xml?key=${apiKey}`
			);
			const jsonResult = await xmlConversion(result.data);
			await setBook(jsonResult.GoodreadsResponse.book);
			setIsLoading(false);
			console.log(book);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getBook(id);
	}, []);

	return isLoading ? (
		<div>Loading</div>
	) : (
		<Grid container>
			{/* <EmbeddedViewer isbn={book.isbn.data} /> */}
			<Card>
				{/* <DeleteBook goodReadsId={id} showText={true} /> */}
				<CardContent>
					<Grid container justify="space-between">
						<Grid item>
							<CardMedia title={book.title.data}>
								<img src={book.image_url.data} alt="book cover image" />
							</CardMedia>
						</Grid>
						<Grid item>
							<AddBook
								goodReadsId={id}
								title={book.title.data}
								author={book.authors.author.name.data}
								imageUrl={book.image_url.data}
								isbn={book.isbn.data}
							/>
						</Grid>
					</Grid>
					<Typography variant="h5">{book.title.data}</Typography>
					{book.authors && (
						<Link to={`/authors/${book.authors.author.id.data}`}>
							<Typography gutterBottom variant="h6">
								{book.authors.author.name.data}
							</Typography>
						</Link>
					)}

					<Typography color="textSecondary">
						{`Published: ${book.publication_month.data}/${book.publication_day["data"]}/${book.publication_year.data}`}
					</Typography>

					<Grid container spacing={1}>
						<Grid item>
							<StarRating rating={book.average_rating.data} />
						</Grid>
						<Grid item>
							<Typography variant="subtitle1" color="textSecondary">
								{`${book.ratings_count.data} total ratings`}
							</Typography>
						</Grid>
					</Grid>
					<Typography gutterBottom color="textSecondary">
						{book.num_pages.data} Pages
					</Typography>
					<Typography variant="body2" component="p">
						{parse(`${book.description.data}`)}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">
						<a href={book.url.data} target="_blank">
							View Book on GoodReads
						</a>
					</Button>
				</CardActions>
				<CardContent>
					<Reviews id={id} book={book} />
				</CardContent>
			</Card>
		</Grid>
	);
};

export default BookDetails;
