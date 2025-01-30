import { io } from "socket.io-client";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const socket = io("http://localhost:5000");

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to socket.io");
    });

    socket.on("disconnect", () => {
      console.log("disconnected from socket.io");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);
  return (
    <div className="p-4 w-screen h-screen flex items-center justify-center w-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
