// Gợi ý đặt tên tệp: /components/MilestoneTimeline.tsx
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Định nghĩa Type cho mảng MILESTONES (dựa trên mảng gốc của bạn)
type Milestone = {
  year: number;
  title: string;
  desc: string;
  img: string;
};

// Định nghĩa Props cho component
type MilestoneTimelineProps = {
  MILESTONES: Milestone[];
};

export default function MilestoneTimeline({
  MILESTONES,
}: MilestoneTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // State để quản lý việc kéo thả
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // State để ẩn/hiện nút bấm
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  /**
   * Hàm kiểm tra xem có thể cuộn sang trái/phải nữa không
   * Dùng useCallback để tránh tạo lại hàm khi re-render
   */
  const checkScrollability = useCallback(() => {
    const el = containerRef.current;
    if (el) {
      // 10px buffer cho an toàn
      const atStart = el.scrollLeft <= 10;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;

      setCanScrollLeft(!atStart);
      setCanScrollRight(!atEnd);
    }
  }, []); // Không có dependency

  /**
   * CHỨC NĂNG 1: NÚT BẤM
   * Hàm cuộn (scroll)
   */
  const scrollBy = (distance: number) => {
    containerRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  };

  /**
   * CHỨC NĂNG 2: KÉO THẢ CHUỘT
   * Sử dụng useEffect để gắn các event listener cho việc kéo thả
   */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Khi nhấn chuột xuống
    const onMouseDown = (e: MouseEvent) => {
      isDownRef.current = true;
      el.classList.add("cursor-grabbing");
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };

    // Khi thả chuột ra
    const onMouseUp = () => {
      isDownRef.current = false;
      el.classList.remove("cursor-grabbing");
    };

    // Khi di chuyển chuột
    const onMouseMove = (e: MouseEvent) => {
      if (!isDownRef.current) return;
      e.preventDefault(); // Ngăn việc chọn text khi kéo
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 2; // Tăng tốc độ kéo (x2)
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    // Gắn listeners
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mouseleave", onMouseUp); // Cũng thả ra khi rời khỏi
    el.addEventListener("mousemove", onMouseMove);

    // Gắn listener cho sự kiện cuộn (để cập nhật nút)
    el.addEventListener("scroll", checkScrollability);

    // Dọn dẹp listeners khi component unmount
    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mouseleave", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("scroll", checkScrollability);
    };
  }, [checkScrollability]); // Phụ thuộc vào checkScrollability

  /**
   * Chạy hàm checkScrollability khi MILESTONES thay đổi (lần đầu load)
   * Sử dụng ResizeObserver để check lại khi kích thước cửa sổ thay đổi
   */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check lần đầu
    checkScrollability();

    // Check khi resize
    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [MILESTONES, checkScrollability]);

  return (
    <section id="milestones" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Dòng thời gian</h2>

          {/* === NÚT BẤM === */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-300)} // Cuộn trái 300px
              disabled={!canScrollLeft}
              className="p-2 rounded-full bg-gray-100 border text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(300)} // Cuộn phải 300px
              disabled={!canScrollRight}
              className="p-2 rounded-full bg-gray-100 border text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* === THANH SCROLL === */}
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-2 snap-x cursor-grab
                     scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
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
                  draggable={false} // Tắt kéo ảnh mặc định
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
  );
}
