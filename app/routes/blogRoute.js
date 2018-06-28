
	import express from "express";
	import * as blogs from "./../controllers/blogController";

	const blogRoute = express.Router();

	// Create a new blog
	blogRoute.post("/blogs", blogs.create);

	// Retrieve all Notes
	blogRoute.get("/blogs", blogs.findAll);

	// Retrieve a single blog with blogId
	blogRoute.get("/blogs/:blogId", blogs.findOne);

	// Update a blog with blogId
	blogRoute.put("/blogs/:blogId", blogs.update);

	// Delete a blog with blogId
	blogRoute.delete("/blogs/:blogId", blogs.delete);

	export default blogRoute;
	