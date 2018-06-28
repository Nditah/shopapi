
		import mongoose from "mongoose";

		const OrderSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Order = mongoose.model("Order", OrderSchema);
		export default Order;
	