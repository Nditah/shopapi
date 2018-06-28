
		import mongoose from "mongoose";

		const StockSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Stock = mongoose.model("Stock", StockSchema);
		export default Stock;
	