
		import mongoose from "mongoose";

		const SettingSchema = mongoose.Schema({
		title: String,
		content: String,
		}, {
		timestamps: true,
		});

		const Setting = mongoose.model("Setting", SettingSchema);
		export default Setting;
	