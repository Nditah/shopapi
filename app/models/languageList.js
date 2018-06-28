
		import mongoose from "mongoose";

		const LanguageListSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const LanguageList = mongoose.model("LanguageList", LanguageListSchema);
		export default LanguageList;
	