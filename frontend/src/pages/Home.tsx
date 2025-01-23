import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const Home = () => {
  const [position, setPosition] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  );
  useEffect(() => {
    socket.on("move", ({ gameId, FENstring }) => {
      setPosition(FENstring);
    });
  }, []);
  return (
    <div className="flex w-3/5 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Chessboard position={position} />
    </div>
  );
};

export default Home;
