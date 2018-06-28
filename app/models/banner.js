import mongoose from "mongoose";

const BannerSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
  timestamps: true,
  });
const Banner = mongoose.model("Banner", BannerSchema);
export default Banner;

