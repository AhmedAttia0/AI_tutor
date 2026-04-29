import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Exam from "./pages/exam/Exam";
import StuckPoint from "./pages/stuckPoint/StuckPoint";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="exam" element={<Exam />} />
        <Route path="stuck_point" element={<StuckPoint />} />
      </Routes>
    </div>
  );
}

export default App;
