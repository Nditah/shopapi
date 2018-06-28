import mongoose from "mongoose";

const BlogCategorySchema = mongoose.Schema({
  title: String,
  content: String,
}, {
  timestamps: true,
  });
const BlogCategory = mongoose.model("BlogCategory", BlogCategorySchema);
export default BlogCategory;
