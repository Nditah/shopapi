
	import express from "express";
	import * as subscribes from "./../controllers/subscribeController";

	const subscribeRoute = express.Router();

	// Create a new subscribe
	subscribeRoute.post("/subscribes", subscribes.create);

	// Retrieve all Notes
	subscribeRoute.get("/subscribes", subscribes.findAll);

	// Retrieve a single subscribe with subscribeId
	subscribeRoute.get("/subscribes/:subscribeId", subscribes.findOne);

	// Update a subscribe with subscribeId
	subscribeRoute.put("/subscribes/:subscribeId", subscribes.update);

	// Delete a subscribe with subscribeId
	subscribeRoute.delete("/subscribes/:subscribeId", subscribes.delete);

	export default subscribeRoute;
	