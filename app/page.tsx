"use client"
import { BookOpen, TrendingUp, Scale, Users, AlertCircle } from "lucide-react"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6 text-4xl">
            <BookOpen className="w-12 h-12" />
            <TrendingUp className="w-12 h-12" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Những Kiến Trúc Sư
            <br />
            <span className="text-cyan-300">Kinh Tế Học Hiện Đại</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Khám phá tư tưởng và di sản của hai nhà kinh tế vĩ đại: <strong>John Maynard Keynes</strong> và{" "}
            <strong>Paul Samuelson</strong>
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection("keynes")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Tìm hiểu về Keynes
            </button>
            <button
              onClick={() => scrollToSection("samuelson")}
              className="border-2 border-blue-300 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Tìm hiểu về Samuelson
            </button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900 text-white p-6 rounded-lg border-2 border-blue-700">
            <p className="text-3xl font-bold mb-2">1883-1946</p>
            <p className="text-blue-100">John Maynard Keynes - Cha đẻ của kinh tế học vĩ mô</p>
          </div>
          <div className="bg-blue-800 text-white p-6 rounded-lg border-2 border-blue-600">
            <p className="text-3xl font-bold mb-2">1915-2009</p>
            <p className="text-blue-100">Paul Samuelson - Người Mỹ đầu tiên đoạt giải Nobel Kinh tế</p>
          </div>
          <div className="bg-blue-700 text-white p-6 rounded-lg border-2 border-blue-500">
            <p className="text-3xl font-bold mb-2">Thế kỷ 20</p>
            <p className="text-blue-100">Định hình tư duy kinh tế toàn cầu</p>
          </div>
        </div>
      </section>

      {/* Keynes Section */}
      <section id="keynes" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">John Maynard Keynes</h2>
          <p className="text-center text-gray-600 mb-12">Cha đẻ của Kinh tế học Vĩ mô Hiện đại</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Biography */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Tiểu sử</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-bold text-gray-900">1883-1946</p>
                  <p className="text-gray-600">Hưởng thọ 62 tuổi</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Cambridge, Anh Quốc</p>
                  <p className="text-gray-600">Nơi sinh và hoạt động chính</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Sinh trong gia đình trí thức, cha là nhà kinh tế học John Neville Keynes, mẹ là chính trị gia Florence
                Ada Keynes. Học tại Eton College và Đại học Cambridge, chịu ảnh hưởng sâu sắc từ nhà kinh tế Alfred
                Marshall.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm italic text-gray-700">
                  "Keynes đưa ra học thuyết mới nhằm giải thích nguyên nhân thất nghiệp kéo dài và để xuất vai trò của
                  nhà nước trong quản lý kinh tế."
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                  Bối cảnh lịch sử
                </h4>
                <p className="text-gray-700">
                  Đại khủng hoảng kinh tế 1929-1933 đã chứng minh thị trường không tự điều chỉnh được như các nhà kinh
                  tế cổ điển cho rằng. Thất nghiệp và suy thoái kéo dài, buộc tìm kiếm một lý thuyết mới.
                </p>
              </div>
            </div>

            {/* Right: Theories */}
            <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Tư tưởng kinh tế chủ đạo</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-700 p-4 rounded-lg border border-blue-500">
                  <h4 className="font-bold mb-2">Thị trường không tự điều chỉnh hoàn hảo</h4>
                  <p className="text-blue-100 text-sm">
                    Tổng cầu quyết định mức sản lượng và việc làm. Khi tổng cầu giảm và nợ công, nền kinh tế sẽ rơi vào
                    suy thoái.
                  </p>
                </div>

                <div className="bg-blue-700 p-4 rounded-lg border border-blue-500">
                  <h4 className="font-bold mb-2">Vai trò của Nhà nước</h4>
                  <p className="text-blue-100 text-sm">
                    Chính sách tài khóa mở rộng, xem nhẹ nạng suất dài hạn. Chính phủ phải hành động ngay để giải quyết
                    thất nghiệp và khủng hoảng.
                  </p>
                </div>

                <div className="bg-blue-700 p-4 rounded-lg border border-blue-500">
                  <h4 className="font-bold mb-2">Chính sách tiền tệ linh hoạt</h4>
                  <p className="text-blue-100 text-sm">
                    Giảm lãi suất để khuyến khích đầu tư từ nhân, duy trì ổn định tổng cầu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
            <p className="text-lg italic text-gray-800 mb-2">"In the long run we are all dead."</p>
            <p className="text-gray-600 text-sm">Về lâu dài, tất cả chúng ta đều chết.</p>
            <p className="text-gray-500 text-xs mt-2">— A Tract on Monetary Reform (1923)</p>
            <p className="text-gray-700 text-sm mt-4">
              Keynes nhấn mạnh quan điểm thị trường sẽ tự điều chỉnh trong dài hạn. Chính phủ phải hành động ngay để
              giải quyết thất nghiệp và khủng hoảng.
            </p>
          </div>
        </div>
      </section>

      {/* Keynes Publications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Sản phẩm trí tuệ nổi bật của Keynes</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">The Economic Consequences of the Peace</h4>
              <p className="text-sm text-gray-500 mb-4">1919</p>
              <p className="text-gray-700 text-sm">
                Phê phán Hiệp ước Versailles, cảnh báo về nguy cơ suy sup kinh tế châu Âu. Tác phẩm giúp ông nổi tiếng
                toàn cầu.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">A Treatise on Money</h4>
              <p className="text-sm text-gray-500 mb-4">1930</p>
              <p className="text-gray-700 text-sm">
                Phân tích mối quan hệ giữa cung tiền, lãi suất và đầu tư. Công trình tiền đề cho lý thuyết kinh tế vĩ mô
                sau này.
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-600 p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">The General Theory</h4>
              <p className="text-sm text-gray-500 mb-4">1936</p>
              <p className="text-gray-700 text-sm">
                Tác phẩm quan trọng nhất, đặt nền móng cho kinh tế học vĩ mô hiện đại. Buộc ngoài của kinh tế học thế kỷ
                XX.
              </p>
            </div>
          </div>

          {/* Keynes Vietnam Impact */}
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ảnh hưởng tại Việt Nam</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Khủng hoảng 2008-2009</h4>
                <p className="text-gray-700 text-sm">
                  Chính phủ triển khai gói kích cơ 8 tỷ USD (8.8% GDP), bao gồm hỗ trợ lãi suất 4%, tăng chi tiêu công,
                  đầu tư hạ tầng. Việt Nam duy trì tăng trưởng 5.3% khi nhiều nước tăng trưởng âm.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Đại dịch COVID-19</h4>
                <p className="text-gray-700 text-sm">
                  Gói hỗ trợ 350 nghìn tỷ đồng (Nghị quyết 43/2022), giảm lãi suất, giảm nợ cho doanh nghiệp. Duy trì
                  tăng trưởng dương 2.9% (2020) và 2.6% (2021) trong khi nhiều nước suy thoái.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Samuelson Section */}
      <section id="samuelson" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Paul Anthony Samuelson</h2>
          <p className="text-center text-gray-600 mb-12">Người Mỹ đầu tiên đoạt giải Nobel Kinh tế</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left: Biography */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Tiểu sử</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-bold text-gray-900">1915-2009</p>
                  <p className="text-gray-600">Hưởng thọ 94 tuổi</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Nobel Kinh tế 1970</p>
                  <p className="text-gray-600">Phát triển lý thuyết kinh tế hiện đại</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Sinh tại Gary, Indiana trong gia đình nhập cư Ba Lan. Học kinh tế tại Đại học Chicago, sau đó cao học
                tại Harvard dưới sự hướng dẫn của Joseph Schumpeter, Alvin Hansen và Wassily Leontief.
              </p>

              <p className="text-gray-700 mb-4">
                Giảng dạy hơn 40 năm tại MIT, đào tạo nhiều nhà kinh tế hàng đầu thế giới như Robert Solow và Joseph
                Stiglitz.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-sm italic text-gray-700">
                  Samuelson kế thừa Keynes, kết hợp mô hình toán học để hình thành kinh tế học tổng hợp (Neoclassical
                  Synthesis) - dung hòa giữa Keynes và kinh tế cổ điển.
                </p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Bối cảnh hình thành
                </h4>
                <p className="text-gray-700">
                  Sau Đại khủng hoảng và Thế chiến II, kinh tế thế giới cần nâng lý luận mới. Học thuyết Keynes ra đời
                  nhưng còn thiếu hệ thống hóa và công cụ định lượng.
                </p>
              </div>
            </div>

            {/* Right: Theories */}
            <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Tư tưởng kinh tế chủ đạo</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-green-700 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold mb-2">Kinh tế học tổng hợp</h4>
                  <p className="text-green-100 text-sm">
                    Phối hợp thị trường và Nhà nước. Ngăn hạn can thiệp Keynesian, đại hạn để thị trường phân bổ nguồn
                    lực.
                  </p>
                </div>

                <div className="bg-green-700 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold mb-2">Toán học hóa kinh tế học</h4>
                  <p className="text-green-100 text-sm">
                    Sử dụng mô hình toán, độ thị để làm cho lý thuyết Keynes trở nên khoa học, định lượng và dễ áp dụng.
                  </p>
                </div>

                <div className="bg-green-700 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold mb-2">Lý thuyết hàng hóa công</h4>
                  <p className="text-green-100 text-sm">
                    Chi ra vì sao Nhà nước phải cung cấp hàng hóa công công như giáo dục, y tế, môi trường.
                  </p>
                </div>

                <div className="bg-green-700 p-4 rounded-lg border border-green-500">
                  <h4 className="font-bold mb-2">Nguyên lý nhân số - tăng tốc</h4>
                  <p className="text-green-100 text-sm">
                    Giải thích dao động kinh tế theo chu kỳ thông qua hiệu ứng multiplier và accelerator.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg mb-12">
            <p className="text-lg italic text-gray-800 mb-2">"Good questions outrank easy answers."</p>
            <p className="text-gray-600 text-sm">Những câu hỏi đúng giá trị hơn những câu trả lời dễ dàng.</p>
            <p className="text-gray-700 text-sm mt-4">
              Nhấn mạnh tầm quan trọng của việc đặt câu hỏi đúng hơn là tìm lời giải để dài. Thể hiện tính thận khoa học
              phê phán và tự duy phân tích độc lập.
            </p>
          </div>
        </div>
      </section>

      {/* Samuelson Publications Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Sản phẩm trí tuệ nổi bật của Samuelson</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Foundations of Economic Analysis</h4>
              <p className="text-sm text-gray-500 mb-4">1947</p>
              <p className="text-gray-700 text-sm">
                Sử dụng toán học để chứng minh hành vi kinh tế tuân theo nguyên lý tối ưu hóa. Đặt nền móng cho kinh tế
                học định lượng hiện đại.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Economics: An Introductory Analysis</h4>
              <p className="text-sm text-gray-500 mb-4">1948</p>
              <p className="text-gray-700 text-sm">
                Giáo trình có ảnh hưởng nhất thế kỷ 20, tái bản hơn 20 lần, dịch ra hàng chục ngôn ngữ. Hệ thống hóa tri
                thức kinh tế học hiện đại.
              </p>
            </div>

            <div className="bg-white border-l-4 border-green-600 p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">The Pure Theory of Public Expenditure</h4>
              <p className="text-sm text-gray-500 mb-4">1954</p>
              <p className="text-gray-700 text-sm">
                Xây dựng lý thuyết hàng hóa công công, mở ra nhành mới trong kinh tế học công cộng. Xác lập cơ sở cho
                vai trò nhà nước.
              </p>
            </div>
          </div>

          {/* Samuelson Vietnam Impact */}
          <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ảnh hưởng tại Việt Nam</h3>
            <p className="text-gray-700 mb-4">
              Từ tưởng Samuelson du nhập sau Đổi mới 1986 qua các chương trình đào tạo và tổ chức quốc tế.
            </p>
            <p className="text-gray-700 mb-4">
              Cách tiếp cận "tổng hợp tân cổ điển" giúp Việt Nam xây dựng mô hình kinh tế thị trường định hướng xã hội
              chủ nghĩa:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Nhà nước giữ vai trò định hướng và điều tiết vĩ mô</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Thị trường đảm bảo hiệu quả phân bổ nguồn lực</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Chính sách tài khóa - tiền tệ linh hoạt ứng phó chu kỳ</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>Phát triển bền vững và phân phối thu nhập công bằng</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <Scale className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">So sánh và Đối chiếu</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="px-6 py-4 text-left font-bold">Tiêu chí</th>
                  <th className="px-6 py-4 text-left font-bold">Keynes</th>
                  <th className="px-6 py-4 text-left font-bold">Kinh tế học có điều</th>
                  <th className="px-6 py-4 text-left font-bold">Samuelson</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Cơ chế thị trường</td>
                  <td className="px-6 py-4 text-gray-700">Thị trường không tự điều chỉnh, có thể suy thoái dài hạn</td>
                  <td className="px-6 py-4 text-gray-700">Hạn chế tối đa, để thị trường tự do hoạt động</td>
                  <td className="px-6 py-4 text-gray-700">Ngăn hạn can thiệp, đại hạn thị trường hiệu quả</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Vai trò Nhà nước</td>
                  <td className="px-6 py-4 text-gray-700">Can thiệp chủ động để kích cầu và ổn định vĩ mô</td>
                  <td className="px-6 py-4 text-gray-700">Hạn chế tối đa, để thị trường tự do hoạt động</td>
                  <td className="px-6 py-4 text-gray-700">Phối hợp giữa thị trường và điều tiết nhà nước</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Nguyên nhân thất nghiệp</td>
                  <td className="px-6 py-4 text-gray-700">Do tổng cầu không đủ duy trì lương</td>
                  <td className="px-6 py-4 text-gray-700">Do tiền lương thực tế cao so với năng suất</td>
                  <td className="px-6 py-4 text-gray-700">Ngăn hạn do tổng cầu, đại hạn do cấu trúc</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Công cụ chính sách</td>
                  <td className="px-6 py-4 text-gray-700">Chính sách tài khóa mở rộng, chi tiêu công</td>
                  <td className="px-6 py-4 text-gray-700">Thị trường tự do, cạnh tranh hoàn hảo</td>
                  <td className="px-6 py-4 text-gray-700">Kết hợp tài khóa và tiền tệ, mô hình toán học</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-900">Phương pháp tiếp cận</td>
                  <td className="px-6 py-4 text-gray-700">Phân tích định tính, trực giác chính sách</td>
                  <td className="px-6 py-4 text-gray-700">Lý thuyết quy luật tự nhiên</td>
                  <td className="px-6 py-4 text-gray-700">Toán học hóa, mô hình kinh tế học</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Criticisms Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-12">
            <div className="flex gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">Phê phán và giới hạn</h2>
            </div>
            <p className="text-gray-700">
              Cả hai học thuyết đều có những hạn chế trong bối cảnh kinh tế toàn cầu hiện đại
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Phê phán Keynes</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Trường phái tiền tệ (Friedman): Đánh giá thấp vai trò tiền tệ, gây lạm phát và nợ công</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Trường phái trong cung: Quá chủ trương tăng chi tiêu công, xem nhẹ nạng suất dài hạn</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Hạn chế trong kinh tế toàn cầu và số hóa hiện đại</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Phê phán Samuelson</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Toán học hóa quá mức làm kinh tế học xa rời thực tế xã hội</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Hâu Keynes: Giản lược tư tưởng Keynes, mất chiều sâu về tâm lý vĩ kỳ vọng</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Mô hình kinh tế hơn lập kém hiệu quả với động vốn toàn cầu và kinh tế số</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-lg mt-8">
            <p className="text-gray-700">
              <strong>Giá trị còn lại:</strong> Dù có hạn chế, cả hai đều đặt nền móng cho kinh tế học hiện đại. Giá trị
              của họ nằm ở tư duy tổng hợp, phương pháp khoa học và khả năng thích ứng với thực tế - nền tảng cho các
              nghiên cứu về phát triển bền vững và kinh tế hành vi sau này.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Kinh Tế Học Vĩ Đại
              </h4>
              <p className="text-gray-400 text-sm">
                Khám phá tư tưởng và di sản của những nhà kinh tế học vĩ đại định hình kinh tế thế giới hiện đại.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Nhà kinh tế</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button onClick={() => scrollToSection("keynes")} className="hover:text-white transition">
                    John Maynard Keynes
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("samuelson")} className="hover:text-white transition">
                    Paul Samuelson
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("keynes")} className="hover:text-white transition">
                    So sánh và Đối chiếu
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Tài nguyên</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>The General Theory (Keynes, 1936)</li>
                <li>Economics (Samuelson, 1948)</li>
                <li>Foundations of Economic Analysis (1947)</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Kinh Tế Học Vĩ Đại. Nội dung dùa trên tài liệu lịch sử thuật và nghiên cứu.</p>
            <p className="mt-2">Made with ❤️ for education</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
