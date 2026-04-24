import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Exam from "./pages/exam/Exam";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="exam" element={<Exam />} />
      </Routes>
    </div>
  );
}

export default App;
