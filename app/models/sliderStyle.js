import mongoose from "mongoose";

const SliderStyleSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const SliderStyle = mongoose.model("SliderStyle", SliderStyleSchema);
export default SliderStyle;

