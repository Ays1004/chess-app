import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    gameId:{
      type: String,
      required: true,
    },
    players: {
      player1Id: { type: String, required: true },
      player2Id: { type: String, required: true },
    },
    moves: [{ type: mongoose.Schema.Types.ObjectId, ref: "Move" }],
    moveCount:{
      type: Number,
      required: true
    },
    result: {
      type: String,
      default: "ongoing",
    },
  },
  { timestamps: true }
);

const Game = mongoose.model("Game", gameSchema);

export default Game;
