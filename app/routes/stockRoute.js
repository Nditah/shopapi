
	import express from "express";
	import * as stocks from "./../controllers/stockController";

	const stockRoute = express.Router();

	// Create a new stock
	stockRoute.post("/stocks", stocks.create);

	// Retrieve all Notes
	stockRoute.get("/stocks", stocks.findAll);

	// Retrieve a single stock with stockId
	stockRoute.get("/stocks/:stockId", stocks.findOne);

	// Update a stock with stockId
	stockRoute.put("/stocks/:stockId", stocks.update);

	// Delete a stock with stockId
	stockRoute.delete("/stocks/:stockId", stocks.delete);

	export default stockRoute;
	