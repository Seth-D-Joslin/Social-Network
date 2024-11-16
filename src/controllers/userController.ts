import { Request, Response } from "express";
import { User, Thought } from "../models/index.js";

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.params.userId });

    // if (!user) {
    //  return res.status(404).json({ message: "No user with that ID" });
    // }

    res.json(user);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.userId });

    if (!user) {
      return;
    }

    //commented out code is not liked by typescript
    // if (!user) {
    //   return res.status(404).json({ message: "No user with that ID" });
    // }

    await Thought.deleteMany({ _id: { $in: user.thoughts } });
    res.json({ message: "User and associated thoughts deleted!" });
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

export { getUsers, getSingleUser, createUser, deleteUser };
