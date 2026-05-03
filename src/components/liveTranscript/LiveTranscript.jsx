import { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdMessage } from "react-icons/md";

// الـ messages هتيجي من الباكاند عبر WebSocket أو polling
// لما الباكاند يجهز: استبدل defaultMessages بـ props من الـ API
const defaultMessages = [
  {
    id: 1,
    sender: "tutor", // "tutor" | "user"
    text: "Let's explore the concept of derivatives. A derivative represents the rate of change of a function...",
    time: "2:34 PM",
  },
  {
    id: 2,
    sender: "user",
    text: "Can you explain the power rule?",
    time: "2:35 PM",
    avatarUrl: null, // ← لما الباكاند يبعت صورة المستخدم
  },
  {
    id: 3,
    sender: "tutor",
    text: "Excellent question! The power rule states: if f(x) = xⁿ, then f'(x) = nxⁿ⁻¹",
    time: "2:35 PM",
  },
];

const LiveTranscript = ({
  messages = defaultMessages,
  onSendMessage = () => {}, // ← هتبعت الـ message للباكاند هنا
  onExport = () => {},
}) => {
  const [inputText, setInputText] = useState("");
  const bottomRef = useRef(null);

  // Auto scroll لأخر رسالة
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
            <MdMessage className="text-blue-600 w-4 h-4" />
          </div>
          <h2 className="text-sm font-bold text-gray-900">Live Transcript</h2>
        </div>
        <button
          onClick={onExport}
          className="text-blue-600 text-xs font-semibold hover:text-blue-800 transition"
        >
          Export
        </button>
      </div>

      {/* Messages area */}
      <div className="flex flex-col gap-4 max-h-64 overflow-y-auto mb-4 pr-1 scrollbar-thin">
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.sender === "tutor" ? (
              /* Tutor message — left aligned */
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                  <FaRobot className="text-white w-4 h-4" />
                </div>
                <div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[85%]">
                    <p className="text-sm text-gray-800">{msg.text}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 ml-1">{msg.time}</p>
                </div>
              </div>
            ) : (
              /* User message — right aligned */
              <div className="flex flex-col items-end">
                <div className="flex items-end gap-2">
                  <div className="bg-blue-600 rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[85%]">
                    <p className="text-sm text-white">{msg.text}</p>
                  </div>
                  {msg.avatarUrl ? (
                    <img
                      src={msg.avatarUrl}
                      alt="user"
                      className="w-8 h-8 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center shrink-0 text-xs font-bold text-gray-600">
                      U
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1 mr-10">{msg.time}</p>
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your question..."
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
        />
        <button
          onClick={handleSend}
          className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition shrink-0"
        >
          <IoSend className="text-white w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default LiveTranscript;
