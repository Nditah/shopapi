
	import express from "express";
	import * as languages from "./../controllers/languageController";

	const languageRoute = express.Router();

	// Create a new language
	languageRoute.post("/languages", languages.create);

	// Retrieve all Notes
	languageRoute.get("/languages", languages.findAll);

	// Retrieve a single language with languageId
	languageRoute.get("/languages/:languageId", languages.findOne);

	// Update a language with languageId
	languageRoute.put("/languages/:languageId", languages.update);

	// Delete a language with languageId
	languageRoute.delete("/languages/:languageId", languages.delete);

	export default languageRoute;
	