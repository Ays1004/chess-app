import Game from "../models/gameModel.js";
import { Chess } from 'chess.js'

const chess = new Chess()

export const postMove = async (req, res) => {
  const { move } = req.body;
  const { id: gameId } = req.params;

  console.log("in postMoVe");

  let game = await Game.findOne({ gameId });

  if (!game) {
    return res.status(404).json({
      error:"Please create a game"
    })
  }
  console.log("found game")
};

export const getMove = async (req, res) => {
  console.log("inside getMove");
};
