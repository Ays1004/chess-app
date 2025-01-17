import { Chess } from "chess.js";

// validator Function :
const isValidMove = (FEN, move) => {
    const chess = new Chess(FEN)
    mov = chess.move(move);
    if(!mov){
        return { valid: false, message: 'Invalid move' };
    }
    return { valid: true, newFen: chess.fen() };
}

//legal moves:
const legalMoves = (FEN) => {
    const chess = new Chess(FEN)
    return chess.moves();
}

//gameStave evaluator:
function evaluateGameState(FEN) {
    const chess = new Chess(FEN);
    return {
        inCheck: chess.in_check(),
        inCheckmate: chess.in_checkmate(),
        inDraw: chess.in_draw(),
        inStalemate: chess.in_stalemate(),
    };
}