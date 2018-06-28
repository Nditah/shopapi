import mongoose from "mongoose";

const ProductImageSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const ProductImage = mongoose.model("ProductImage", ProductImageSchema);
export default ProductImage;
