"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

type Section = { id: string; label: string };

export function SideIndex({ items }: { items: readonly Section[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target?.id) setActive(hit.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: [0.05, 0.3] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = useCallback((id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, []);

  const navContent = (
    <>
      <div className="mb-6 px-6 pt-4">
        <Image
          src="/logos/impactxp-logo-navy.svg"
          alt="ImpactXP"
          width={696}
          height={132}
          unoptimized
          className="h-6 w-auto max-w-[120px] object-contain object-left sm:h-7 sm:max-w-[132px]"
        />
        <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-[#486586]">
          Business Plan
        </p>
      </div>

      <div className="flex-1 space-y-0.5 overflow-y-auto px-3">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.id)}
            className={`block w-full rounded-lg px-3 py-2 text-left text-[13px] transition-all ${
              active === item.id
                ? "bg-[#FC5101] font-semibold text-white"
                : "text-[#486586] hover:bg-[#F7F7F7] hover:text-[#011935]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-4 border-t border-gray-100 px-6 pt-5">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-300">
          Prepared by
        </p>
        <p className="mt-1 text-xs font-bold text-[#011935]">ImpactXP</p>
        <p className="text-[11px] text-[#486586]">April 2026</p>
      </div>
    </>
  );

  return (
    <>
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] flex-col border-r border-t border-gray-100 bg-white pb-8 xl:flex">
        {navContent}
      </nav>

      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-[#011935]/90 text-white shadow-lg backdrop-blur-sm xl:hidden"
        type="button"
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute left-0 top-0 flex h-full w-[280px] max-w-[85vw] flex-col border-t border-gray-100 bg-white pb-8 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-[#011935]"
              type="button"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
            {navContent}
          </nav>
        </div>
      )}
    </>
  );
}
