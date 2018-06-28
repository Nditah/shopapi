
		import mongoose from "mongoose";

		const MediaSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Media = mongoose.model("Media", MediaSchema);
		export default Media;
	