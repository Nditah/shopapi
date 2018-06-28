import mongoose from "mongoose";

const VendorInvoiceSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const VendorInvoice = mongoose.model("VendorInvoice", VendorInvoiceSchema);
export default VendorInvoice;
