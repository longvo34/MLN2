"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useEffect, useState } from "react";
import {
  BookOpen,
  ArrowRight,
  ChevronRight,
  Quote as QuoteIcon,
  Sparkles,
  GraduationCap,
  Landmark,
} from "lucide-react";
import { ChevronDown } from "lucide-react";

/** ==================================================
 * HOME DATA (editable) — chỉ cần sửa mảng này
 * ================================================== */

// Featured Economists
const ECONOMISTS = [
  {
    slug: "keynes",
    name: "John Maynard Keynes",
    lifespan: "1883–1946",
    summary:
      "Đặt nền móng kinh tế vĩ mô hiện đại: tổng cầu, can thiệp Nhà nước, General Theory (1936).",
    thumb: "/images/keynes-tri-thuc.jpg",
    tags: ["Keynesian", "Bretton Woods"],
  },
  {
    slug: "samuelson",
    name: "Paul A. Samuelson",
    lifespan: "1915–2009",
    summary:
      "Neoclassical Synthesis; toán học hoá kinh tế học; Nobel 1970; giáo trình Economics (1948).",
    thumb: "/images/hero-samuelson-mit-portrait.jpg",
    tags: ["Nobel 1970", "MIT"],
  },
];

// Key Concepts
const CONCEPTS = [
  {
    key: "aggregate-demand",
    title: "Aggregate Demand",
    oneLine: "Tổng cầu quyết định sản lượng & việc làm trong ngắn hạn.",
    iconSrc: "/images/aggregate_demand.jpg",
    href: "/economists/keynes#ideas",
  },
  {
    key: "synthesis",
    title: "Neoclassical Synthesis",
    oneLine:
      "Dung hoà Keynes–tân cổ điển: can thiệp ngắn hạn, thị trường dài hạn.",
    iconSrc: "/images/home/diagram-synthesis-venn.svg",
    href: "/economists/samuelson#ideas",
  },
  {
    key: "public-goods",
    title: "Public Goods",
    oneLine: "Không loại trừ & không cạnh tranh → cần vai trò Nhà nước.",
    iconSrc: "/images/home/icon-public-goods.svg",
    href: "/economists/samuelson#works",
  },
  {
    key: "externalities",
    title: "Externalities",
    oneLine: "Hiệu ứng ngoại biên → cần điều tiết/thuế/phí/chuẩn mực.",
    iconSrc: "/images/home/diagram-externalities.svg",
    href: "/economists/samuelson#ideas",
  },
  {
    key: "ppf",
    title: "PPF",
    oneLine: "Đường biên khả năng sản xuất; minh hoạ đánh đổi nguồn lực.",
    iconSrc: "/images/home/chart-ppf.svg",
    href: "/economists/samuelson#ideas",
  },
  {
    key: "isoquant",
    title: "Isoquant",
    oneLine: "Đường đồng sản lượng; lựa chọn kỹ thuật sản xuất.",
    iconSrc: "/images/home/chart-isoquant.svg",
    href: "/economists/samuelson#ideas",
  },
];

// Milestones
const MILESTONES = [
  {
    year: 1919,
    title: "Versailles",
    desc: "Keynes phê phán bồi thường chiến tranh trong Economic Consequences.",
    img: "/images/versailles-1919.jpg",
  },
  {
    year: 1936,
    title: "General Theory",
    desc: "Tác phẩm kinh điển về tổng cầu, việc làm và lãi suất.",
    img: "/images/The-General-Theory.jpg",
  },
  {
    year: 1947,
    title: "Foundations",
    desc: "Samuelson đặt nền mô hình hoá & comparative statics.",
    img: "/images/foundations-of-economic-analysis-1947.jpg",
  },
  {
    year: 1948,
    title: "Economics",
    desc: "Giáo trình có ảnh hưởng sâu rộng của Samuelson.",
    img: "/images/economics-an-introductory-analysis-1948.png",
  },
  {
    year: 1954,
    title: "Public Expenditure",
    desc: "Lý thuyết hàng hoá công – vai trò Nhà nước.",
    img: "/images/Expenditure.png",
  },
  {
    year: 1970,
    title: "Nobel",
    desc: "Samuelson nhận giải Nobel Kinh tế đầu tiên cho người Mỹ.",
    img: "/images/nobel.jpg",
  },
];

// Quotes
const QUOTES = [
  {
    text: "In the long run we are all dead.",
    by: "J. M. Keynes",
    source: "A Tract on Monetary Reform (1923)",
  },
  {
    text: "Economics is a choice between alternatives all the time. Those are the trade-offs.",
    by: "P. A. Samuelson",
    source: "Attributed",
  },
  {
    text: "Good questions outrank easy answers.",
    by: "P. A. Samuelson",
    source: "Attributed",
  },
];

// Việt Nam badges
const VN_BADGES = [
  { label: "Đổi mới", value: "1986" },
  { label: "Chính sách", value: "Tài khóa – Tiền tệ linh hoạt" },
  { label: "Mục tiêu", value: "Tăng trưởng bền vững" },
  { label: "Kinh tế công", value: "Hàng hóa công, ngoại tác" },
];

// Gallery
const GALLERY = [
  { src: "/images/keynes-gia.jpg", alt: "Chân dung Keynes" },
  { src: "/images/hero-samuelson-mit-portrait.jpg", alt: "Samuelson tại MIT" },
  { src: "/images/The-General-Theory.jpg", alt: "Bìa General Theory" },
  {
    src: "/images/foundations-of-economic-analysis-1947.jpg",
    alt: "Bìa Foundations",
  },
  { src: "/images/ppf-illustration.svg", alt: "PPF vẽ tay" },
  { src: "/images/giang-duong.jpg", alt: "Lớp học kinh tế" },
];

/* ---------------------------------------------
 * HOME PAGE
 * -------------------------------------------*/
export default function HomePage() {
  // Fix hydration mismatch for newsletter form by rendering it client-only
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  const heroTitle = useMemo(() => "Bức tranh tư tưởng kinh tế", []);
  const heroSub = useMemo(
    () =>
      "Trang nhập môn về triết gia kinh tế và dòng chảy tư tưởng: bức tranh tổng quát, rồi đi sâu vào Keynes & Samuelson.",
    []
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-tight text-xl">
            Economics Panorama
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <Link href="#economists" className="hover:text-gray-900">
              Triết gia kinh tế
            </Link>
            <Link href="#concepts" className="hover:text-gray-900">
              Khái niệm cốt lõi
            </Link>
            <Link href="#milestones" className="hover:text-gray-900">
              Dòng thời gian
            </Link>
            <Link href="#quotes" className="hover:text-gray-900">
              Trích dẫn
            </Link>
            <Link href="#faq" className="hover:text-gray-900">
              FAQ
            </Link>
            <Link href="#subscribe" className="hover:text-gray-900">
              Đăng ký
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {heroTitle}
            </h1>
            <p className="mt-4 text-lg text-gray-700">{heroSub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#economists"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2 text-sm"
              >
                Khám phá ngay <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/keynes"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm"
              >
                Bắt đầu từ Keynes
              </Link>
              <Link
                href="/samuelson"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm"
              >
                Samuelson
              </Link>
            </div>
          </div>

          <div className="relative h-[260px] md:h-[360px]">
            <Image
              src="/images/history.png"
              alt="Collage bìa sách & chân dung các nhà kinh tế"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-2xl shadow-2xl border"
            />
          </div>
        </div>
      </section>

      {/* Featured Economists */}
      <section id="intro" className="py-8 px-4 border-y bg-white/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr,1fr] gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">Giới thiệu</h2>
            <p className="text-gray-700">
              Trang chủ phác hoạ bức tranh <strong>triết gia kinh tế</strong> và
              các dòng tư tưởng chủ đạo. Từ cái nhìn tổng quát, bạn có thể đi
              sâu vào hai nhân vật mở đầu: <em>John Maynard Keynes</em> và{" "}
              <em>Paul A. Samuelson</em>.
            </p>
            <ul className="mt-3 text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Tư tưởng & công cụ phân tích (Key concepts)</li>
              <li>Những cột mốc tư tưởng (Milestones)</li>
              <li>Bối cảnh & ảnh hưởng tại Việt Nam</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-4 bg-gray-50">
            <p className="text-sm text-gray-700">Gợi ý bắt đầu:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/keynes"
                className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-1.5 text-sm"
              >
                Keynes
              </Link>
              <Link
                href="/samuelson"
                className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm"
              >
                Samuelson
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why learn philosophers of economics */}
      <section id="why" className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Vì sao học triết gia kinh tế?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border bg-white p-5">
              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                <GraduationCap className="h-5 w-5" /> Hiểu bối cảnh tư tưởng
              </div>
              <p className="text-sm text-gray-700">
                Nắm dòng chảy lịch sử và nền tảng triết lý đằng sau các mô hình
                kinh tế.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                <Sparkles className="h-5 w-5" /> Tư duy phản biện
              </div>
              <p className="text-sm text-gray-700">
                Đặt câu hỏi đúng, nhìn xuyên qua giả định — thay vì thuộc lòng
                kết quả.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                <Landmark className="h-5 w-5" /> Kết nối với chính sách
              </div>
              <p className="text-sm text-gray-700">
                Liên hệ lý thuyết với thiết kế chính sách tài khóa, tiền tệ và
                hàng hóa công.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                <BookOpen className="h-5 w-5" /> Công cụ & mô hình hoá
              </div>
              <p className="text-sm text-gray-700">
                PPF, isoquant, tổng cầu… — các khái niệm cốt lõi để phân tích và
                tranh luận.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 px-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t border-b">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="rounded-xl border bg-white p-4">
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-gray-600">Triết gia kinh tế</div>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <div className="text-2xl font-bold">6</div>
            <div className="text-xs text-gray-600">Mốc tư tưởng</div>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <div className="text-2xl font-bold">6</div>
            <div className="text-xs text-gray-600">Khái niệm cốt lõi</div>
          </div>
          <div className="rounded-xl border bg-white p-4">
            <div className="text-2xl font-bold">∞</div>
            <div className="text-xs text-gray-600">Liên hệ chính sách</div>
          </div>
        </div>
      </section>

      <section id="economists" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Bắt đầu với hai triết gia kinh tế
            </h2>
            <Link
              href="/economists"
              className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center"
            >
              Tất cả <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ECONOMISTS.map((e) => (
              <article
                key={e.slug}
                className="rounded-2xl border overflow-hidden bg-white shadow-sm"
              >
                <div className="relative h-52">
                  <Image
                    src={e.thumb}
                    alt={e.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{e.name}</h3>
                    <span className="text-xs text-gray-500">{e.lifespan}</span>
                  </div>
                  <p className="text-sm text-gray-700">{e.summary}</p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 border px-2 py-0.5 text-xs text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-3">
                    <Link
                      href={`/economists/${e.slug}`}
                      className="inline-flex items-center gap-1 text-gray-900 font-medium"
                    >
                      Xem chi tiết <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section id="paths" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Lộ trình gợi ý
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="#concepts"
              className="group rounded-2xl border bg-white p-6 hover:shadow-sm transition"
            >
              <div className="text-sm text-gray-500">Bước 1</div>
              <h3 className="text-lg font-semibold mt-1">Khái niệm nền tảng</h3>
              <p className="text-sm text-gray-700 mt-2">
                Nắm tổng cầu, hàng hoá công, ngoại tác, PPF, isoquant…
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-gray-900 font-medium">
                Vào học <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/keynes"
              className="group rounded-2xl border bg-white p-6 hover:shadow-sm transition"
            >
              <div className="text-sm text-gray-500">Bước 2</div>
              <h3 className="text-lg font-semibold mt-1">Keynes</h3>
              <p className="text-sm text-gray-700 mt-2">
                Bối cảnh Đại khủng hoảng, Tổng cầu & vai trò Nhà nước.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-gray-900 font-medium">
                Khám phá <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href="/samuelson"
              className="group rounded-2xl border bg-white p-6 hover:shadow-sm transition"
            >
              <div className="text-sm text-gray-500">Bước 3</div>
              <h3 className="text-lg font-semibold mt-1">Samuelson</h3>
              <p className="text-sm text-gray-700 mt-2">
                Tổng hợp tân cổ điển, mô hình hoá & hàng hoá công.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-gray-900 font-medium">
                Tiếp tục <ChevronRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="concepts" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Khái niệm cốt lõi của tư tưởng kinh tế
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CONCEPTS.map((c) => (
              <Link
                key={c.key}
                href={c.href}
                className="group rounded-xl border bg-white p-4 hover:shadow-sm transition"
              >
                <div className="flex items-center gap-3">
                  <div>
                    <h3 className="font-semibold group-hover:text-gray-900">
                      {c.title}
                    </h3>
                    <p className="text-sm text-gray-600">{c.oneLine}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline (h-scroll) */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Bản đồ ý niệm
            </h2>
            <p className="text-gray-700">
              Từ <em>Tổng cầu</em> (Keynes) đến <em>Tổng hợp tân cổ điển</em>{" "}
              (Samuelson), các khái niệm kết nối nhau để trả lời hai câu hỏi:{" "}
              <strong>vì sao nền kinh tế suy thoái</strong> và{" "}
              <strong>chúng ta có thể làm gì</strong>. Hàng hoá công & ngoại tác
              chỉ ra giới hạn của thị trường; PPF & isoquant giúp hình dung đánh
              đổi trong sản xuất.
            </p>
          </div>
          <div className="relative h-[260px] md:h-[320px]">
            <Image
              src="/images/concept-map-v5.svg"
              alt="Bản đồ khái niệm kinh tế"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section id="milestones" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Dòng thời gian
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
            {MILESTONES.map((m) => (
              <div
                key={m.year}
                className="min-w-[280px] snap-start rounded-xl border bg-white overflow-hidden"
              >
                <div className="relative h-36">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500">{m.year}</div>
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-sm text-gray-700">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section
        id="subscribe"
        className="py-12 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Nhận cập nhật bài mới
            </h2>
            <p className="mt-2 text-white/80">
              Khi có thêm triết gia kinh tế, khái niệm, hay phân tích mới —
              chúng tôi sẽ gửi cho bạn.
            </p>
          </div>
          {isClient ? (
            <form
              className="bg-white/10 backdrop-blur rounded-xl p-3 border border-white/20 flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email của bạn"
                className="flex-1 bg-transparent placeholder-white/60 text-white focus:outline-none"
                autoComplete="email"
                name="email"
              />
              <button className="rounded-lg bg-white text-gray-900 px-4 py-2 text-sm font-semibold">
                Đăng ký
              </button>
            </form>
          ) : (
            <div className="h-12" aria-hidden="true" />
          )}
        </div>
      </section>

      <section id="quotes" className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Trích dẫn</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {QUOTES.map((q, i) => (
              <figure key={i} className="rounded-xl border bg-white p-5 h-full">
                <blockquote className="text-lg italic text-gray-800 flex gap-2">
                  <QuoteIcon className="h-5 w-5 text-gray-900 mt-1" />
                  <span>“{q.text}”</span>
                </blockquote>
                <figcaption className="mt-2 text-sm text-gray-600">
                  — {q.by}
                  {q.source ? `, ${q.source}` : ""}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Vietnam */}
      <section id="faq" className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Câu hỏi thường gặp
          </h2>
          <div className="divide-y rounded-2xl border bg-white">
            <details className="p-4 group" open>
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  “Triết gia kinh tế” khác gì nhà kinh tế?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-600 group-open:rotate-180 transition" />
              </summary>
              <p className="pt-2 text-gray-700 text-sm">
                Chúng tôi dùng khái niệm này để nhấn mạnh chiều sâu tư tưởng,
                bối cảnh lịch sử và ảnh hưởng triết lý đứng sau mô hình/chính
                sách.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  Làm sao bắt đầu nếu tôi mới học?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-600 group-open:rotate-180 transition" />
              </summary>
              <p className="pt-2 text-gray-700 text-sm">
                Đi theo “Lộ trình gợi ý”: Khái niệm nền tảng → Keynes →
                Samuelson.
              </p>
            </details>
            <details className="p-4 group">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-900">
                  Nguồn tài liệu có đáng tin không?
                </span>
                <ChevronDown className="h-5 w-5 text-gray-600 group-open:rotate-180 transition" />
              </summary>
              <p className="pt-2 text-gray-700 text-sm">
                Ưu tiên nhà xuất bản/DOI/JSTOR/MIT/Nobel/Wikimedia (CC/PD).
                Trích dẫn “attributed” được gắn nhãn rõ.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="vietnam" className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-8 items-start">
            <div className="rounded-2xl border p-6 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Landmark className="h-5 w-5 text-gray-900" />
                <h3 className="text-xl font-bold">Bối cảnh Việt Nam</h3>
              </div>
              <p className="text-gray-700">
                Sau Đổi mới 1986, Việt Nam tiếp thu tư tưởng kinh tế hiện đại:
                kết hợp vai trò Nhà nước và cơ chế thị trường, vận dụng linh
                hoạt tài khóa – tiền tệ theo chu kỳ; chú trọng hàng hoá công,
                ngoại tác và mục tiêu phát triển bền vững.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {VN_BADGES.map((b) => (
                <div
                  key={b.label}
                  className="rounded-full border bg-white shadow-sm px-4 py-2 text-sm"
                >
                  <span className="font-semibold">{b.label}:</span>{" "}
                  <span className="text-gray-800">{b.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Hình ảnh</h2>
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="text-gray-300">
            Nguồn đề xuất: MIT Libraries, Nobel Prize, Harvard University Press,
            Internet Archive, Wikimedia Commons.
          </p>
          <p className="text-gray-400">© 2025 Samuelson Economic Synthesis</p>
        </div>
      </footer>
    </main>
  );
}
