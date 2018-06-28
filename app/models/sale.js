import mongoose from "mongoose";

const SaleSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const Sale = mongoose.model("Sale", SaleSchema);
export default Sale;

