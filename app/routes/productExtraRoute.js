
	import express from "express";
	import * as productExtras from "./../controllers/productExtraController";

	const productExtraRoute = express.Router();

	// Create a new productExtra
	productExtraRoute.post("/productExtras", productExtras.create);

	// Retrieve all Notes
	productExtraRoute.get("/productExtras", productExtras.findAll);

	// Retrieve a single productExtra with productExtraId
	productExtraRoute.get("/productExtras/:productExtraId", productExtras.findOne);

	// Update a productExtra with productExtraId
	productExtraRoute.put("/productExtras/:productExtraId", productExtras.update);

	// Delete a productExtra with productExtraId
	productExtraRoute.delete("/productExtras/:productExtraId", productExtras.delete);

	export default productExtraRoute;
	