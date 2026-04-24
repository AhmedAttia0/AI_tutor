"use client";
import { IoIosChatbubbles } from "react-icons/io";

import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { FaRobot } from "react-icons/fa6";

const ChatExamModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 I'm your AI tutor, ask me anything about this question!",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Let me think 🤔 (backend not connected yet)",
        },
      ]);
    }, 700);

    setInput("");
  };
  return (
    <div className="">
      <>
        <div className="flex flex-col gap-4 bg-gradient-to-b from-[#DBEAFE] to-[#FFFFFF] p-7 rounded-xl border-[#DBEAFE] border-[0.063rem]  ">
          <div className="flex flex-row items-center gap-2">
            <div className="text-white bg-gradient-to-b from-[#60A5FA] to-[#3B82F6]  px-2 py-3  rounded-lg">
              <FaRobot className="w-[1.9rem] h-[1.2rem]" />
            </div>
            <div>
              <p className="font-bold text-base text-[#1E3A8A]">
                AI Tutor Assistance
              </p>
              <p className="font-normal text-[#4B5563] text-xs">
                Available for help anytime
              </p>
            </div>
          </div>
          <p className="text-sm text-[#374151] font-normal">
            Stuck on this question? Our AI tutor can provide step-by-step
            guidance without giving away the answer.
          </p>

          <div>
            <Button
              className="bg-white w-full mb-6 border-2 !ring-0 border-[#3B82F6] font-semibold text-base text-[#3B82F6] flex flex-row items-center gap-1 "
              onClick={() => setOpenModal(true)}
            >
              <IoIosChatbubbles className="text-lg transform  scale-x-[-1] -translate-y-[-13%]" />
              Ask AI Tutor{" "}
            </Button>
          </div>
        </div>

        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Terms of Service</ModalHeader>
          <ModalBody>
            <div className=" overflow-y-auto bg-gray-50 rounded-lg p-3 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <TextInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask your question..."
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </>
    </div>
  );
};

export default ChatExamModal;
