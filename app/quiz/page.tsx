"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const questions = [
  {
    question: "Ai được xem là cha đẻ của kinh tế học vĩ mô hiện đại?",
    options: ["Paul Samuelson", "John Maynard Keynes", "Adam Smith", "David Ricardo"],
    answer: 1,
  },
  {
    question: "Tác phẩm nổi tiếng nhất của Keynes là gì?",
    options: [
      "Principles of Economics",
      "The General Theory of Employment, Interest and Money",
      "Foundations of Economic Analysis",
      "Capital and Growth",
    ],
    answer: 1,
  },
  {
    question: "Samuelson được trao giải Nobel Kinh tế năm nào?",
    options: ["1969", "1970", "1971", "1972"],
    answer: 1,
  },
  {
    question: "Lý thuyết Keynes nhấn mạnh vai trò của yếu tố nào?",
    options: ["Thị trường tự do", "Chính phủ can thiệp", "Cung tiền cố định", "Lãi suất tự điều chỉnh"],
    answer: 1,
  },
  {
    question: "Samuelson nổi tiếng với việc phát triển khái niệm gì?",
    options: [
      "Cung - cầu cổ điển",
      "Mô hình IS-LM",
      "Lý thuyết tổng quát",
      "Tối ưu hóa vi mô và cân bằng tổng quát",
    ],
    answer: 3,
  },
  {
    question: "Theo Keynes, yếu tố nào thúc đẩy đầu tư?",
    options: ["Lãi suất thấp", "Tiết kiệm cao", "Nhu cầu tiêu dùng", "Thị trường xuất khẩu"],
    answer: 0,
  },
  {
    question: "Paul Samuelson là tác giả của cuốn sách kinh tế học nào rất phổ biến?",
    options: ["The Wealth of Nations", "Economics", "Capital", "Microeconomic Theory"],
    answer: 1,
  },
  {
    question: "Theo Samuelson, kinh tế học là gì?",
    options: [
      "Nghệ thuật quản lý nguồn lực khan hiếm",
      "Nghiên cứu hành vi của con người",
      "Khoa học về sự lựa chọn",
      "Công cụ để làm giàu",
    ],
    answer: 2,
  },
  {
    question: "Keynes phản đối điều gì trong kinh tế cổ điển?",
    options: [
      "Cạnh tranh hoàn hảo",
      "Bàn tay vô hình tự điều tiết thị trường",
      "Cung tạo ra cầu của Say",
      "Tỷ lệ thất nghiệp tự nhiên",
    ],
    answer: 2,
  },
  {
    question: "Samuelson ủng hộ việc kết hợp giữa hai trường phái nào?",
    options: [
      "Cổ điển và Keynes",
      "Tân cổ điển và trọng thương",
      "Tự do và xã hội chủ nghĩa",
      "Cung và cầu",
    ],
    answer: 0,
  },
  {
    question: "Theo Keynes, khi tổng cầu giảm, chính phủ nên làm gì?",
    options: [
      "Giảm chi tiêu",
      "Tăng chi tiêu công và đầu tư",
      "Tăng thuế",
      "Giảm cung tiền",
    ],
    answer: 1,
  },
  {
    question: "Samuelson là người đầu tiên sử dụng gì trong kinh tế học?",
    options: ["Phân tích toán học quy mô lớn", "Mô hình đồ thị", "Số liệu thống kê", "Tâm lý học"],
    answer: 0,
  },
  {
    question: "Tư tưởng chủ đạo của Keynes tập trung vào giai đoạn nào?",
    options: ["Kinh tế dài hạn", "Kinh tế ngắn hạn", "Tăng trưởng dân số", "Thị trường lao động"],
    answer: 1,
  },
  {
    question: "Cuốn “Economics” của Samuelson có ảnh hưởng lớn vì sao?",
    options: [
      "Giới thiệu kiến thức kinh tế cho đại chúng",
      "Là sách giáo khoa chuẩn mực toàn cầu",
      "Trình bày dễ hiểu, hệ thống hóa kiến thức",
      "Tất cả các đáp án trên",
    ],
    answer: 3,
  },
  {
    question: "Cả Keynes và Samuelson đều cho rằng:",
    options: [
      "Nhà nước nên đứng ngoài thị trường",
      "Thị trường luôn tự điều chỉnh",
      "Chính phủ có vai trò quan trọng trong ổn định kinh tế",
      "Không cần chính sách tài khóa",
    ],
    answer: 2,
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Bộ đếm thời gian
  useEffect(() => {
    if (finished || paused) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    timerRef.current = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timerRef.current!);
  }, [timeLeft, finished, paused]);

  const handleAnswer = (index: number) => {
    setSelected(index);
    if (index === questions[current].answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTimeLeft(30);
    } else {
      setFinished(true);
    }
  };

  const handlePause = () => setPaused((p) => !p);

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
    setTimeLeft(30);
    setPaused(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-800">
            ← Quay lại
          </Link>

          {!finished && (
            <button
              onClick={handlePause}
              className={`text-sm px-3 py-1 rounded-full ${
                paused
                  ? "bg-green-100 text-green-600 hover:bg-green-200"
                  : "bg-red-100 text-red-600 hover:bg-red-200"
              }`}
            >
              {paused ? "Tiếp tục" : "Dừng quiz"}
            </button>
          )}
        </div>

        {/* Timer */}
        {!finished && (
          <div className="w-full bg-gray-200 h-2 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        )}

        {/* Main content */}
        {!finished ? (
          <div>
            <p className="text-sm text-gray-600 mb-2">
              Câu {current + 1}/{questions.length} • Thời gian còn lại:{" "}
              <span className="font-semibold">{timeLeft}s</span>
              {paused && <span className="text-red-500 ml-2">(Tạm dừng)</span>}
            </p>

            <h2 className="text-lg font-semibold mb-4">{questions[current].question}</h2>

            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  disabled={selected !== null}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left px-4 py-2 rounded-lg border transition 
                    ${
                      selected === i
                        ? i === questions[current].answer
                          ? "bg-green-100 border-green-400 text-green-700"
                          : "bg-red-100 border-red-400 text-red-700"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Điểm hiện tại: <span className="font-semibold">{score}</span> / {questions.length}
              </p>
              {selected !== null && (
                <button
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                  {current + 1 === questions.length ? "Xem kết quả" : "Tiếp theo"}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Kết quả</h2>
            <p className="text-gray-700 mb-2">
              Bạn trả lời đúng <span className="font-semibold">{score}</span> / {questions.length} câu.
            </p>
            <p className="text-gray-500 mb-6">
              {score < 8
                ? "Cần cố gắng hơn để hiểu Keynes và Samuelson nhé!"
                : "Tuyệt vời! Bạn hiểu rất rõ hai nhà kinh tế học này!"}
            </p>
            <button
              onClick={handleRestart}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Làm lại
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
