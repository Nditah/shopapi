import mongoose from "mongoose";

const MembershipSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });
const Membership = mongoose.model("Membership", MembershipSchema);
export default Membership;

