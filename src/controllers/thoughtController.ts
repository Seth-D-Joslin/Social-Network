import { Request, Response } from "express";
import { User, Thought } from "../models/index";

const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId });

    // if (!thought) {
    //   return res.status(404).json({ message: "No thought with that ID" });
    // }

    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

const createThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.create(req.body);
    const user = await User.findOneAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );

    if (!user) {
      return;
    }
    // if (!user) {
    //   return res.status(404).json({
    //     message: "Thought created, but found no user with that ID",
    //   });
    // }

    res.json("Created the thought 🎉");
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};

const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.updateThoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    // if (!thought) {
    //   return res.status(404).json({ message: "No thought with this id!" });
    // }

    res.json(thought);
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    return;
  }
};

const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });

    if (!thought) {
      return;
    }

    // if (!thought) {
    //   return res.status(404).json({ message: "No thought with this id!" });
    // }

    const user = await User.findOneAndUpdate(
      { thoughts: req.params.thoughtId },
      { $pull: { thoughts: req.params.thoughtId } },
      { new: true }
    );

    if (!user) {
      return;
    }
    // if (!user) {
    //   return res.status(404).json({
    //     message: "Thought created but no user with this id!",
    //   });
    // }

    res.json({ message: "Thought successfully deleted!" });
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    // if (!thought) {
    //   return res.status(404).json({ message: "No thought with this id!" });
    // }

    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );

    // if (!thought) {
    //   return res.status(404).json({ message: "No thought with this id!" });
    // }

    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
};
