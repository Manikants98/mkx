import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
});

export const Users =
  mongoose.models.users || mongoose.model("users", userSchema);
