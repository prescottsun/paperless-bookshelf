import { Grid, Typography } from "@material-ui/core";

const Reviews = ({ id, book }) => {
	return (
		<Grid container direction="column">
			<Typography variant="subtitle1">Reviews from GoodReads</Typography>
			<iframe
				srcDoc={book.reviews_widget.data}
				sandbox="allow-same-origin allow-scripts"
				referrerPolicy="origin-when-cross-origin"
				width="575px"
				height="400px"
				title="GoodReads book reviews"
			/>
		</Grid>
	);
};

export default Reviews;
