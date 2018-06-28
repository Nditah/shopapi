
		import mongoose from "mongoose";

		const TemplateSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Template = mongoose.model("Template", TemplateSchema);
		export default Template;
	