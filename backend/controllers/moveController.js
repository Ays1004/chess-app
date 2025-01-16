import Game from "../models/gameModel.js";

export const postMove = async (req, res) => {
  const { move } = req.body;
  const { id: gameId } = req.params;

  console.log("in postMoVe");

  let game = await Game.findOne({ gameId });

  if (!game) {
    game = await Game.create({
      players: {
        player1Id: 1214124,
        player2Id: 12141246,
      },
      gameId: gameId,
      moves: [],
      moveCount: 0,
    });
  }
};

export const getMove = async (req, res) => {
  console.log("inside getMove");
};
