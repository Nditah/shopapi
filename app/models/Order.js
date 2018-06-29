
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  order_num: { type: String, required: [true, "Why no Order Number?"] },
  kind: { type: String, required: [true, "Why no Product type?"] },
  customer_id: { type: String, required: [true, "Why no Customer?"] },
  vendor_id: { type: String, required: [true, "Why no Vendor?"] },
  product_array: { type: String, required: [true, "Why no Products?"] },
  payment_array: { type: String, required: [true, "Why no Payment details?"] },
  shipment_array: { type: String, required: [true, "Why no Shipment details?"] },
  delivery_array: { type: String, required: [true, "Why no Delivery details?"] },
  tracking_num: { type: String, required: [true, "Why no Tracking Number?"] },
  vat: { type: Number, required: [true, "Why no Value added tax?"] },
  payable: { type: Number, required: [true, "Why no Payable?"] },
  coupon_id: { type: String },
  order_status: { type: String, required: [true, "Why no Order status?"] },
  first_name: { type: String },
  middle_name: { type: String },
  last_name: { type: String },
  organization: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  postcode: { type: String },
  country: { type: String },
  phone1: { type: String },
  phone2: { type: String },
  email1: { type: String },
  email2: { type: String },
  standing: {
    type: String,
    enum: ["active", "suspended", "trashed"],
    default: "active",
    required: [true, "Why no status?"],
  },
  updated: { type: Date, default: Date.now },

}, {
  timestamps: true,
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;
