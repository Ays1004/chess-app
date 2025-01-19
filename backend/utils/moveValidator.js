import { Chess } from "chess.js";

// validator Function :
export const isValidMove = (fen, move) => {
    try {
        const chess = new Chess(fen);
        const result = chess.move(move); // Attempt to make the move
        return result !== null; // Return true if the move is valid, false if not
    } catch (error) {
        return false; // Catch the error and return false if move is invalid
    }
}

//moveSetter:
export const setMove = (fen, move) => {
    const chess = new Chess(fen)
    chess.move(move);
    return chess.fen()
}

//gameStave evaluator:
export const isGameOver = (FEN) => {
    const chess = new Chess(FEN);
    if(chess.isGameOver()){
        return true;
    }
    return false;
}

//legal moves:
export const legalMoves = (FEN) => {
    const chess = new Chess(FEN)
    return chess.moves();
}