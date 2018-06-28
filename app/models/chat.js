import mongoose from "mongoose";

const ChatSchema = mongoose.Schema({
  title: String,
  content: String,
}, {
    timestamps: true,
  });

const Chat = mongoose.model("Chat", ChatSchema);
export default Chat;
