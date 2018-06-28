import mongoose from "mongoose";

const LogoSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const Logo = mongoose.model("Logo", LogoSchema);
export default Logo;

