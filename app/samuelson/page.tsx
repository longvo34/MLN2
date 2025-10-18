"use client"

import Link from "next/link"
import { ArrowLeft, User, Calendar, Award, BookOpen, TrendingUp, Lightbulb } from "lucide-react"

export default function SamuelsonPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Paul Anthony Samuelson</h1>
          <p className="text-xl text-gray-600">Người Mỹ đầu tiên đoạt giải Nobel Kinh tế</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 space-y-6">
              {/* Tiểu sử */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-green-600" />
                  Tiểu sử
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">1915-2009</p>
                      <p className="text-sm text-gray-600">Hương thọ 94 tuổi</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Award className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Nobel Kinh tế 1970</p>
                      <p className="text-sm text-gray-600">Phát triển lý thuyết kinh tế hiện đại</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background */}
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sinh tại Gary, Indiana trong gia đình nhập cư Ba Lan. Học kinh tế tại Đại học Chicago, sau đó cao học
                  tại Harvard dưới sự hướng dẫn của Joseph Schumpeter, Alvin Hansen và Wassily Leontief.
                </p>
              </div>

              {/* Career */}
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Giảng dạy hơn 40 năm tại MIT, đào tạo nhiều nhà kinh tế hàng đầu thế giới như Robert Solow và Joseph
                  Stiglitz.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Theories */}
            <div className="bg-green-600 text-white rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Tư tưởng kinh tế chủ đạo
              </h2>

              <div className="space-y-4">
                <div className="bg-green-500 bg-opacity-50 rounded-lg p-4 border border-green-400">
                  <h3 className="font-bold mb-2">Kinh tế học tổng hợp</h3>
                  <p className="text-green-50">
                    Phối hợp thị trường và Nhà nước. Ngăn hạn can thiệp Keynesian, đại hạn để thị trường phân bổ nguồn
                    lực.
                  </p>
                </div>

                <div className="bg-green-500 bg-opacity-50 rounded-lg p-4 border border-green-400">
                  <h3 className="font-bold mb-2">Toán học hóa kinh tế học</h3>
                  <p className="text-green-50">
                    Sử dụng mô hình toán, độ thị đề làm cho lý thuyết Keynes trở nên chính xác, định lượng và dễ áp
                    dụng.
                  </p>
                </div>

                <div className="bg-green-500 bg-opacity-50 rounded-lg p-4 border border-green-400">
                  <h3 className="font-bold mb-2">Lý thuyết hàng hóa công</h3>
                  <p className="text-green-50">
                    Chi ra vì sao Nhà nước phải cung cấp hàng hóa công công như giáo dục, y tế, một môi trường.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Sự kế thừa
                </h3>
                <p className="text-gray-700 text-sm">Vai trò can thiệp nhà nước khi thị trường thất bại</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                  Nguyên lý nhân số - tăng tốc
                </h3>
                <p className="text-gray-700 text-sm">
                  Giải thích dao động kinh tế theo chu kỳ thông qua hiệu ứng multiplier và accelerator.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white border-l-4 border-green-600 p-6 rounded shadow">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                <span className="text-2xl">💬</span>
                Quote nổi tiếng
              </h3>
              <p className="text-lg italic text-gray-800 mb-3">"Good questions outrank easy answers."</p>
              <p className="text-gray-700 mb-4">Những câu hỏi đúng giá trị hơn những câu trả lời lời để dàng.</p>
              <p className="text-gray-600 text-sm">
                Nhân manh tầm quan trong của việc đặt câu hỏi đúng lời giải để dàng. Thế hiện tính thận khoa học phê
                phán và tư duy phân tích độc lập.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Sản phẩm trí tuệ nổi bật</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Foundations of Economic Analysis</h3>
              <p className="text-sm text-gray-500 mb-4">1947</p>
              <p className="text-gray-700">
                Sử dụng toán học để chứng minh hành vi kinh tế tuân theo nguyên lý tối ưu hóa. Đặt nền móng cho kinh tế
                học định lượng hiện đại.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Economics: An Introductory Analysis</h3>
              <p className="text-sm text-gray-500 mb-4">1948</p>
              <p className="text-gray-700">
                Giáo trình có ảnh hưởng phát thể kỷ 20, tái bản hơn 20 lần, dịch ra hàng chục ngôn ngữ. Hệ thống hóa tri
                thức kinh tế học hiện đại.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">The Pure Theory of Public Expenditure</h3>
              <p className="text-sm text-gray-500 mb-4">1954</p>
              <p className="text-gray-700">
                Xây dựng lý thuyết hàng hóa công, mở ra nhành mới trong kinh tế học công cộng. Xác lập cơ sở cho vai trò
                nhà nước.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vietnam Impact */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Ảnh hưởng tại Việt Nam</h2>

          <div className="bg-white p-8 rounded-lg shadow">
            <p className="text-gray-700 mb-6">
              Từ tương Samuelson du nhập sau Đổi mới 1986 qua các chương trình đào tạo và tổ chức quốc tế.
            </p>

            <p className="text-gray-700 mb-6">
              Cách tiếp cận "tổng hợp tân cổ điển" giúp Việt Nam xây dựng mô hình{" "}
              <strong>kinh tế thị trường định hướng xã hội chủ nghĩa</strong>:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Nhà nước giữ vai trò định hướng và điều tiết vĩ mô</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Thị trường đảm bảo hiệu quả phân bổ nguồn lực</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Chính sách tài khóa - tiền tệ linh hoạt ứng phó chu kỳ</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Phát triển bền vững và phân phối thu nhập công bằng</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Samuelson Economic Synthesis</p>
        </div>
      </footer>
    </main>
  )
}
