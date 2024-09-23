import mongoose, { Schema, Document, deleteModel } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true, strict: false },
);

export const User = mongoose.model<IUser>("User", UserSchema);

const db = {
  user: User,
};

export default db;
