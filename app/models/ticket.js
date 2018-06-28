import mongoose from "mongoose";

const TicketSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const Ticket = mongoose.model("Ticket", TicketSchema);
export default Ticket;
