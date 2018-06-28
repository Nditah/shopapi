import mongoose from "mongoose";

const ArbitrationMessageSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
  timestamps: true,
  });
const ArbitrationMessage = mongoose.model("ArbitrationMessage", ArbitrationMessageSchema);

export default ArbitrationMessage;

