import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    players: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        username: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          enum: ["white", "black"],
          required: true,
        },
      },
    ],
    moves: [{ type: String }],
    status: {
      type: String,
      enum: ["ongoing", "completed", "abandoned"],
      default: "ongoing",
    },
    winner: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

export default Game