import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    players: {
      white: { type: String, required: true },
      black: { type: String, required: true },
    },
    moves: [{ type: mongoose.Schema.Types.ObjectId, ref: "Move" }],
    result: {
      type: String,
      default: "ongoing",
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

export default Game;
