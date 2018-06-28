
	import express from "express";
	import * as sliders from "./../controllers/sliderController";

	const sliderRoute = express.Router();

	// Create a new slider
	sliderRoute.post("/sliders", sliders.create);

	// Retrieve all Notes
	sliderRoute.get("/sliders", sliders.findAll);

	// Retrieve a single slider with sliderId
	sliderRoute.get("/sliders/:sliderId", sliders.findOne);

	// Update a slider with sliderId
	sliderRoute.put("/sliders/:sliderId", sliders.update);

	// Delete a slider with sliderId
	sliderRoute.delete("/sliders/:sliderId", sliders.delete);

	export default sliderRoute;
	