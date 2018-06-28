import mongoose from "mongoose";

const CurrencySettingSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const CurrencySetting = mongoose.model("CurrencySetting", CurrencySettingSchema);
export default CurrencySetting;

