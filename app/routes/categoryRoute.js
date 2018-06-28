
	import express from "express";
	import * as categorys from "./../controllers/categoryController";

	const categoryRoute = express.Router();

	// Create a new category
	categoryRoute.post("/categorys", categorys.create);

	// Retrieve all Notes
	categoryRoute.get("/categorys", categorys.findAll);

	// Retrieve a single category with categoryId
	categoryRoute.get("/categorys/:categoryId", categorys.findOne);

	// Update a category with categoryId
	categoryRoute.put("/categorys/:categoryId", categorys.update);

	// Delete a category with categoryId
	categoryRoute.delete("/categorys/:categoryId", categorys.delete);

	export default categoryRoute;
	