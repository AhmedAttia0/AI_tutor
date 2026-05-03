import { FaPencilAlt, FaEraser, FaFont, FaTrash } from "react-icons/fa";
import { BiShapeSquare } from "react-icons/bi";
import { IoMdUndo } from "react-icons/io";
import { MdDesktopWindows } from "react-icons/md";

// الـ whiteboard content هيجي من الباكاند
// لحد ما الباكاند يجهز هنعرض placeholder content
const defaultContent = {
  formula: "∫ f(x) dx = F(x) + C",
  theoremLabel: "The fundamental theorem of calculus:",
  theoremFormula: "d/dx [∫ₐˣ f(t) dt] = f(x)",
};

const InteractiveWhiteboard = ({
  content = defaultContent,
  onPencil = () => {},
  onEraser = () => {},
  onShape = () => {},
  onText = () => {},
  onUndo = () => {},
  onDelete = () => {},
}) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 mb-4 overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 text-blue-700">
          <MdDesktopWindows className="w-4 h-4" />
          <span className="text-sm font-semibold text-gray-800">
            Interactive Whiteboard
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onPencil}
            className="text-gray-500 hover:text-blue-600 transition"
            title="Pencil"
          >
            <FaPencilAlt className="w-4 h-4" />
          </button>
          <button
            onClick={onEraser}
            className="text-gray-500 hover:text-blue-600 transition"
            title="Eraser"
          >
            <FaEraser className="w-4 h-4" />
          </button>
          <button
            onClick={onShape}
            className="text-gray-500 hover:text-blue-600 transition"
            title="Shapes"
          >
            <BiShapeSquare className="w-4 h-4" />
          </button>
          <button
            onClick={onText}
            className="text-gray-500 hover:text-blue-600 transition"
            title="Text"
          >
            <FaFont className="w-4 h-4" />
          </button>
          <button
            onClick={onUndo}
            className="text-gray-500 hover:text-blue-600 transition"
            title="Undo"
          >
            <IoMdUndo className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            className="text-gray-500 hover:text-red-500 transition"
            title="Delete"
          >
            <FaTrash className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Whiteboard area */}
      {/* 
        TODO: لما الباكاند يجهز: 
        - استبدل الـ placeholder بـ canvas أو مكتبة whiteboard زي tldraw
        - اربطه بـ WebSocket للـ real-time collaboration
      */}
      <div className="bg-gray-50 min-h-[400px] flex flex-col items-center justify-center relative px-8 py-10">
        {/* Main formula */}
        {content.formula && (
          <p className="text-3xl font-bold text-blue-900 mb-8 font-serif">
            {content.formula}
          </p>
        )}

        {/* Theorem card */}
        {content.theoremLabel && (
          <div className="bg-white border border-gray-200 rounded-xl px-8 py-5 text-center shadow-sm">
            <p className="text-sm text-gray-600 mb-2">{content.theoremLabel}</p>
            <p className="text-base font-semibold text-blue-700 font-serif">
              {content.theoremFormula}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveWhiteboard;
