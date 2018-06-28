
		import mongoose from "mongoose";

		const CurrencySchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Currency = mongoose.model("Currency", CurrencySchema);
		export default Currency;
	