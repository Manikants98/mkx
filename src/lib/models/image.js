import mongoose from "mongoose";

const { Schema } = mongoose;

const ImageSchema = new Schema({
  image: Buffer,
});

export const Images =
  mongoose.models.Image || mongoose.model("Image", ImageSchema);
