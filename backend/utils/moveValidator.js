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

//legal moves:
export const legalMoves = (FEN) => {
    const chess = new Chess(FEN)
    return chess.moves();
}

//gameStave evaluator:
export const evaluateGameState = (FEN) => {
    const chess = new Chess(FEN);
    return {
        inCheck: chess.in_check(),
        inCheckmate: chess.in_checkmate(),
        inDraw: chess.in_draw(),
        inStalemate: chess.in_stalemate(),
    };
}