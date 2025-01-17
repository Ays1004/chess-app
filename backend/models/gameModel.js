import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    gameId: {
      type: String,
      required: true,
    },
    players: {
      player1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      player2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
    FENstring: {
      type: String,
      default: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
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
