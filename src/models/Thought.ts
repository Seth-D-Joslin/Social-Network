import { Schema, model, Document } from "mongoose";
import { reactionSchema } from "./Reaction.js";
import type { iReaction } from "./Reaction.js";

interface iThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: iReaction[];
  reactionCount: number;
}

const formatTimeStamp = (timestamp: Date | undefined): string => {
  return timestamp ? timestamp.toLocaleDateString("en-US") : "";
};

const thoughtSchema = new Schema<iThought>({
  thoughtText: {
    type: String,
    required: true,
    //adds length validation
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Schema.Types.Date,
    //current time
    default: Date.now,
    //getter method that formats time to mm/dd/yyyy
    get: formatTimeStamp as any,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

// another way to implement schema options in thoughtSchema
thoughtSchema.set("toJSON", { getters: true, virtuals: true });
thoughtSchema.set("id", false);

// creates a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//initialize model
const Thought = model("thought", thoughtSchema);

//export model
export default Thought;
