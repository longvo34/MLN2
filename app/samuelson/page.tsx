"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Calendar,
  Award,
  BookOpen,
  TrendingUp,
  Lightbulb,
  ExternalLink,
  Quote,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/public/images/samuelson.jpg";

const FACTS = [
  { icon: Calendar, title: "1915–2009", desc: "Hưởng thọ 94 tuổi" },
  {
    icon: Award,
    title: "Nobel Kinh tế (1970)",
    desc: "Người Mỹ đầu tiên đoạt giải",
  },
  {
    icon: User,
    title: "MIT",
    desc: "Giảng dạy hơn 40 năm; đào tạo Solow, Stiglitz…",
  },
  {
    icon: BookOpen,
    title: "Foundations (1947)",
    desc: "Nền tảng phân tích định lượng",
  },
];

// Core ideas
const IDEAS = [
  {
    title: "Kinh tế học tổng hợp (Neoclassical Synthesis)",
    desc: "Dung hòa Keynes (ngắn hạn, tổng cầu) với tân cổ điển (dài hạn, cơ chế giá).",
  },
  {
    title: "Toán học hóa kinh tế học",
    desc: "Mô hình, đồ thị, tối ưu hóa, comparative statics → lý thuyết chính xác và áp dụng được.",
  },
  {
    title: "Hàng hóa công & ngoại tác",
    desc: "Giải thích vì sao Nhà nước cần cung cấp hàng hóa công và điều tiết khi có ngoại tác.",
  },
  {
    title: "PPF & Isoquant",
    desc: "Công cụ trực quan để phân tích hiệu quả, đánh đổi và lựa chọn sản xuất.",
  },
];

// Timeline
const TIMELINE = [
  {
    year: 1915,
    title: "Sinh tại Gary, Indiana (Hoa Kỳ)",
    desc: "Sinh ngày 15/5/1915 tại Gary, bang Indiana, trong gia đình nhập cư gốc Ba Lan, hình thành nền tảng tư tưởng tự do và học thuật từ môi trường công nghiệp Mỹ đầu thế kỷ XX.",
  },
  {
    year: 1935,
    title: "Tốt nghiệp Đại học Chicago",
    desc: "Tốt nghiệp cử nhân kinh tế tại Đại học Chicago, tiếp cận các tư tưởng kinh tế cổ điển và tân cổ điển, khơi dậy niềm đam mê phân tích lý thuyết và mô hình hóa kinh tế.",
  },
  {
    year: 1941,
    title: "Tiến sĩ Harvard & bắt đầu MIT",
    desc: "Hoàn thành tiến sĩ tại Harvard dưới sự hướng dẫn của Schumpeter, Hansen và Leontief; bắt đầu giảng dạy tại MIT, mở đường cho sự nghiệp đào tạo thế hệ nhà kinh tế hàng đầu thế giới.",
  },
  {
    year: 1947,
    title: "Foundations of Economic Analysis",
    desc: "Xuất bản dựa trên luận án tiến sĩ, sử dụng toán học (giải tích, cực trị) để đặt nền móng định lượng cho kinh tế học hiện đại, thống nhất vi mô và vĩ mô trong khung lý thuyết logic.",
  },
  {
    year: 1948,
    title: "Economics: An Introductory Analysis",
    desc: "Ra mắt giáo trình kinh tế học có ảnh hưởng sâu rộng, phổ biến Neoclassical Synthesis qua cách tiếp cận dung hòa Keynes và cổ điển; tái bản hơn 20 lần, dịch ra hàng chục ngôn ngữ.",
  },
  {
    year: 1954,
    title: "The Pure Theory of Public Expenditure",
    desc: "Xây dựng lý thuyết hàng hóa công (không loại trừ, không cạnh tranh) trong bài báo trên Review of Economics and Statistics, xác lập cơ sở khoa học cho vai trò Nhà nước trong phúc lợi xã hội.",
  },
  {
    year: 1970,
    title: "Giải Nobel Kinh tế",
    desc: "Nhận giải Nobel Kinh tế vì những đóng góp phát triển lý thuyết kinh tế hiện đại, đặc biệt là phương pháp toán học hóa và tổng hợp các trường phái tư tưởng.",
  },
  {
    year: 2009,
    title: "Qua đời",
    desc: "Mất ngày 13/12/2009 tại Belmont, Massachusetts, hưởng thọ 94 tuổi, để lại di sản học thuật bền vững qua hàng ngàn bài báo, giáo trình và thế hệ học trò ảnh hưởng toàn cầu.",
  },
];

// Quotes
const QUOTES = [
  {
    quote: "Good questions outrank easy answers.",
    note: "Đề cao tư duy phản biện: đặt câu hỏi đúng quan trọng hơn câu trả lời dễ dãi.",
  },
  {
    quote:
      "Economics is a choice between alternatives all the time. Those are the trade-offs.",
    note: "Kinh tế học là nghệ thuật đánh đổi và chi phí cơ hội.",
  },
  {
    quote:
      "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    note: "Đầu tư/chính sách cần kiên định, lý trí; tránh chạy theo cảm xúc ngắn hạn.",
  },
];

// Comparison (3 cột: Cổ điển/Tân cổ điển / Samuelson)
const COMPARISON = [
  {
    k: "Trọng tâm",
    classical: "Dài hạn, thị trường tự điều chỉnh",
    samuelson: "Dung hòa ngắn–dài hạn (Synthesis)",
  },
  {
    k: "Vai trò Nhà nước",
    classical: "Tối thiểu, để cơ chế giá dẫn dắt",
    samuelson: "Can thiệp có mục tiêu + tôn trọng cơ chế giá",
  },
  {
    k: "Phương pháp",
    classical: "Mô hình tối ưu hóa",
    samuelson: "Hệ thống hóa, định lượng hóa học thuyết Keynes",
  },
  {
    k: "Công cụ",
    classical: "Kỷ luật cung–cầu, kỳ vọng dài hạn",
    samuelson: "Phối hợp chính sách linh hoạt theo chu kỳ",
  },
];

// Works
const WORKS = [
  {
    title: "Foundations of Economic Analysis",
    year: 1947,
    desc: "Sử dụng toán học (cực trị, comparative statics) để đặt nền tảng phân tích định lượng trong kinh tế học.",
    img: "/images/foundations-of-economic-analysis-1947.jpg",
    alt: "Bìa Foundations of Economic Analysis (1947)",
    links: [
      {
        label: "Scribd PDF",
        href: "https://fr.scribd.com/document/583946030/Paul-Samuelson-Foundations-of-Economic-Analysis-Harvard-University-Press-1947?language_settings_changed=English",
      },
    ],
  },
  {
    title: "Economics: An Introductory Analysis",
    year: 1948,
    desc: "Giáo trình kinh tế học có ảnh hưởng sâu rộng; phổ biến Neoclassical Synthesis; tái bản nhiều lần.",
    img: "/images/economics-an-introductory-analysis-1948.png",
    alt: "Bìa Economics: An Introductory Analysis (1948)",
    links: [
      {
        label: "Archive.org",
        href: "https://archive.org/details/economicsintrodu0000paul",
      },
    ],
  },
  {
    title: "The Pure Theory of Public Expenditure",
    year: 1954,
    desc: "Xây dựng lý thuyết hàng hóa công (không loại trừ, không cạnh tranh) → cơ sở khoa học cho vai trò Nhà nước.",
    img: "/images/pure-theory-of-public-expenditure-1954.png",
    alt: "Bài báo The Pure Theory of Public Expenditure (1954)",
    links: [
      { label: "DOI/JSTOR", href: "https://www.jstor.org/stable/1925895" },
    ],
  },
];

// Gallery (có thể cập nhật thêm khi bạn bổ sung ảnh)
const GALLERY = [
  {
    src: "/images/hero-samuelson-mit-portrait.jpg",
    alt: "Paul A. Samuelson tại MIT",
  },
  {
    src: "/images/foundations-of-economic-analysis-1947.jpg",
    alt: "Bìa Foundations (1947)",
  },
  {
    src: "/images/economics-an-introductory-analysis-1948.png",
    alt: "Bìa Economics (1948)",
  },
  {
    src: "/images/pure-theory-of-public-expenditure-1954.png",
    alt: "Bài báo về hàng hóa công (1954)",
  },
];

// Critiques
const CRITIQUES = [
  {
    title: "Toán học hóa & khoảng cách với đời sống thực tế",
    body: "Mặc dù có ảnh hưởng sâu rộng, học thuyết của Samuelson đã vấp phải phê phán từ nhiều học giả về việc sử dụng quá nhiều công cụ toán học, khiến kinh tế học trở nên trừu tượng và xa rời đời sống xã hội cũng như yếu tố con người. Các nhà phê phán như Joan Robinson (hậu Keynes) và trường phái kinh tế học hành vi (behavioral economics) cho rằng cách tiếp cận định lượng của Samuelson, dù khoa học, lại bỏ qua các yếu tố phi lý tính, cảm xúc và bối cảnh văn hóa – xã hội, dẫn đến các mô hình lý tưởng hóa không phản ánh đúng sự phức tạp của hành vi con người trong thực tế. Ví dụ, trong khủng hoảng tài chính 2008, các mô hình toán học hóa của Samuelson đã bị chỉ trích vì không dự báo được 'bong bóng tài chính' do kỳ vọng phi lý, nhấn mạnh nhu cầu bổ sung yếu tố tâm lý học vào phân tích kinh tế.",
  },
  {
    title: "Giản lược tư tưởng Keynes so với hậu-Keynes và trường phái thể chế",
    body: "Các nhà hậu Keynes như Paul Davidson và trường phái thể chế (Thorstein Veblen, John R. Commons) phê phán Samuelson vì đã giản lược tư tưởng Keynes, làm mất đi chiều sâu phân tích về tâm lý, bất định và vai trò của kỳ vọng trong nền kinh tế. Trong khi Keynes nhấn mạnh sự bất ổn cố hữu của chủ nghĩa tư bản và nhu cầu can thiệp dựa trên trực giác chính sách, Samuelson lại hệ thống hóa nó thành các mô hình cân bằng toán học, loại bỏ khía cạnh 'nghệ thuật' và 'bất định cơ bản' (fundamental uncertainty). Điều này, theo các nhà phê phán, đã biến kinh tế học thành một khoa học 'giả định lý tưởng', bỏ qua vai trò của thể chế xã hội, quyền lực và xung đột giai cấp – những yếu tố then chốt trong việc giải thích bất bình đẳng và khủng hoảng, như được thấy trong các phân tích về stagflation những năm 1970.",
  },
  {
    title: "Giới hạn trong bối cảnh toàn cầu hóa, chuyển đổi số và khủng hoảng môi trường",
    body: "Trong bối cảnh thế kỷ XXI với toàn cầu hóa sâu rộng, chuyển đổi số và khủng hoảng môi trường ngày càng cấp bách, mô hình kinh tế hỗn hợp truyền thống của Samuelson bộc lộ những giới hạn rõ nét. Các công cụ tài khóa – tiền tệ kinh điển mà ông phát triển có xu hướng kém hiệu quả hơn khi đối mặt với dòng vốn xuyên biên giới biến động (như trong khủng hoảng tài chính châu Á 1997 hay 2008), kinh tế số nơi các nền tảng công nghệ thống trị (ví dụ, mô hình gig economy của Uber làm méo mó lao động truyền thống), và bất bình đẳng toàn cầu gia tăng (như phân tích của Thomas Piketty về r > g). Hơn nữa, các mô hình của Samuelson ít chú trọng đến bền vững môi trường, khiến chúng khó áp dụng cho các thách thức như biến đổi khí hậu và chuyển đổi năng lượng xanh. Do đó, cần có sự mở rộng bằng cách tích hợp kinh tế học hành vi, kinh tế học môi trường và chính sách toàn cầu hóa để thích ứng với thế giới hậu COVID-19 và địa chính trị phức tạp.",
  },
];

/* ---------------------------------------------
 * Small UI helpers
 * -------------------------------------------*/
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold mb-4 scroll-mt-24" id={String(children)}>
      {children}
    </h2>
  );
}

function Accordion({ items }: { items: { title: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y rounded-xl border bg-white">
      {items.map((it, idx) => (
        <div key={it.title} className="p-4">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
            aria-controls={`acc-${idx}`}
          >
            <span className="font-semibold">{it.title}</span>
            <ChevronDown
              className={`h-5 w-5 transition-transform ${
                open === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`acc-${idx}`}
            className={`grid transition-all duration-200 ease-out ${
              open === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-70"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pt-3 text-gray-700">{it.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SamuelsonPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-green-700 hover:text-green-800"
          >
            <ArrowLeft className="w-5 h-5" />
            Trang chủ
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden text-center flex items-center justify-center">
        {/* BG image (z-0) */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="John Maynard Keynes trên bìa Time"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/0" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Paul Anthony Samuelson
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700">
            Người Mỹ đầu tiên đoạt giải Nobel Kinh tế
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border shadow-sm p-6 space-y-6 bg-white">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-green-700" /> Tiểu sử ngắn
              </h3>
              <ul className="space-y-4">
                {FACTS.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <Icon className="w-5 h-5 text-green-700 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-700 leading-relaxed">
                Học kinh tế tại Đại học Chicago; cao học tại Harvard
                (Schumpeter, Hansen, Leontief). Giảng dạy tại MIT hơn 40 năm;
                ảnh hưởng tới các nhà kinh tế hàng đầu như Robert Solow và
                Joseph Stiglitz.
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Ideas */}
            <section className="rounded-2xl bg-gradient-to-br from-green-700 to-green-800 text-white p-7">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6" /> Tư tưởng kinh tế chủ đạo
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {IDEAS.map((it) => (
                  <div
                    key={it.title}
                    className="rounded-xl border border-white/20 bg-white/10 p-4"
                  >
                    <p className="font-semibold mb-1">{it.title}</p>
                    <p className="text-white/90">{it.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Concepts (two promos) */}
            <section className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-700" /> Sự kế thừa
                </h3>
                <p className="text-gray-700 text-sm">
                  Vai trò can thiệp Nhà nước khi thị trường thất bại; tôn trọng
                  cơ chế giá trong dài hạn.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-700 p-4 rounded">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-green-700" /> Nguyên lý
                  nhân số – tăng tốc
                </h3>
                <p className="text-gray-700 text-sm">
                  Mô tả dao động chu kỳ qua hiệu ứng multiplier & accelerator
                  trong đầu tư và tổng cầu.
                </p>
              </div>
            </section>

            {/* Timeline */}
            <section>
              <SectionTitle>Timeline</SectionTitle>
              <ol className="relative border-s-2 border-green-100 ms-3">
                {TIMELINE.map((t) => (
                  <li key={t.year} className="mb-6 ms-4">
                    <div className="absolute w-3 h-3 bg-green-700 rounded-full -start-1.5 mt-1.5" />
                    <time className="text-sm text-gray-500">{t.year}</time>
                    <h3 className="text-base font-semibold text-gray-900">
                      {t.title}
                    </h3>
                    <p className="text-gray-700">{t.desc}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Quote block */}
            <section className="rounded-xl border p-6 bg-green-50">
              <div className="space-y-3">
                {QUOTES.map((q, i) => (
                  <figure key={i} className="">
                    <blockquote className="text-lg italic text-gray-800 flex gap-2">
                      <Quote className="w-5 h-5 text-green-700 mt-1" />
                      <span>“{q.quote}”</span>
                    </blockquote>
                    {q.note && (
                      <figcaption className="text-sm text-gray-600 ms-7">
                        {q.note}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>

            {/* Comparison */}
            <section>
              <SectionTitle>So sánh nhanh</SectionTitle>
              <div className="overflow-x-auto rounded-xl border">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr className="[&>th]:px-4 [&>th]:py-3 [&>th]:text-left [&>th]:font-semibold">
                      <th>Tiêu chí</th>
                      <th>Cổ điển/Tân cổ điển</th>
                      <th>Samuelson (Tổng hợp)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {COMPARISON.map((row) => (
                      <tr key={row.k} className="[&>td]:px-4 [&>td]:py-3">
                        <td className="font-medium text-gray-800">{row.k}</td>
                        <td className="text-gray-700">{row.classical}</td>
                        <td className="text-gray-700">{row.samuelson}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Works */}
            <section>
              <SectionTitle>Sản phẩm trí tuệ nổi bật</SectionTitle>
              <div className="grid md:grid-cols-3 gap-6">
                {WORKS.map((w) => (
                  <article
                    key={w.title}
                    className="rounded-xl border shadow-sm overflow-hidden bg-white"
                  >
                    <div className="relative h-40">
                      <Image
                        src={w.img}
                        alt={w.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-bold">{w.title}</h3>
                      <p className="text-sm text-gray-500">{w.year}</p>
                      <p className="text-sm text-gray-700">{w.desc}</p>
                      {w.links?.length ? (
                        <div className="pt-2 flex flex-wrap gap-2">
                          {w.links.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-green-700 hover:text-green-800 text-sm"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Gallery */}
            <section>
              <SectionTitle>Hình ảnh tư liệu</SectionTitle>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&_img]:mb-4">
                {GALLERY.map((g) => (
                  <figure key={g.src} className="break-inside-avoid">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="rounded-xl border shadow-sm w-full h-auto object-cover"
                    />
                    <figcaption className="mt-2 text-xs text-gray-600">
                      {g.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* Critique */}
            <section>
              <SectionTitle>Phê phán & giới hạn</SectionTitle>
              <Accordion items={CRITIQUES} />
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-gray-300">
            Ảnh/nguồn tham khảo: JSTOR/DOI, HUP, MIT Libraries, Nobel Prize,
            Wikimedia Commons… (thêm cụ thể sau).
          </p>
          <p className="text-gray-400">© 2025 Samuelson Economic Synthesis</p>
        </div>
      </footer>
    </main>
  );
}