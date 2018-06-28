import mongoose from "mongoose";

const SubCategorySchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
export default SubCategory;
