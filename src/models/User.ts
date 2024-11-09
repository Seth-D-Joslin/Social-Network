import { Schema, model, Document, ObjectId } from "mongoose";

interface iUser extends Document {
  username: string;
  email: string;
  thoughts: ObjectId[];
  reactions: ObjectId[];
}

const userSchema = new Schema<iUser>({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/],
  },
});
