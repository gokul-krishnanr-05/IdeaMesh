import mongoose, { Document, Schema, Types } from "mongoose";

export interface IProject extends Document {
  owner: Types.ObjectId;
  title: string;
  description?: string;
  slots: number;
  accepted: Types.ObjectId[];
  isClosed: boolean;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  slots: { type: Number, default: 1, min: 1 },
  accepted: [{ type: Schema.Types.ObjectId, ref: "User" }],
  isClosed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IProject>("Project", ProjectSchema);
