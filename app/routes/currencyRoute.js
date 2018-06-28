
	import express from "express";
	import * as currencys from "./../controllers/currencyController";

	const currencyRoute = express.Router();

	// Create a new currency
	currencyRoute.post("/currencys", currencys.create);

	// Retrieve all Notes
	currencyRoute.get("/currencys", currencys.findAll);

	// Retrieve a single currency with currencyId
	currencyRoute.get("/currencys/:currencyId", currencys.findOne);

	// Update a currency with currencyId
	currencyRoute.put("/currencys/:currencyId", currencys.update);

	// Delete a currency with currencyId
	currencyRoute.delete("/currencys/:currencyId", currencys.delete);

	export default currencyRoute;
	