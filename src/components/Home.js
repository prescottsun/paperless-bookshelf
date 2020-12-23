import React from "react";

import { Card, Container, Typography } from "@material-ui/core";

const Home = () => {
	return (
		<Container>
			<Card>
				<Typography gutterBottom variant="h4">
					Welcome to your Paperless Bookshelf.
				</Typography>
				<Typography variant="h5">Sign in with your Google account</Typography>
				<Typography variant="h5">
					Search for books and authors and view their detail pages
				</Typography>
				<Typography variant="h5">
					Add books to your digital bookshelf
				</Typography>
				<Typography variant="h5">
					Manage books on your bookshelf and view previews of their content from
					Google Books
				</Typography>
				<br />
				<Typography variant="h5">Powered by: </Typography>

				<img
					src="https://www.goodreads.com/assets/press/logo-fe2ef7d630d5f23daf46230e8592cd99.png"
					style={{ height: "30px" }}
					alt="GoodReads logo"
				/>
			</Card>
		</Container>
	);
};

export default Home;
