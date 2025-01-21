import { Chessboard } from "react-chessboard";

const Home = () => {
  return (
    <div className="flex w-3/5 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Chessboard position={'rnbqkbnr/ppp1p1pp/8/3p1p2/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq f6 0 1'} />
    </div>
  );
};

export default Home;
