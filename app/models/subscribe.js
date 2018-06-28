
import mongoose from "mongoose";

const SubscribeSchema = mongoose.Schema({
	email: { type: String },
	frequency: {
		type: String,
		enum: ["daily", "weekly", "monthly"],
		default: "active",
		required: [true, "Why no sender?"],
	},
	interest: { type: [] },
	standing: {
		type: String,
		enum: ["subscribed", "unsubscribed", "trashed"],
		default: "unread",
	},
	updated: { type: Date, default: Date.now },
}, {
	timestamps: true,
});

const Subscribe = mongoose.model("Subscribe", SubscribeSchema);
export default Subscribe;
