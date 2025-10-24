"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  User,
  Calendar,
  MapPin,
  BookOpen,
  Landmark,
  Library,
  ExternalLink,
  Quote,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";

import heroImg from "@/public/images/image.png";
import { useState } from "react";

const FACTS = [
  { icon: Calendar, title: "1883–1946", desc: "Hưởng thọ 62 tuổi" },
  {
    icon: MapPin,
    title: "Cambridge, Anh Quốc",
    desc: "Nơi sinh & hoạt động chính",
  },
  {
    icon: Landmark,
    title: "Bretton Woods (1944)",
    desc: "Định hình IMF & World Bank",
  },
  {
    icon: Library,
    title: "General Theory (1936)",
    desc: "Nền móng kinh tế vĩ mô hiện đại",
  },
];

// Core ideas
const IDEAS = [
  {
    title: "Thị trường không luôn tự điều chỉnh",
    desc: "Tổng cầu quyết định sản lượng & việc làm; nền kinh tế có thể mắc kẹt ở trạng thái thất nghiệp.",
  },
  {
    title: "Vai trò chủ động của Nhà nước",
    desc: "Dùng tài khóa mở rộng, đầu tư công, an sinh để kích cầu và ổn định vĩ mô.",
  },
  {
    title: "Chính sách tiền tệ linh hoạt",
    desc: "Giảm lãi suất, duy trì thanh khoản để khuyến khích đầu tư tư nhân.",
  },
  {
    title: "Kỳ vọng & tâm lý thị trường",
    desc: "Niềm tin ảnh hưởng mạnh tới quyết định tiêu dùng & đầu tư.",
  },
];

// Comparative highlights
const COMPARISON = [
  {
    k: "Cơ chế thị trường",
    classic: "Tự điều chỉnh về cân bằng thông qua giá cả",
    keynes: "Có thể suy thoái kéo dài, cần hỗ trợ tổng cầu",
  },
  {
    k: "Vai trò Nhà nước",
    classic: "Hạn chế tối đa (bàn tay vô hình)",
    keynes: "Can thiệp chủ động để ổn định vĩ mô",
  },
  {
    k: "Thất nghiệp",
    classic: "Do lương thực tế cao",
    keynes: "Do thiếu tổng cầu",
  },
  {
    k: "Mục tiêu chính sách",
    classic: "Cân bằng dài hạn tự nhiên",
    keynes: "Phục hồi việc làm, ổn định ngắn hạn",
  },
  {
    k: "Công cụ chính sách",
    classic: "Thị trường tự do, cạnh tranh hoàn hảo",
    keynes: "Tài khóa mở rộng; tiền tệ linh hoạt",
  },
];

// Vietnam cases (badges)
const VN_STATS = [
  { label: "Kích cầu 2009", value: "≈ 8,8% GDP" },
  { label: "GDP 2009", value: "5,3%" },
  { label: "COVID-19 2020", value: "2,9% tăng trưởng" },
  { label: "COVID-19 2021", value: "2,6% tăng trưởng" },
];

// Works with refs (👉 đồng bộ path vào /public/images/keynes/)
const WORKS = [
  {
    title: "The Economic Consequences of the Peace",
    year: 1919,
    desc: "Phê phán Hiệp ước Versailles và dự báo hệ lụy kinh tế–chính trị châu Âu.",
    links: [
      {
        label: "Đọc bản gốc (OLL)",
        href: "https://oll.libertyfund.org/titles/keynes-the-economic-consequences-of-the-peace",
      },
    ],
    img: "/images/hoi-nghi.jpg",
    alt: "Hội nghị Hòa bình Versailles 1919",
  },
  {
    title: "A Treatise on Money",
    year: 1930,
    desc: "Tiền đề cho lý thuyết tổng cầu; quan hệ giữa cung tiền, lãi suất và đầu tư.",
    links: [
      {
        label: "PDF (Archive.org)",
        href: "https://ia601502.us.archive.org/4/items/in.ernet.dli.2015.28575/2015.28575.A-Treatise-On-Money.pdf",
      },
    ],
    img: "/images/ban-tay-vo-hinh.jpg",
    alt: "Ẩn dụ ‘bàn tay vô hình’ và vai trò Nhà nước",
  },
  {
    title: "The General Theory of Employment, Interest and Money",
    year: 1936,
    desc: "Tác phẩm đặt nền móng cho kinh tế học vĩ mô hiện đại và Keynesianism.",
    links: [
      {
        label: "Wiki",
        href: "https://en.wikipedia.org/wiki/The_General_Theory_of_Employment,_Interest_and_Money",
      },
    ],
    img: "/images/keynes-writing.jpg",
    alt: "Keynes đang viết bản thảo",
  },
];

// Timeline
const TIMELINE = [
  {
    year: 1883,
    title: "Sinh ra tại Cambridge",
    desc: "Sinh ngày 5/6/1883 tại Cambridge, Anh Quốc, trong gia đình trí thức: cha là nhà kinh tế John Neville Keynes, mẹ là nhà hoạt động xã hội Florence Ada Keynes, hình thành nền tảng học thuật từ sớm.",
  },
  {
    year: 1906,
    title: "Tốt nghiệp Đại học Cambridge",
    desc: "Tốt nghiệp xuất sắc tại King's College, Cambridge, chịu ảnh hưởng sâu sắc từ nhà kinh tế Alfred Marshall và nhóm triết học Cambridge Apostles, khơi dậy niềm đam mê toán học, triết học và kinh tế học.",
  },
  {
    year: 1915,
    title: "Gia nhập Bộ Tài chính Anh",
    desc: "Bắt đầu sự nghiệp hành chính tại Treasury (Bộ Tài chính Anh), mở đường cho vai trò cố vấn kinh tế quốc tế, đặc biệt trong bối cảnh Chiến tranh Thế giới thứ nhất.",
  },
  {
    year: 1919,
    title: "Versailles & sách đầu tay",
    desc: "Tham gia Hội nghị Hòa bình Versailles với vai trò cố vấn kinh tế; xuất bản The Economic Consequences of the Peace, phê phán gay gắt Hiệp ước Versailles và dự báo hệ lụy kinh tế–chính trị châu Âu.",
  },
  {
    year: 1930,
    title: "A Treatise on Money",
    desc: "Xuất bản hai tập về tiền tệ: thuần túy & ứng dụng; phân tích mối quan hệ giữa cung tiền, lãi suất và đầu tư, đặt nền tảng cho mô hình tổng cầu và lý thuyết vĩ mô sau này.",
  },
  {
    year: 1936,
    title: "The General Theory…",
    desc: "Ra mắt kiệt tác The General Theory of Employment, Interest and Money, cách mạng tư duy về vai trò Nhà nước, tổng cầu và việc làm, đặt nền móng cho kinh tế học vĩ mô hiện đại.",
  },
  {
    year: 1944,
    title: "Bretton Woods",
    desc: "Dẫn dắt phái đoàn Anh tại Hội nghị Bretton Woods, định hình hệ thống tiền tệ quốc tế hậu chiến qua việc thành lập IMF và World Bank, thúc đẩy ổn định toàn cầu.",
  },
  {
    year: 1946,
    title: "Qua đời",
    desc: "Mất ngày 21/4/1946 tại Tilton, Sussex, Anh Quốc, hưởng thọ 62 tuổi, để lại di sản tư tưởng Keynesianism ảnh hưởng sâu sắc đến chính sách kinh tế thế giới.",
  },
];

// Quotes
const QUOTES = [
  {
    quote: "In the long run we are all dead.",
    meta: "Keynes (1923), A Tract on Monetary Reform",
    note: "Phản biện chờ 'dài hạn' tự điều chỉnh; cần hành động ngắn hạn.",
    attributed: false,
  },
  {
    quote:
      "The difficulty lies not so much in developing new ideas as in escaping from old ones.",
    meta: "Keynes (1936), The General Theory…",
    note: "Đổi mới tư duy chính sách; vượt mô hình cũ.",
    attributed: false,
  },
  {
    quote:
      "When my information changes, I alter my conclusions. What do you do, sir?",
    meta: "Often attributed to Keynes",
    note: "Câu gán (apocryphal) – nên ghi chú khi trích dẫn công khai.",
    attributed: false,
  },
];

// Gallery (ending) — 👉 tên file chữ thường trong /public/images/keynes
const GALLERY = [
  {
    src: "/images/keynes-va-nhom-bloomsbury.jpg",
    alt: "Keynes và nhóm Bloomsbury/Cambridge Apostles",
  },
  { src: "/images/keynes-tre.jpg", alt: "Keynes thời trẻ" },
  { src: "/images/keynes-gia.jpg", alt: "Keynes giai đoạn cuối đời" },
];

// Critiques
const CRITIQUES = [
  {
    title: "Trường phái tiền tệ (Monetarist) do Milton Friedman khởi xướng",
    body: "Dù có đóng góp to lớn trong việc định hình nền tảng của kinh tế học vĩ mô hiện đại, học thuyết Keynes vẫn vấp phải nhiều phê phán từ trường phái tiền tệ, đặc biệt do Milton Friedman dẫn dắt. Friedman cho rằng Keynes đã đánh giá thấp vai trò của tiền tệ trong ổn định kinh tế vĩ mô. Việc mở rộng chi tiêu công và gia tăng cung tiền để kích cầu, như Keynes đề xuất, có thể tạo ra tác động tích cực ngắn hạn nhưng lại dẫn đến lạm phát, thâm hụt ngân sách và nợ công cao trong dài hạn. Ông lập luận rằng, thay vì can thiệp mạnh mẽ bằng tài khóa, việc kiểm soát lượng cung tiền mới là chìa khóa duy trì ổn định giá cả và tăng trưởng bền vững, như đã chứng minh qua các chính sách tiền tệ chặt chẽ ở Mỹ những năm 1980 dưới thời Paul Volcker.",
  },
  {
    title: "Trường phái trọng cung (Supply-side Economics) trong thập niên 1970–1980",
    body: "Bên cạnh đó, trường phái trọng cung nổi lên mạnh mẽ vào thập niên 1970–1980, đặc biệt trong giai đoạn 'stagflation' (lạm phát cao đi kèm suy thoái kinh tế), đã chỉ trích học thuyết Keynes vì thất bại trong việc giải thích và xử lý hiện tượng này. Các nhà kinh tế trọng cung, như Arthur Laffer với đường cong Laffer nổi tiếng, phê phán Keynes vì quá chú trọng vào tổng cầu – tức chi tiêu và tiêu dùng – mà xem nhẹ các yếu tố thúc đẩy năng suất dài hạn như đầu tư tư nhân, đổi mới công nghệ, giáo dục và cải thiện môi trường kinh doanh. Họ lập luận rằng để đạt phát triển bền vững, chính phủ cần ưu tiên giảm thuế, khuyến khích sản xuất và tự do hóa thị trường hơn là mở rộng chi tiêu công, như được áp dụng thành công trong 'Reaganomics' tại Mỹ, giúp giảm lạm phát và thúc đẩy tăng trưởng mà không rơi vào bẫy nợ công.",
  },
  {
    title: "Giới hạn trong bối cảnh thế kỷ XXI",
    body: "Trong bối cảnh thế kỷ XXI, khi nền kinh tế toàn cầu chịu tác động mạnh mẽ từ toàn cầu hóa, công nghệ số và kinh tế tri thức, những giới hạn của học thuyết Keynes càng bộc lộ rõ nét hơn bao giờ hết. Các công cụ tài khóa truyền thống như tăng chi tiêu công, hỗ trợ doanh nghiệp, giảm thuế tạm thời không còn phát huy hiệu quả mạnh mẽ như trước trong việc kích thích tổng cầu, nhất là trong môi trường số hóa nơi lao động tự do và nền kinh tế gig phát triển, hay chuỗi cung ứng toàn cầu dễ bị gián đoạn bởi đại dịch hoặc xung đột địa chính trị. Do đó, cần có sự phối hợp linh hoạt hơn giữa chính sách tài khóa, tiền tệ và các biện pháp cấu trúc như đầu tư vào giáo dục số và chuyển đổi xanh, để thích ứng với những thách thức mới như bất bình đẳng thu nhập gia tăng và biến đổi khí hậu.",
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

export default function KeynesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-transparent" />
        </div>

        {/* Foreground content (z-10) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            John Maynard Keynes
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700">
            Cha đẻ của Kinh tế học Vĩ mô hiện đại
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border shadow-sm p-6 space-y-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" /> Tiểu sử ngắn
              </h3>
              <ul className="space-y-4">
                {FACTS.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex gap-3">
                    <Icon className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="text-sm text-gray-700 leading-relaxed">
                Sinh trong gia đình trí thức (cha: John Neville Keynes; mẹ:
                Florence Ada Keynes). Học tại Eton & Cambridge, chịu ảnh hưởng
                sâu sắc từ Alfred Marshall và nhóm Cambridge Apostles.
              </div>
              <div>
                <h4 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <BookOpen className="w-5 h-5 text-blue-600" /> Bối cảnh lịch
                  sử
                </h4>
                <p className="text-sm text-gray-700">
                  Đại khủng hoảng 1929–1933 cho thấy thị trường không tự điều
                  chỉnh như kinh tế học cổ điển kỳ vọng; thất nghiệp kéo dài đòi
                  hỏi khung tư duy mới về tổng cầu & chính sách.
                </p>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">
            {/* Ideas */}
            <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-7">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6" />
                Tư tưởng kinh tế chủ đạo
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

            {/* Timeline */}
            <section>
              <SectionTitle>Timeline</SectionTitle>
              <ol className="relative border-s-2 border-blue-100 ms-3">
                {TIMELINE.map((t) => (
                  <li key={t.year} className="mb-6 ms-4">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -start-1.5 mt-1.5" />
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
            <section className="rounded-xl border p-6 bg-blue-50">
              <div className="flex items-start gap-3">
                <Quote className="w-6 h-6 text-blue-700 shrink-0" />
                <div className="space-y-3">
                  {QUOTES.map((q, i) => (
                    <figure key={i} className="">
                      <blockquote className="text-lg italic text-gray-800">
                        “{q.quote}”
                      </blockquote>
                      <figcaption className="text-sm text-gray-600">
                        — {q.meta}
                        {q.attributed && (
                          <span className="ml-2 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-amber-700 bg-amber-50">
                            <AlertTriangle className="h-3.5 w-3.5" /> attributed
                          </span>
                        )}
                      </figcaption>
                      {q.note && (
                        <p className="mt-1 text-xs text-gray-600">{q.note}</p>
                      )}
                    </figure>
                  ))}
                </div>
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
                      <th>Kinh tế học cổ điển</th>
                      <th>Kinh tế học Keynes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {COMPARISON.map((row) => (
                      <tr key={row.k} className="[&>td]:px-4 [&>td]:py-3">
                        <td className="font-medium text-gray-800">{row.k}</td>
                        <td className="text-gray-700">{row.classic}</td>
                        <td className="text-gray-700">{row.keynes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Vietnam badges */}
            <section>
              <SectionTitle>Vận dụng tại Việt Nam</SectionTitle>
              <div className="flex flex-wrap gap-3">
                {VN_STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-full border px-4 py-2 text-sm bg-white shadow-sm"
                  >
                    <span className="font-semibold">{s.label}:</span>{" "}
                    <span className="text-blue-700">{s.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Gói kích cầu 2008–2009 (hỗ trợ lãi suất 4%, đầu tư công, miễn
                giảm thuế) giúp GDP 2009 đạt 5,3%. Giai đoạn COVID-19, gói tài
                khóa theo NQ 43/2022 cùng chính sách tiền tệ linh hoạt giúp Việt
                Nam duy trì tăng trưởng dương.
              </p>
            </section>

            {/* Works */}
            <section>
              <SectionTitle>Các tác phẩm chính</SectionTitle>
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
                      {w.links.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2">
                          {w.links.map((l) => (
                            <Link
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                            >
                              <ExternalLink className="w-4 h-4" />
                              {l.label}
                            </Link>
                          ))}
                        </div>
                      )}
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
                    <figcaption className="mt-2 text-sm font-semibold text-gray-600">
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
      <footer className="bg-gray-950 text-white py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-gray-300">
            Tài liệu tham khảo: OLL, Internet Archive, các nguồn bạn cung cấp.
            Câu nói gắn nhãn "attributed" có thể không phải phát ngôn xác thực
            của Keynes.
          </p>
          <p className="text-gray-400">© 2025 Samuelson Economic Synthesis</p>
        </div>
      </footer>
    </main>
  );
}