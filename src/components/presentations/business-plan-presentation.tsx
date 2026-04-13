"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Globe,
  Layers,
  Rocket,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { SideIndex } from "@/components/side-index";
import { PresentationControls } from "@/components/presentation-controls";
import {
  sections,
  coverQuote,
  performanceData,
  arrChartData,
  growthModelPillars,
  enterpriseFoundations,
  investmentAreas,
  investmentSummary,
  globalExpansionSteps,
  globalExpansionSummary,
  whyNowPillars,
  closingStatement,
} from "@/data/business-plan-content";

const growthIcons = [Target, Globe, Layers, Users, BrainCircuit];
const expansionIcons = [TrendingUp, Users, Rocket, Globe, Shield, Sparkles];
const whyNowIcons = [Shield, TrendingUp, Target, BrainCircuit, Zap, Rocket];

export function BusinessPlanPresentation() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const hideSidebar = isPresenting || isFullscreen;

  return (
    <div className="flex min-h-screen">
      {!hideSidebar && <SideIndex items={sections} />}

      <main className={`min-w-0 flex-1 ${!hideSidebar ? "xl:ml-[220px]" : ""}`}>
        {/* ═══ SLIDE 1 — COVER / DELOITTE QUOTE ═══ */}
        <section
          id="cover"
          className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden bg-[#011935]"
        >
          <img src="/images/cover-bg.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#011935]/90 via-[#011935]/60 to-[#FC5101]/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#011935] to-transparent" />

          <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 text-center sm:px-16 sm:py-24">
            <div className="mx-auto mb-6 sm:mb-8">
              <Image
                src="/logos/impactxp-logo-white.svg"
                alt="ImpactXP"
                width={696}
                height={132}
                priority
                unoptimized
                className="mx-auto h-14 w-auto object-contain sm:h-16"
              />
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
              {coverQuote.source}
            </p>
            <h1 className="mx-auto mt-4 max-w-4xl text-2xl font-black leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-[2.6rem]">
              &ldquo;{coverQuote.headline}&rdquo;
            </h1>

            <div className="mx-auto mt-6 h-px w-24 bg-[#FC5101]" />

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base">
              {coverQuote.body}
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
              {coverQuote.detail}
            </p>

            <div className="mt-10 sm:mt-12">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                {coverQuote.attribution}
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 2 — STRONG CURRENT PERFORMANCE ═══ */}
        <section id="performance">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/performance-hero.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Financial Overview
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Strong Current Performance with Clear Growth Trajectory
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Current Position */}
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486586]">
                  {performanceData.current.title}
                </p>
                <div className="mt-4 flex gap-6">
                  {performanceData.current.stats.map((s) => (
                    <div key={s.label}>
                      <p className="text-3xl font-black text-[#FC5101]">{s.value}</p>
                      <p className="mt-1 text-xs text-[#486586]">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-[#486586]">
                  {performanceData.current.note}
                </p>
              </div>

              {/* Near-Term */}
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486586]">
                  {performanceData.nearTerm.title}
                </p>
                <p className="mt-4 text-3xl font-black text-[#FC5101]">
                  {performanceData.nearTerm.target}
                </p>
                <ul className="mt-4 space-y-2">
                  {performanceData.nearTerm.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#FC5101]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs italic text-[#486586]/70">
                  {performanceData.nearTerm.note}
                </p>
              </div>

              {/* Medium-Term */}
              <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486586]">
                  {performanceData.mediumTerm.title}
                </p>
                <div className="mt-4 space-y-3">
                  {performanceData.mediumTerm.milestones.map((m) => (
                    <div key={m.year} className="flex items-baseline justify-between">
                      <span className="text-sm font-medium text-[#011935]">{m.year}</span>
                      <span className="text-xl font-black text-[#FC5101]">{m.arr}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs italic text-[#486586]/70">
                  {performanceData.mediumTerm.note}
                </p>
              </div>
            </div>

            {/* ARR Growth Chart */}
            <div className="mt-10 rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486586]">
                ARR Growth Trajectory (£m)
              </p>
              <div className="h-64 w-full sm:h-72">
                {mounted && <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={arrChartData} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: "#486586", fontSize: 12 }}
                      axisLine={{ stroke: "#e5e7eb" }}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#486586", fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v: number) => `£${v}m`}
                    />
                    <Tooltip
                      formatter={(value) => [`£${value}m`, "ARR"]}
                      contentStyle={{
                        background: "#011935",
                        border: "none",
                        borderRadius: 8,
                        color: "#fff",
                        fontSize: 13,
                      }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}
                    />
                    <Bar dataKey="arr" radius={[6, 6, 0, 0]} maxBarSize={64}>
                      {arrChartData.map((_, i) => (
                        <Cell
                          key={i}
                          fill={i === arrChartData.length - 1 ? "#FC5101" : "#3566A0"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>}
              </div>
            </div>

            {/* Value Creation & Alignment */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e5e7eb] bg-[#FFF2EB] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FC5101]">
                  Value Creation
                </p>
                <ul className="mt-3 space-y-2">
                  {performanceData.valueCreation.map((v) => (
                    <li key={v} className="flex items-start gap-2 text-sm text-[#011935]">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#FC5101]" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[#e5e7eb] bg-[#EDF2F9] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#3566A0]">
                  Alignment
                </p>
                <ul className="mt-3 space-y-2">
                  {performanceData.alignment.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-[#011935]">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-[#3566A0]" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 3 — SCALABLE GROWTH MODEL ═══ */}
        <section id="growth-model">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/growth-model.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Growth Strategy
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  A Structured, Scalable Growth Model
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  Growth is driven by expansion within global enterprise clients
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {growthModelPillars.map((pillar, i) => {
                const Icon = growthIcons[i];
                return (
                  <div
                    key={pillar.number}
                    className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF2EB]">
                        <Icon className="text-[#FC5101]" style={{ fontSize: 28, width: 28, height: 28 }} />
                      </div>
                      <div>
                        <span className="text-base font-black text-[#FC5101]">{pillar.number}.</span>
                        <p className="text-sm font-bold text-[#011935]">{pillar.title}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {pillar.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#FC5101]/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 4 — ENTERPRISE FOUNDATIONS ═══ */}
        <section id="enterprise-foundations">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/enterprise-foundations.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Enterprise Readiness
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Strong Enterprise Foundations with Clear Path to Scale
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-12 sm:px-16 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {enterpriseFoundations.quadrants.map((q) => (
                <div
                  key={q.title}
                  className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-sm font-bold text-[#011935]">{q.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {q.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#FC5101]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Positioning Statement */}
            <div className="mt-8 rounded-xl bg-[#011935] p-6 sm:p-8">
              <p className="text-sm leading-7 text-white/85 sm:text-base">
                {enterpriseFoundations.positioning}
              </p>
            </div>

            {/* Key Point */}
            <div className="mt-5 flex items-center gap-3 rounded-xl border-2 border-[#FC5101]/30 bg-[#FFF2EB] p-5">
              <Zap size={20} className="shrink-0 text-[#FC5101]" />
              <p className="text-sm font-bold text-[#011935]">
                Key Point: {enterpriseFoundations.keyPoint}
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 5 — INVESTMENT ALLOCATION ═══ */}
        <section id="investment">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/investment-allocation.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Use of Funds
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Targeted Investment to Unlock Growth (£2–3m)
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {investmentAreas.map((area, i) => {
                const colors = ["#FC5101", "#3566A0", "#025F6A", "#486586"];
                const color = colors[i];
                return (
                  <div
                    key={area.title}
                    className="overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm"
                  >
                    <div className="h-1" style={{ backgroundColor: color }} />
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-sm font-bold text-[#011935]">{area.title}</h3>
                        <span
                          className="shrink-0 text-xl font-black"
                          style={{ color }}
                        >
                          {area.amount}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {area.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Point */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border-2 border-[#FC5101]/30 bg-[#FFF2EB] p-5">
              <BarChart3 size={20} className="shrink-0 text-[#FC5101]" />
              <p className="text-sm font-bold text-[#011935]">
                {investmentSummary.keyPoint}
              </p>
            </div>

            <p className="mt-5 text-center text-sm italic text-[#486586]">
              {investmentSummary.closing}
            </p>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 6 — GLOBAL EXPANSION ═══ */}
        <section id="global-expansion">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/global-expansion.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Go-to-Market
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Client-Led Global Expansion with Scalable Delivery
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-12 sm:px-16 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {globalExpansionSteps.map((step, i) => {
                const Icon = expansionIcons[i];
                return (
                  <div
                    key={step.number}
                    className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#011935] font-black text-white" style={{ fontSize: 18 }}>
                        {step.number}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold leading-tight text-[#011935]">
                          {step.title}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                          <Icon size={13} className="mt-0.5 shrink-0 text-[#FC5101]/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Summary */}
            <div className="mt-8 rounded-xl bg-[#011935] p-6 sm:p-8">
              <p className="text-center text-sm leading-7 text-white/85 sm:text-base">
                {globalExpansionSummary}
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 7 — WHY NOW / INVESTMENT SUMMARY ═══ */}
        <section id="why-now">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/why-now-closing.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Investment Thesis
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Investment Summary / Why Now
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyNowPillars.map((pillar, i) => {
                const Icon = whyNowIcons[i];
                return (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF2EB]">
                      <Icon className="text-[#FC5101]" style={{ fontSize: 28, width: 28, height: 28 }} />
                    </div>
                    <h3 className="text-sm font-bold text-[#011935]">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#486586]">{pillar.body}</p>
                  </div>
                );
              })}
            </div>

            {/* Closing Statement */}
            <div className="relative mt-10 overflow-hidden rounded-xl bg-[#011935]">
              <img src="/images/why-now-closing.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#011935]/80 to-[#011935]/60" />
              <div className="relative h-1 bg-gradient-to-r from-[#FC5101] to-[#3566A0]" />
              <div className="relative p-6 sm:p-10">
                <p className="text-center text-base leading-8 text-white/90 sm:text-lg">
                  {closingStatement}
                </p>
                <div className="mx-auto mt-6 h-px w-16 bg-[#FC5101]/50" />
                <p className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                  ImpactXP · April 2026
                </p>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>

      <PresentationControls
        items={sections}
        isFullscreen={isFullscreen}
        onFullscreenChange={setIsFullscreen}
        onPresentingChange={setIsPresenting}
      />
    </div>
  );
}
