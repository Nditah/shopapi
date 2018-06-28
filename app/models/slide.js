import mongoose from "mongoose";

const SlideSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const Slide = mongoose.model("Slide", SlideSchema);
export default Slide;

