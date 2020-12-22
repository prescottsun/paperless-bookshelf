import { Container, Paper, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { ApiContext } from "../contexts/ApiContext";
import SearchResult from "./SearchResult";
import axios from "../axios";
// import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
	const [isLoadingResults, setIsLoadingResults] = useState(false);

	// const [searchResults, setSearchResults] = useState([]);
	const [query, setQuery] = useState("");

	const { apiKey, xmlConversion, searchResults, setSearchResults } = useContext(
		ApiContext
	);

	const getSearchResults = async (query) => {
		try {
			setIsLoadingResults(true);
			const result = await axios.get(
				`/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${query}`
			);
			const jsonResult = await xmlConversion(result.data);
			setSearchResults([...jsonResult.GoodreadsResponse.search.results.work]);

			console.log(searchResults);
		} catch (err) {
			setSearchResults(null);
		}
		setIsLoadingResults(false);
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const queryURI = encodeURIComponent(query);
		// console.log(queryURI);
		await getSearchResults(queryURI);
		// console.log(searchResults);
		// setQuery("");
	};
	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="query"
					value={query}
					onChange={handleChange}
					placeholder="Search for books by name or author"
					style={{ width: "50vw" }}
				/>
				<input type="submit" value="Search" />
			</form>

			{isLoadingResults && (
				<Paper>
					<Typography variant="h6">Loading results...</Typography>
				</Paper>
			)}
			{!searchResults ? (
				<Paper>
					<Typography variant="h6">No search results found</Typography>
				</Paper>
			) : (
				searchResults.map((work) => {
					return <SearchResult work={work} />;
				})
			)}
		</Container>
	);
};

export default withRouter(Search);
