// Gợi ý đặt tên tệp: /components/ComparisonSection.tsx
"use client";

import React, { useMemo } from "react";
import { Scale } from "lucide-react"; // Chỉ import icon được sử dụng

/** ==================================================
 * ĐỊNH NGHĨA TYPE (TYPESCRIPT)
 * ================================================== */
type ComparisonPoint = {
  criterion: string;
  keynes: string;
  samuelson: string;
  desc: string;
};

/** ==================================================
 * DỮ LIỆU SO SÁNH (Đã được type)
 * ================================================== */
const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    criterion: "Vai trò chính",
    keynes: "Nhà cách mạng (Revolutionary)",
    samuelson: "Nhà tổng hợp (Synthesizer)",
    desc: "Keynes thách thức kinh tế học cổ điển; Samuelson dung hòa lý thuyết của Keynes với trường phái tân cổ điển.",
  },
  {
    criterion: "Lý thuyết cốt lõi",
    keynes: "Lý thuyết Tổng quát (General Theory)",
    samuelson: "Tổng hợp Tân cổ điển (Neoclassical Synthesis)",
    desc: "Keynes tập trung vào Tổng cầu; Samuelson kết hợp Tổng cầu (ngắn hạn) và 'bàn tay vô hình' (dài hạn).",
  },
  {
    criterion: "Trọng tâm",
    keynes: "Kinh tế vĩ mô ngắn hạn",
    samuelson: "Cả ngắn hạn (Keynes) & dài hạn (Tân cổ điển)",
    desc: "Keynes nổi tiếng với câu 'Trong dài hạn, tất cả chúng ta đều chết', nhấn mạnh giải quyết khủng hoảng ngay lập tức.",
  },
  {
    criterion: "Phương pháp luận",
    keynes: "Mô tả, trực quan, triết lý",
    samuelson: "Toán học hóa, mô hình hóa",
    desc: "Samuelson (cùng Hicks) chính thức hóa các ý tưởng của Keynes thành các mô hình toán học (như mô hình 45 độ, IS-LM).",
  },
  {
    criterion: "Vai trò Nhà nước",
    keynes: "Thiết yếu & chủ động can thiệp (tài khóa) để đạt toàn dụng.",
    samuelson:
      "Cần thiết trong ngắn hạn, nhưng thị trường tự điều chỉnh trong dài hạn.",
    desc: "Cả hai đều chấp nhận can thiệp, nhưng Samuelson vẫn tin vào hiệu quả thị trường ở trạng thái cân bằng dài hạn.",
  },
  {
    criterion: "Tác phẩm định hình",
    keynes: "The General Theory... (1936)",
    samuelson: "Economics (1948) & Foundations... (1947)",
    desc: "Tác phẩm của Keynes là một luận thuyết; của Samuelson là sách giáo khoa và nền tảng toán học cho ngành.",
  },
];

/** ==================================================
 * COMPONENT SO SÁNH (TSX)
 * ================================================== */
export default function ComparisonSection() {
  const comparisonData = useMemo(() => COMPARISON_POINTS, []);

  return (
    <section id="comparison" className="py-12 px-4 bg-gray-50 border-y">
      <div className="max-w-6xl mx-auto">
        {/* === Section Header === */}
        <div className="flex items-center gap-2 mb-6">
          <Scale className="h-6 w-6 text-gray-900" />
          <h2 className="text-2xl md:text-3xl font-bold">
            So sánh trực tiếp: Keynes vs. Samuelson
          </h2>
        </div>

        {/* === Comparison Table === */}
        <div className="overflow-x-auto rounded-lg border bg-white shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            {/* --- Table Head (ĐÃ ĐỔI THỨ TỰ) --- */}
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  John Maynard Keynes
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  Paul A. Samuelson
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/3"
                >
                  Tiêu chí
                </th>
              </tr>
            </thead>

            {/* --- Table Body (ĐÃ ĐỔI THỨ TỰ) --- */}
            <tbody className="bg-white divide-y divide-gray-200">
              {comparisonData.map((point: ComparisonPoint) => (
                <tr key={point.criterion}>
                  {/* Cột 1: Chỉ nội dung của Keynes */}
                  <td className="px-4 py-4 text-sm text-gray-800 align-top font-medium">
                    {point.keynes}
                  </td>

                  {/* Cột 2: Chỉ nội dung của Samuelson */}
                  <td className="px-4 py-4 text-sm text-gray-800 align-top font-medium">
                    {point.samuelson}
                  </td>

                  {/* Cột 3: Gộp Tiêu chí + Mô tả */}
                  <td className="px-4 py-4 align-top w-1/3">
                    <p className="font-semibold text-gray-900">
                      {point.criterion}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{point.desc}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* === Summary Box (Giữ nguyên) === */}
        <div className="mt-6 rounded-2xl border bg-white p-5">
          <h4 className="text-lg font-semibold">Tóm tắt sự khác biệt</h4>
          <p className="mt-2 text-gray-700">
            Sự khác biệt lớn nhất không phải là đối lập, mà là về{" "}
            <strong>vai trò</strong> và <strong>phương pháp</strong>:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
            <li>
              <strong>Keynes</strong> là nhà tư tưởng cách mạng, đưa ra ý tưởng
              vĩ mô đột phá (tổng cầu) để giải quyết khủng hoảng thực tế (Đại
              Suy thoái).
            </li>
            <li>
              <strong>Samuelson</strong> là nhà hệ thống hóa, ông "toán học hóa"
              các ý tưởng của Keynes và "dung hợp" chúng vào kinh tế học tân cổ
              điển, tạo ra "kinh tế học chính thống" (mainstream) được giảng dạy
              suốt 50 năm sau đó.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
