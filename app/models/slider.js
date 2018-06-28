
		import mongoose from "mongoose";

		const SliderSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Slider = mongoose.model("Slider", SliderSchema);
		export default Slider;
	