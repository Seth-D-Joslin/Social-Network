import { Schema, model, Document, ObjectId } from "mongoose";
import Thought from "./Thought.js";

interface iUser extends Document {
  username: string;
  email: string;
  thoughts: (typeof Thought)[];
  //self reference array
  friends: ObjectId[];
  friendCount: number;
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
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("id", false);

// creates a virtual called friendCount that retrieves the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

//initialize model
const User = model("user", userSchema);

//export model
export default User;
