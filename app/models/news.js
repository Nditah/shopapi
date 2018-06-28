import mongoose from "mongoose";

const NewsSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const News = mongoose.model("News", NewsSchema);
export default News;

