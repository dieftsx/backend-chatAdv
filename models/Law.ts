import mongoose, { Document, Schema } from "mongoose";

interface ILaw extends Document {
  title: string;
  content: string;
  updatedAt: Date;
}

const LawSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const Law = mongoose.model<ILaw>("Law", LawSchema);
export default Law;
