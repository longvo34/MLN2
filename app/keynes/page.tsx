"use client"

import Link from "next/link"
import { ArrowLeft, User, Calendar, MapPin, BookOpen } from "lucide-react"

export default function KeynesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
            Quay lại
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">John Maynard Keynes</h1>
          <p className="text-xl text-gray-600">Cha đẻ của Kinh tế học Vĩ mô Hiện đại</p>
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
                  <User className="w-5 h-5 text-blue-600" />
                  Tiểu sử
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">1883-1946</p>
                      <p className="text-sm text-gray-600">Hương thọ 62 tuổi</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Cambridge, Anh Quốc</p>
                      <p className="text-sm text-gray-600">Nơi sinh và hoạt động chính</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background */}
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Sinh trong gia đình trí thức, cha là nhà kinh tế học John Neville Keynes, mẹ là chính trị gia Florence
                  Ada Keynes. Học tại Eton College và Đại học Cambridge, chịu ảnh hưởng sâu sắc từ nhà kinh tế Alfred
                  Marshall.
                </p>
              </div>

              {/* Bối cảnh lịch sử */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Bối cảnh lịch sử
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Đại khủng hoảng kinh tế 1929-1933 đã chứng minh thị trường không tự điều chỉnh được như các nhà kinh
                  tế cổ điển cho rằng. Thất nghiệp và suy thoái kéo dài, buộc tìm kiếm một lý thuyết mới.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Theories */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Tư tưởng kinh tế chủ đạo
              </h2>

              <div className="space-y-4">
                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4 border border-blue-400">
                  <h3 className="font-bold mb-2">Thị trường không tự điều chỉnh hoàn hảo</h3>
                  <p className="text-blue-50">
                    Tổng cầu quyết định mức sản lượng và việc làm. Khi tổng cầu giảm, nền kinh tế sẽ vào suy thoái.
                  </p>
                </div>

                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4 border border-blue-400">
                  <h3 className="font-bold mb-2">Vai trò của Nhà nước</h3>
                  <p className="text-blue-50">Can thiệp chủ động để kích cầu và ổn định vĩ mô</p>
                </div>

                <div className="bg-blue-500 bg-opacity-50 rounded-lg p-4 border border-blue-400">
                  <h3 className="font-bold mb-2">Chính sách tiền tệ linh hoạt</h3>
                  <p className="text-blue-50">Giảm lãi suất để khuyến khích đầu tư từ nhân, duy trì định tổng cầu.</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
              <p className="text-lg italic text-gray-800 mb-3">
                "Keynes đưa ra học thuyết mới nhằm giải thích nguyên nhân thất nghiệp kéo dài và để xuất vai trò của nhà
                nước trong quản lý kinh tế."
              </p>
              <p className="text-sm text-gray-600">— Tóm tắt tư tưởng Keynes</p>
            </div>

            {/* Famous Quote */}
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded shadow">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
                <span className="text-2xl">💬</span>
                Quote nổi tiếng
              </h3>
              <p className="text-lg italic text-gray-800 mb-3">"In the long run we are all dead."</p>
              <p className="text-gray-700 mb-4">Về lâu dài, tất cả chúng ta đều đã chết.</p>
              <p className="text-gray-600 text-sm">
                Keynes phê bác quan điểm thị trường sẽ tự điều chỉnh trong dài hạn. Chính phủ phải hành động ngay để
                giải quyết thất nghiệp và khủng hoảng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Các tác phẩm chính</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">The Economic Consequences of the Peace</h3>
              <p className="text-sm text-gray-500 mb-4">1919</p>
              <p className="text-gray-700">
                Phê phán Hiệp ước Versailles, cảnh báo về nguy cơ suy sup kinh tế châu Âu. Tác phẩm giúp ông nổi tiếng
                toàn cầu.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">A Treatise on Money</h3>
              <p className="text-sm text-gray-500 mb-4">1930</p>
              <p className="text-gray-700">
                Phân tích mối quan hệ giữa cung tiền, lãi suất và đầu tư. Công trình tiền đề cho lý thuyết kinh tế vĩ mô
                sau này.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2 text-gray-900">The General Theory</h3>
              <p className="text-sm text-gray-500 mb-4">1936</p>
              <p className="text-gray-700">
                Tác phẩm quan trọng nhất, đặt nền móng cho kinh tế học vĩ mô hiện đại. Buộc ngoài của kinh tế học thế kỷ
                XX.
              </p>
            </div>
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
