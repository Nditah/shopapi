import mongoose from "mongoose";

const MembershipPaymentSchema = mongoose.Schema({
    title: String,
    content: String,
}, {
        timestamps: true,
    });
const MembershipPayment = mongoose.model("MembershipPayment ", MembershipPaymentSchema);
export default MembershipPayment;

