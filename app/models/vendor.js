
import mongoose from "mongoose";

const VendorSchema = mongoose.Schema({
	shop_name: { type: String, unique: true, required: [true, "Why no Shop name?"] },
	company: { type: String, required: [true, "Why no Company?"] },
	first_name: { type: String },
	middle_name: { type: String },
	last_name: { type: String },
	email: { type: String, required: [true, "Why no Email?"] },
	password: { type: String, required: [true, "Why no Password?"] },
	tagline: { type: String },
	address1: { type: String, required: [true, "Why no Address1?"] },
	address2: { type: String },
	details: { type: [] },
	facebook: { type: String },
	skype: { type: String },
	google_plus: { type: String },
	twitter: { type: String },
	youtube: { type: String },
	pinterest: { type: String },
	phone: { type: String, required: [true, "Why no Phone?"] },
	tag: { type: String, required: [true, "Why no Tag?"] },
	description: { type: String, required: [true, "Why no Description?"] },
	lat_lang: { type: String, required: [true, "Why no Lat_lang?"] },
	country: { type: String, required: [true, "Why no Country?"] },
	city: { type: String, required: [true, "Why no City?"] },
	zip: { type: String, required: [true, "Why no Zip?"] },
	state: { type: String, required: [true, "Why no State?"] },
	theme: { type: String },
	logo: { type: String },
	banner: { type: String },
	home_page_style: { type: String },
	product_page_style: { type: String },
	product_detail_page_style: { type: String },
	profile_page_style: { type: String },
	blog_page_style: { type: String },
	mail_page_style: { type: String },
	invoice_page_style: { type: String },
	ticket_page_style: { type: String },
	view_count: { type: Number, default: 1 },
	metamask: { type: String, required: [true, "Why no MetaMask address?"] },
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

const Vendor = mongoose.model("Vendor", VendorSchema);
export default Vendor;