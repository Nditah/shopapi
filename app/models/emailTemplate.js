import mongoose from "mongoose";

const EmailTemplateSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const EmailTemplate = mongoose.model("EmailTemplate", EmailTemplateSchema);
export default EmailTemplate;
