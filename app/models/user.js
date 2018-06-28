import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const User = mongoose.model("User", UserSchema);
export default User;
