import mongoose from "mongoose";

const BusinessSettingSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
  timestamps: true,
  });
const BusinessSetting = mongoose.model("BusinessSetting", BusinessSettingSchema);
export default BusinessSetting;

