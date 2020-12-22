import React from "react";

import { Card, Container, Typography } from "@material-ui/core";

const Home = () => {
	return (
		<Container>
			<Card>
				<Typography variant="h6">
					Welcome to your Paperless Bookshelf.
				</Typography>
				<Typography>Sign in with your Google account</Typography>
				<Typography>
					Search for books and authors and view their detail pages
				</Typography>
				<Typography>Add books to your digital bookshelf</Typography>
				<Typography>
					Manage books on your bookshelf and view previews of their content from
					Google Books
				</Typography>
				<br />
				<Typography>Powered by: </Typography>

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
