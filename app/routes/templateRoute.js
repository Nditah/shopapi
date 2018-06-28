
	import express from "express";
	import * as templates from "./../controllers/templateController";

	const templateRoute = express.Router();

	// Create a new template
	templateRoute.post("/templates", templates.create);

	// Retrieve all Notes
	templateRoute.get("/templates", templates.findAll);

	// Retrieve a single template with templateId
	templateRoute.get("/templates/:templateId", templates.findOne);

	// Update a template with templateId
	templateRoute.put("/templates/:templateId", templates.update);

	// Delete a template with templateId
	templateRoute.delete("/templates/:templateId", templates.delete);

	export default templateRoute;
	