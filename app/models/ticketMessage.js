import mongoose from "mongoose";

const TicketMessageSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const TicketMessage = mongoose.model("TicketMessage", TicketMessageSchema);
export default TicketMessage;
