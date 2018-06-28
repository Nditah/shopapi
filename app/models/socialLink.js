import mongoose from "mongoose";

const SocialLinkSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const SocialLink = mongoose.model("SocialLink", SocialLinkSchema);
export default SocialLink;
