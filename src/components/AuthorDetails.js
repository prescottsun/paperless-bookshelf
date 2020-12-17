import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import parse from "html-react-parser";
import { ApiContext } from "../contexts/ApiContext";
import axios from "../axios";
import BookCard from "./BookCard";

const AuthorDetails = () => {
	let { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [author, setAuthor] = useState([]);

	const { apiKey, xmlConversion } = useContext(ApiContext);

	const getAuthor = async (id) => {
		try {
			const result = await axios.get(
				`/https://www.goodreads.com/author/show/${id}?key=${apiKey}`
			);
			const jsonResult = await xmlConversion(result.data);
			await setAuthor(jsonResult.GoodreadsResponse.author);
			setIsLoading(false);
			console.log(author);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getAuthor(id);
	}, []);

	return isLoading ? (
		<div>Loading</div>
	) : (
		<Container>
			<Card>
				<CardContent>
					<Grid>
						<CardMedia title={author.name.data}>
							<img src={author.image_url.data} alt="book cover image" />
						</CardMedia>
					</Grid>
					<Typography gutterBottom variant="h5">
						{author.name.data}
					</Typography>
					{/* <Typography color="textSecondary">
						{author.works_count.data} Works
					</Typography> */}
					<Typography variant="body2" component="p">
						{parse(`${author.about.data}`)}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">
						<a href={author.link.data} target="_blank">
							View Author on GoodReads
						</a>
					</Button>
				</CardActions>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						Author's Works
					</Typography>
					<Grid container>
						{author.books.book.map((book) => (
							<Grid item sm={3}>
								<BookCard key={book.id} book={book} />
							</Grid>
						))}
					</Grid>
				</CardContent>
			</Card>
		</Container>
	);
};

export default AuthorDetails;
