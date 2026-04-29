import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Exam from "./pages/exam/Exam";
import StuckPoint from "./pages/stuckPoint/StuckPoint";

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="exam" element={<Exam />} />
        <Route path="stuck_point" element={<StuckPoint />} />
      </Routes>
    </div>
  );
}

export default App;
