
	import express from "express";
	import * as reviews from "./../controllers/reviewController";

	const reviewRoute = express.Router();

	// Create a new review
	reviewRoute.post("/reviews", reviews.create);

	// Retrieve all Notes
	reviewRoute.get("/reviews", reviews.findAll);

	// Retrieve a single review with reviewId
	reviewRoute.get("/reviews/:reviewId", reviews.findOne);

	// Update a review with reviewId
	reviewRoute.put("/reviews/:reviewId", reviews.update);

	// Delete a review with reviewId
	reviewRoute.delete("/reviews/:reviewId", reviews.delete);

	export default reviewRoute;
	