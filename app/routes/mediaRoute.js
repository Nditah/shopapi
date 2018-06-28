
	import express from "express";
	import * as medias from "./../controllers/mediaController";

	const mediaRoute = express.Router();

	// Create a new media
	mediaRoute.post("/medias", medias.create);

	// Retrieve all Notes
	mediaRoute.get("/medias", medias.findAll);

	// Retrieve a single media with mediaId
	mediaRoute.get("/medias/:mediaId", medias.findOne);

	// Update a media with mediaId
	mediaRoute.put("/medias/:mediaId", medias.update);

	// Delete a media with mediaId
	mediaRoute.delete("/medias/:mediaId", medias.delete);

	export default mediaRoute;
	