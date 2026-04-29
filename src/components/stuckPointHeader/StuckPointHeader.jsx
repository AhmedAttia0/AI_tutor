import { LuArrowLeft, LuVideo } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const StuckPointHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-full hover:bg-blue-50"
        >
          <LuArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Stuck Point Selection</h1>
          <p className="text-sm text-slate-500">Select the concept or section where you need help</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          AI Tutor Ready
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
          <LuVideo className="w-4 h-4" />
          Start Live Session
        </button>
      </div>
    </div>
  );
};

export default StuckPointHeader;
