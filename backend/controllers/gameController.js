import Game from "../models/gameModel.js";
import User from "../models/userModel.js";

export const createGame = async (req, res) => {
  const { gameId, player1Id, player2Id } = req.body;

  if (!gameId || !player1Id || !player2Id) {
    return res.status(400).json({
      error: "Missing required fields: gameId, player1Id, or player2Id",
    });
  }

  try {
    const player1 = await User.findOne({ username: player1Id });
    const player2 = await User.findOne({ username: player2Id });

    if(!player1 || !player2){
        return res.status(404).json({
            error:"One or both players not found",
            missingPlayers: {
                player1: !player1 ? player1Id : null,
                player2: !player2 ? player2Id : null,
            }
        })
    }

    const game = await Game.create({
      players: {
        player1: player1._id,
        player2: player2._id,
      },
      gameId: gameId,
      moves: [],
      moveCount: 0,
    });

    return res.status(201).json({ message: "Game created successfully", game });
  } catch (error) {
    console.error("error creating game:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
