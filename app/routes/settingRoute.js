
	import express from "express";
	import * as settings from "./../controllers/settingController";

	const settingRoute = express.Router();

	// Create a new setting
	settingRoute.post("/settings", settings.create);

	// Retrieve all Notes
	settingRoute.get("/settings", settings.findAll);

	// Retrieve a single setting with settingId
	settingRoute.get("/settings/:settingId", settings.findOne);

	// Update a setting with settingId
	settingRoute.put("/settings/:settingId", settings.update);

	// Delete a setting with settingId
	settingRoute.delete("/settings/:settingId", settings.delete);

	export default settingRoute;
	