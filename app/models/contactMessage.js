import mongoose from "mongoose";

const ContactMessageSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const ContactMessage = mongoose.model("ContactMessage", ContactMessageSchema);
export default ContactMessage;
