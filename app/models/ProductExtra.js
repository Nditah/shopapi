
		import mongoose from "mongoose";

		const ProductExtraSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const ProductExtra = mongoose.model("ProductExtra", ProductExtraSchema);
		export default ProductExtra;
	