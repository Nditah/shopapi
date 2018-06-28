
	import express from "express";
	import * as brands from "./../controllers/brandController";

	const brandRoute = express.Router();

	// Create a new brand
	brandRoute.post("/brands", brands.create);

	// Retrieve all Notes
	brandRoute.get("/brands", brands.findAll);

	// Retrieve a single brand with brandId
	brandRoute.get("/brands/:brandId", brands.findOne);

	// Update a brand with brandId
	brandRoute.put("/brands/:brandId", brands.update);

	// Delete a brand with brandId
	brandRoute.delete("/brands/:brandId", brands.delete);

	export default brandRoute;
	