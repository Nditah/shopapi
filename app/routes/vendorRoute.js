
	import express from "express";
	import * as vendors from "./../controllers/vendorController";

	const vendorRoute = express.Router();

	// Create a new vendor
	vendorRoute.post("/vendors", vendors.create);

	// Retrieve all Notes
	vendorRoute.get("/vendors", vendors.findAll);

	// Retrieve a single vendor with vendorId
	vendorRoute.get("/vendors/:vendorId", vendors.findOne);

	// Update a vendor with vendorId
	vendorRoute.put("/vendors/:vendorId", vendors.update);

	// Delete a vendor with vendorId
	vendorRoute.delete("/vendors/:vendorId", vendors.delete);

	export default vendorRoute;
	