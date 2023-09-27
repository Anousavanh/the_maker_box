import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    content1: {
      type: String,
      required: true,
    },
    content2: {
      type: String,
      required: true,
    },
    content3: {
      type: String,
      required: true,
    },
    // username: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Post || mongoose.model("Post", postSchema);
