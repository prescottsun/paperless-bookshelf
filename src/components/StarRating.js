import React from "react";
import Rating from "@material-ui/lab/Rating";
// import Box from "@material-ui/core/Box";

const StarRating = ({ rating }) => {
	return (
		// <Box component="fieldset" mb={3} borderColor="transparent">
		<Rating name="average rating" value={rating} precision={0.1} readOnly />
		// </Box>
	);
};

export default StarRating;
