
		import mongoose from "mongoose";

		const BrandSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Brand = mongoose.model("Brand", BrandSchema);
		export default Brand;
	