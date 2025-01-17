import Game from "../models/gameModel.js";
import { isValidMove, setMove } from "../utils/moveValidator.js";

export const postMove = async (req, res) => {
  const { move } = req.body;
  const { id: gameId } = req.params;

  console.log("in postMoVe");

  const game = await Game.findOne({ gameId });

  if (!game) {
    return res.status(404).json({
      error: "Please create a game",
    });
  }

  let FENstring = game.FENstring;

  if (!isValidMove(FENstring, move)) {
    return res.status(404).json({
      error: "Move is not valid",
    });
  }

  FENstring = setMove(FENstring, move);

  game.FENstring = FENstring;

  await game.save();

  return res.status(200).json({
    message: "Move applied successfully",
    fen: game.fen, // Send the updated FEN string back
  });
};

export const getMove = async (req, res) => {
  console.log("inside getMove");
};
