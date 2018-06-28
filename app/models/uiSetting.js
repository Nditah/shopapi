import mongoose from "mongoose";

const UiSettingSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const UiSetting = mongoose.model("UiSetting", UiSettingSchema);
export default UiSetting;
