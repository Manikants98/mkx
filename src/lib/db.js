import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection.readyState === 1) {
    return console.log("MongoDB is already connected");
  } else {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  }
}
