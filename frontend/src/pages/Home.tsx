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
    <div className="flex flex-col items-center justify-center min-w-96 w-lg mx-auto">
      <div className="w-full p-3 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <div className="w-full ">
        <Chessboard position={position} />
        </div>
        <br />
        <div>
            <input
              type="room"
              placeholder="Enter Room Id"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
      </div>
    </div>
  );
};

export default Home;
