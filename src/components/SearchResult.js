import { CardActionArea, CardMedia, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import StarRating from "./StarRating";

const SearchResult = ({ work }) => {
	return (
		<>
			{!work ? (
				<div>No results</div>
			) : (
				<Card>
					<CardActionArea
						component={Link}
						to={`/books/${work.best_book.id.data}`}
					>
						<CardContent>
							<CardMedia title={work.best_book.title.data}>
								<img src={work.best_book.image_url.data} alt="book cover" />
							</CardMedia>
							<Typography variant="h6">{work.best_book.title.data}</Typography>
							{work.best_book.author && (
								<Button
									component={Link}
									to={`/authors/${work.best_book.author.id.data}`}
									variant="text"
									size="small"
									style={{ textTransform: "none" }}
								>
									<Typography variant="h6">
										{work.best_book.author.name.data}
									</Typography>
								</Button>
							)}
							<Typography color="textSecondary">
								{`Published: ${work.original_publication_month.data}/${work.original_publication_day.data}/${work.original_publication_year.data}`}
							</Typography>
							<Grid container spacing={1}>
								<Grid item>
									<StarRating rating={work.average_rating.data} />
								</Grid>
								<Grid item>
									<Typography variant="subtitle1" color="textSecondary">
										{`${work.ratings_count.data} total ratings`}
									</Typography>
								</Grid>
							</Grid>
							{/* <Typography>{work.num_pages.data} Pages</Typography> */}

							{/* <CardActions>
								<Button size="small">
									<Link to={`/books/${work.best_book.id.data}`}>
										Details and Reviews Page
									</Link>
								</Button>
							</CardActions> */}
						</CardContent>
					</CardActionArea>
				</Card>
			)}
		</>
	);
};

export default SearchResult;
