"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle, Loader } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  "Keynes là ai và tư tưởng chính của ông là gì?",
  "Tổng cầu là gì? Tại sao nó quan trọng?",
  "Paul Samuelson đóng góp gì cho kinh tế học?",
  "Neoclassical Synthesis là gì?",
  "Hàng hóa công là gì? Ví dụ về hàng hóa công?",
  "PPF (Production Possibility Frontier) dùng để làm gì?",
  "Chính sách tài khóa mở rộng có ý nghĩa gì?",
  "Ngoại tác (Externalities) ảnh hưởng kinh tế như thế nào?",
  "Vai trò của Nhà nước trong kinh tế học hiện đại là gì?",
];

const SYSTEM_PROMPT = `Bạn là một giáo viên kinh tế học tuyệt vời, chuyên về triết gia kinh tế, đặc biệt là John Maynard Keynes và Paul A. Samuelson. 

Bối cảnh:
- Keynes (1883-1946): Cha đẻ kinh tế vĩ mô hiện đại, tác giả "General Theory of Employment, Interest and Money" (1936)
- Samuelson (1915-2009): Người Mỹ đầu tiên đoạt Nobel Kinh tế, tác giả "Foundations of Economic Analysis" (1947)
- Tổng hợp Tân cổ điển (Neoclassical Synthesis): Dung hòa Keynes và kinh tế cổ điển
- Các khái niệm chính: Tổng cầu, hàng hóa công, ngoại tác, PPF, Isoquant, chính sách tài khóa-tiền tệ

Hướng dẫn:
1. Trả lời bằng tiếng Việt, rõ ràng và dễ hiểu
2. Cộng danh từ chuyên ngành tiếng Anh trong ngoặc đơn khi cần thiết
3. Đưa ra ví dụ cụ thể, đặc biệt là liên quan đến Việt Nam (2008-2009, COVID-19)
4. Giải thích các khái niệm phức tạp một cách đơn giản
5. Nếu câu hỏi không liên quan kinh tế học, hãy lịch sự hướng dẫn về chủ đề chính
6. Khuyến khích tư duy phản biện và đặt câu hỏi

Tông kHz: Thân thiện, khoa học, tương tác`;

export default function EconomicsChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Xin chào! 👋 Tôi là trợ lý AI về triết gia kinh tế. Hôm nay bạn muốn tìm hiểu về Keynes, Samuelson, hay các khái niệm kinh tế học nào? Hãy đặt câu hỏi của bạn!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage = text.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages,
            { role: "user", content: userMessage },
          ],
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      const errorMessage = error?.message || "Lỗi không xác định";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ Lỗi: ${errorMessage}\n\n💡 Gợi ý:\n1. Kiểm tra API key trong .env.local\n2. Đảm bảo API key đúng từ Google AI Studio\n3. Mở console (F12) để xem chi tiết lỗi`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-40 transition-all duration-300 hover:scale-110"
        title="Mở chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Trợ lý Kinh tế học</h3>
              <p className="text-sm text-blue-100">Powered by Gemini Flash 2.5</p>
            </div>
            <button
              aria-label="Đóng chatbot"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-800 p-1 rounded transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Đang suy nghĩ...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && !loading && (
            <div className="border-t p-3 max-h-24 overflow-y-auto bg-white">
              <p className="text-xs font-semibold text-gray-600 mb-2">
                📚 Câu hỏi gợi ý:
              </p>
              <div className="grid grid-cols-1 gap-1">
                {QUICK_QUESTIONS.slice(0, 3).map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-left text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 p-2 rounded transition line-clamp-1"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t p-3 bg-white rounded-b-xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !loading) sendMessage();
                }}
                placeholder="Đặt câu hỏi về kinh tế học..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              />
              <button
                aria-label="Gửi câu hỏi"
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Hỏi về: Keynes, Samuelson, Tổng cầu, Hàng hóa công, Chính
              sách kinh tế...
            </p>
          </div>
        </div>
      )}
    </>
  );
}