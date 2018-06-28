import mongoose from "mongoose";

const PageSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const Page = mongoose.model("Page", PageSchema);
export default Page;
