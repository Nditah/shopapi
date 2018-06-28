import mongoose from "mongoose";

const GeneralSettingSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const GeneralSetting = mongoose.model("GeneralSetting", GeneralSettingSchema);
export default GeneralSetting;

