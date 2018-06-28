
		import mongoose from "mongoose";

		const CategorySchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Category = mongoose.model("Category", CategorySchema);
		export default Category;
	