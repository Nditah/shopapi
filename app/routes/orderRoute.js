
	import express from "express";
	import * as orders from "./../controllers/orderController";

	const orderRoute = express.Router();

	// Create a new order
	orderRoute.post("/orders", orders.create);

	// Retrieve all Notes
	orderRoute.get("/orders", orders.findAll);

	// Retrieve a single order with orderId
	orderRoute.get("/orders/:orderId", orders.findOne);

	// Update a order with orderId
	orderRoute.put("/orders/:orderId", orders.update);

	// Delete a order with orderId
	orderRoute.delete("/orders/:orderId", orders.delete);

	export default orderRoute;
	