
	import express from "express";
	import * as languageLists from "./../controllers/languageListController";

	const languageListRoute = express.Router();

	// Create a new languageList
	languageListRoute.post("/languageLists", languageLists.create);

	// Retrieve all Notes
	languageListRoute.get("/languageLists", languageLists.findAll);

	// Retrieve a single languageList with languageListId
	languageListRoute.get("/languageLists/:languageListId", languageLists.findOne);

	// Update a languageList with languageListId
	languageListRoute.put("/languageLists/:languageListId", languageLists.update);

	// Delete a languageList with languageListId
	languageListRoute.delete("/languageLists/:languageListId", languageLists.delete);

	export default languageListRoute;
	