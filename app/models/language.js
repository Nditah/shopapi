
		import mongoose from "mongoose";

		const LanguageSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Language = mongoose.model("Language", LanguageSchema);
		export default Language;
	