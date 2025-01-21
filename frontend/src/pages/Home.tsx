import { Chessboard } from "react-chessboard";

const Home = () => {
  return (
    <div className="flex w-3/5 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Chessboard  />
    </div>
  );
};

export default Home;
