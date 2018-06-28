
	import express from "express";
	import * as permissions from "./../controllers/permissionController";

	const permissionRoute = express.Router();

	// Create a new permission
	permissionRoute.post("/permissions", permissions.create);

	// Retrieve all Notes
	permissionRoute.get("/permissions", permissions.findAll);

	// Retrieve a single permission with permissionId
	permissionRoute.get("/permissions/:permissionId", permissions.findOne);

	// Update a permission with permissionId
	permissionRoute.put("/permissions/:permissionId", permissions.update);

	// Delete a permission with permissionId
	permissionRoute.delete("/permissions/:permissionId", permissions.delete);

	export default permissionRoute;
	