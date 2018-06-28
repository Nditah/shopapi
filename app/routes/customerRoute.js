
	import express from "express";
	import * as customers from "./../controllers/customerController";

	const customerRoute = express.Router();

	// Create a new customer
	customerRoute.post("/customers", customers.create);

	// Retrieve all Notes
	customerRoute.get("/customers", customers.findAll);

	// Retrieve a single customer with customerId
	customerRoute.get("/customers/:customerId", customers.findOne);

	// Update a customer with customerId
	customerRoute.put("/customers/:customerId", customers.update);

	// Delete a customer with customerId
	customerRoute.delete("/customers/:customerId", customers.delete);

	export default customerRoute;
	