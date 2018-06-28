
	import express from "express";
	import * as roles from "./../controllers/roleController";

	const roleRoute = express.Router();

	// Create a new role
	roleRoute.post("/roles", roles.create);

	// Retrieve all Notes
	roleRoute.get("/roles", roles.findAll);

	// Retrieve a single role with roleId
	roleRoute.get("/roles/:roleId", roles.findOne);

	// Update a role with roleId
	roleRoute.put("/roles/:roleId", roles.update);

	// Delete a role with roleId
	roleRoute.delete("/roles/:roleId", roles.delete);

	export default roleRoute;
	