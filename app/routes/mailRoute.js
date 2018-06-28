
	import express from "express";
	import * as mails from "./../controllers/mailController";

	const mailRoute = express.Router();

	// Create a new mail
	mailRoute.post("/mails", mails.create);

	// Retrieve all Notes
	mailRoute.get("/mails", mails.findAll);

	// Retrieve a single mail with mailId
	mailRoute.get("/mails/:mailId", mails.findOne);

	// Update a mail with mailId
	mailRoute.put("/mails/:mailId", mails.update);

	// Delete a mail with mailId
	mailRoute.delete("/mails/:mailId", mails.delete);

	export default mailRoute;
	