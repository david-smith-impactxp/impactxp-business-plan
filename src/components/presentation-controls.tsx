"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Play,
  X,
} from "lucide-react";

type Section = { id: string; label: string };

type PresentationControlsProps = {
  items: readonly Section[];
  isFullscreen: boolean;
  onFullscreenChange: (fullscreen: boolean) => void;
  onPresentingChange: (presenting: boolean) => void;
};

const SCROLL_OVERLAP = 80;
const BAR_HEIGHT = 72;
const MIN_REMAINING = 150;

export function PresentationControls({
  items,
  isFullscreen,
  onFullscreenChange,
  onPresentingChange,
}: PresentationControlsProps) {
  const [presenting, setPresenting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const pillsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback(
    (index: number) => {
      const el = document.getElementById(items[index]?.id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveIndex(index);
    },
    [items],
  );

  const sectionOverflow = useCallback(
    (direction: "next" | "prev") => {
      const el = document.getElementById(items[activeIndex]?.id);
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const visibleBottom = window.innerHeight - BAR_HEIGHT;
      if (direction === "next") {
        return Math.max(0, rect.bottom - visibleBottom);
      }
      return Math.max(0, -rect.top);
    },
    [items, activeIndex],
  );

  const goNext = useCallback(() => {
    const remaining = sectionOverflow("next");
    if (remaining > MIN_REMAINING) {
      const step = window.innerHeight - SCROLL_OVERLAP - BAR_HEIGHT;
      const scrollBy = Math.min(step, remaining);
      window.scrollTo({
        top: window.scrollY + scrollBy,
        behavior: "smooth",
      });
      return;
    }
    if (activeIndex < items.length - 1) {
      scrollToSection(activeIndex + 1);
    }
  }, [activeIndex, items.length, sectionOverflow, scrollToSection]);

  const goPrev = useCallback(() => {
    const hidden = sectionOverflow("prev");
    if (hidden > MIN_REMAINING) {
      const step = window.innerHeight - SCROLL_OVERLAP - BAR_HEIGHT;
      const scrollBy = Math.min(step, hidden);
      window.scrollTo({
        top: Math.max(0, window.scrollY - scrollBy),
        behavior: "smooth",
      });
      return;
    }
    if (activeIndex > 0) {
      scrollToSection(activeIndex - 1);
    }
  }, [activeIndex, sectionOverflow, scrollToSection]);

  useEffect(() => {
    if (!presenting) return;
    const ids = items.map((i) => i.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target?.id) {
          const idx = ids.indexOf(hit.target.id);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { rootMargin: "-10% 0px -70% 0px", threshold: [0.05, 0.3] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [presenting, items]);

  useEffect(() => {
    if (!presenting) return;
    const pill = pillsRef.current?.children[activeIndex] as
      | HTMLElement
      | undefined;
    pill?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [presenting, activeIndex]);

  useEffect(() => {
    if (!presenting) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        exitPresentation();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [presenting, goNext, goPrev]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    function onFsChange() {
      if (!document.fullscreenElement) {
        onFullscreenChange(false);
      }
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, [onFullscreenChange]);

  const toggleBrowserFullscreen = useCallback(
    async (enter: boolean) => {
      try {
        if (enter && !document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        } else if (!enter && document.fullscreenElement) {
          await document.exitFullscreen();
        }
      } catch {
        /* fullscreen may be blocked by browser policy */
      }
      onFullscreenChange(enter);
    },
    [onFullscreenChange],
  );

  const startPresenting = useCallback(() => {
    setPresenting(true);
    onPresentingChange(true);
    scrollToSection(0);
  }, [scrollToSection, onPresentingChange]);

  const exitPresentation = useCallback(() => {
    setPresenting(false);
    onPresentingChange(false);
    toggleBrowserFullscreen(false);
  }, [onPresentingChange, toggleBrowserFullscreen]);

  if (!presenting) {
    return (
      <button
        onClick={startPresenting}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#011935]/90 px-5 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-[#011935] hover:shadow-xl"
        type="button"
      >
        <Play size={16} />
        Present
      </button>
    );
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 animate-slideUp border-t border-white/10 bg-[#011935]/95 backdrop-blur-md"
      style={{ height: BAR_HEIGHT }}
    >
      <div className="mx-auto flex h-full max-w-[1800px] items-center gap-3 px-4">
        <div
          ref={pillsRef}
          className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto px-1 scrollbar-none"
        >
          {items.map((item, i) => {
            const isCurrent = i === activeIndex;
            const isPast = i < activeIndex;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(i)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  isCurrent
                    ? "bg-[#FC5101] text-white shadow-sm"
                    : isPast
                      ? "bg-white/10 text-white/70 hover:bg-white/15"
                      : "text-white/40 hover:bg-white/10 hover:text-white/60"
                }`}
                type="button"
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1 border-l border-white/10 pl-3">
          <button
            onClick={goPrev}
            disabled={activeIndex === 0 && sectionOverflow("prev") <= MIN_REMAINING}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
            type="button"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goNext}
            disabled={
              activeIndex === items.length - 1 &&
              sectionOverflow("next") <= MIN_REMAINING
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
            type="button"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex shrink-0 items-center gap-1 border-l border-white/10 pl-3">
          <button
            onClick={() => toggleBrowserFullscreen(!isFullscreen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            type="button"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
          </button>
          <button
            onClick={exitPresentation}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            type="button"
            aria-label="Exit presentation"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 h-0.5 bg-[#FC5101]/20">
        <div
          className="h-full bg-[#FC5101] transition-all duration-500"
          style={{
            width: `${((activeIndex + 1) / items.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
