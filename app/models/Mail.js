
import mongoose from "mongoose";

const MailSchema = mongoose.Schema({
	title: String,
	content: String,
}, {
		timestamps: true,
	});

const Mail = mongoose.model("Mail", MailSchema);
export default Mail;
