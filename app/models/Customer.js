
import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema({
	username: { type: String },
	metamask: { type: String },
	gender: { type: String },
	password: { type: String },
	photo: { type: String },
	profile: { type: String },
	downloads: { type: String },
	agent_status: { type: String },
	first_name: { type: String },
	middle_name: { type: String },
	last_name: { type: String },
	organization: { type: String },
	address1: { type: String },
	address2: { type: String },
	city: { type: String },
	zip: { type: String },
	postal_code: { type: String },
	lang_lat: { type: String },
	state: { type: String },
	country: { type: String },
	phone1: { type: String },
	phone2: { type: String },
	email1: { type: String },
	email2: { type: String },
	last_access: { type: [{ date: { type: Date }, ip: { type: String } }] },
	standing: {
		type: String,
		enum: ["active", "suspended", "trashed"],
		default: "active",
		required: [true, "Why no status?"],
	},
	updated: { type: Date, default: Date.now },

}, {
	timestamps: true,
});

const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;
