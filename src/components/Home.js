import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { BottomNavigation, Container, Typography } from "@material-ui/core";

const Home = () => {
	return (
		<Container>
			<Typography variant="h6">Welcome to your Paperless Bookshelf.</Typography>
			<Typography>Sign in with your Google account</Typography>
			<Typography>Search for books and authors by name or ISBN</Typography>
			<Typography>
				View details pages on books and authors, and add books to your bookshelf
			</Typography>
			<Typography>
				Manage books on your bookshelf and view previews of their content
			</Typography>
			<Typography>Powered by: </Typography>
			<BottomNavigation>
				<img
					src="https://www.goodreads.com/assets/press/logo-fe2ef7d630d5f23daf46230e8592cd99.png"
					style={{ height: "50px" }}
				/>
			</BottomNavigation>
		</Container>
	);
};

export default Home;
