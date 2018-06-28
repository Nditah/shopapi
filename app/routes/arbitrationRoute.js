
	import express from "express";
	import * as arbitrations from "./../controllers/arbitrationController";

	const arbitrationRoute = express.Router();

	// Create a new arbitration
	arbitrationRoute.post("/arbitrations", arbitrations.create);

	// Retrieve all Notes
	arbitrationRoute.get("/arbitrations", arbitrations.findAll);

	// Retrieve a single arbitration with arbitrationId
	arbitrationRoute.get("/arbitrations/:arbitrationId", arbitrations.findOne);

	// Update a arbitration with arbitrationId
	arbitrationRoute.put("/arbitrations/:arbitrationId", arbitrations.update);

	// Delete a arbitration with arbitrationId
	arbitrationRoute.delete("/arbitrations/:arbitrationId", arbitrations.delete);

	export default arbitrationRoute;
	