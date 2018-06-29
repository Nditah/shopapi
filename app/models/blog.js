
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  kind: { type: String, default: "blog" },
  title: { type: String, required: [true, "Why no Title?"] },
  summary: { type: String, required: [true, "Why no Summary?"] },
  author: { type: String, required: [true, "Why no Author?"] },
  date: { type: String, required: [true, "Why no Date?"] },
  description: { type: String, required: [true, "Why no Description?"] },
  tag: { type: String, required: [true, "Why no Tag?"] },
  blog_category: { type: String, required: [true, "Why no Blog category?"] },
  image: { type: [] },
  view_count: { type: Number, default: 1 },
  standing: {
    type: String,
    enum: ["published", "unpublished", "trashed"],
    default: "unpublished",
    required: [true, "Why no status?"],
  },
  updated: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
