import mongoose from "mongoose";

const SlidesImageSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const SlidesImage = mongoose.model("SlidesImage", SlidesImageSchema);
export default SlidesImage;

