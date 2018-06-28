
	import express from "express";
	import * as messages from "./../controllers/messageController";

	const messageRoute = express.Router();

	// Create a new message
	messageRoute.post("/messages", messages.create);

	// Retrieve all Notes
	messageRoute.get("/messages", messages.findAll);

	// Retrieve a single message with messageId
	messageRoute.get("/messages/:messageId", messages.findOne);

	// Update a message with messageId
	messageRoute.put("/messages/:messageId", messages.update);

	// Delete a message with messageId
	messageRoute.delete("/messages/:messageId", messages.delete);

	export default messageRoute;
	