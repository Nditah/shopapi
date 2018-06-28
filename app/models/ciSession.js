import mongoose from "mongoose";

const CiSessionSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const CiSession = mongoose.model("CiSession", CiSessionSchema);

export default CiSession;

