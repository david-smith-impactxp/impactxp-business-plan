"use client";

import { useState, useEffect, useRef } from "react";
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
import QuoteBlock from "@/components/quote-block";
import { AnimateIn } from "@/components/animate-in";
import { useInView } from "motion/react";
import {
  sections,
  marketContext,
  platformOverview,
  performanceData,
  arrChartData,
  growthModelPillars,
  enterpriseFoundations,
  investmentAreas,
  investmentSubtitle,
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

  const chartRef = useRef(null);
  const chartInView = useInView(chartRef, { once: false, amount: 0.3 });
  const [chartKey, setChartKey] = useState(0);
  useEffect(() => {
    if (chartInView) setChartKey((k) => k + 1);
  }, [chartInView]);

  const hideSidebar = isPresenting || isFullscreen;

  return (
    <div className="flex min-h-screen">
      {!hideSidebar && <SideIndex items={sections} />}

      <main className={`min-w-0 flex-1 ${!hideSidebar ? "xl:ml-[220px]" : ""}`}>
        {/* ═══ SLIDE 1 — SPLASH ═══ */}
        <section
          id="splash"
          className="relative flex min-h-screen scroll-mt-0 items-center justify-center overflow-hidden bg-[#011935]"
        >
          <img
            src="/images/splash-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#011935]/85 via-[#011935]/55 to-[#FC5101]/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(1,25,53,0)_0%,_rgba(1,25,53,0.6)_70%,_rgba(1,25,53,0.9)_100%)]" />

          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-16">
            <AnimateIn>
              <Image
                src="/logos/impactxp-logo-white.svg"
                alt="ImpactXP"
                width={696}
                height={132}
                priority
                unoptimized
                className="mx-auto h-20 w-auto object-contain sm:h-24"
              />
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="mx-auto mt-8 h-px w-24 bg-[#FC5101]" />
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60 sm:text-xs">
                Business Plan · April 2026
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ═══ SLIDE 2 — PLATFORM OVERVIEW ═══ */}
        <section id="platform-overview">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img
              src="/images/platform-overview.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  {platformOverview.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  {platformOverview.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">
                  {platformOverview.intro}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* End-to-End Capability */}
                <AnimateIn className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-[#011935]">
                      {platformOverview.endToEnd.title}
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {platformOverview.endToEnd.steps.map((s) => (
                        <li key={s.verb} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 shrink-0 rounded-md bg-[#FFF2EB] px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#FC5101]">
                            {s.verb}
                          </span>
                          <span className="text-[#486586]">{s.body}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs italic text-[#486586]/70">
                      {platformOverview.endToEnd.note}
                    </p>
                  </div>
                </AnimateIn>

                {/* Five Core Modules */}
                <AnimateIn delay={0.1} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-[#011935]">
                      {platformOverview.modules.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {platformOverview.modules.items.map((m) => (
                        <li key={m.name} className="flex items-baseline gap-2 text-sm">
                          <CheckCircle2 size={13} className="shrink-0 translate-y-0.5 text-[#FC5101]" />
                          <span className="font-bold text-[#011935]">{m.name}</span>
                          <span className="text-[#486586]">— {m.body}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs italic text-[#486586]/70">
                      {platformOverview.modules.note}
                    </p>
                  </div>
                </AnimateIn>

                {/* Key Differentiation */}
                <AnimateIn delay={0.2} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-[#011935]">
                      {platformOverview.differentiation.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {platformOverview.differentiation.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#FC5101]/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>

                {/* Commercial Impact */}
                <AnimateIn delay={0.3} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-[#011935]">
                      {platformOverview.commercialImpact.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {platformOverview.commercialImpact.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#FC5101]/60" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              </div>

              {/* Positioning Line */}
              <AnimateIn delay={0.1}>
                <div className="mt-8 rounded-xl bg-[#011935] p-6 sm:p-8">
                  <p className="text-sm leading-7 text-white/85 sm:text-base">
                    {platformOverview.positioningLine}
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 3 — MARKET CONTEXT ═══ */}
        <section id="market-context">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img
              src="/images/cover-bg.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  {marketContext.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  {marketContext.slideTitle}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">
                  {marketContext.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <AnimateIn>
                <div className="max-w-3xl">
                  <QuoteBlock
                    quote={marketContext.headline}
                    source={marketContext.source}
                    variant="light"
                    align="left"
                  />
                </div>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="mt-10 max-w-3xl text-sm leading-7 text-[#011935] sm:text-base">
                  {marketContext.body}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#486586] sm:text-base">
                  {marketContext.detail}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="mt-10 h-px w-16 bg-[#FC5101]/50" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  {marketContext.attribution}
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 2 — STRONG CURRENT PERFORMANCE ═══ */}
        <section id="performance">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/performance-hero.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
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
              <AnimateIn className="h-full">
                <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
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
              </AnimateIn>

              {/* Near-Term */}
              <AnimateIn delay={0.1} className="h-full">
                <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
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
              </AnimateIn>

              {/* Medium-Term */}
              <AnimateIn delay={0.2} className="h-full">
                <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
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
              </AnimateIn>
            </div>

            {/* ARR Growth Chart + Value Creation & Alignment */}
            <AnimateIn className="mt-10">
              <div ref={chartRef} className="grid gap-6 lg:grid-cols-[1fr_320px]">
                <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486586]">
                    ARR Growth Trajectory (£m)
                  </p>
                  <div className="h-64 w-full sm:h-72">
                    {mounted && <ResponsiveContainer key={chartKey} width="100%" height="100%">
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
                        <Bar dataKey="arr" radius={[6, 6, 0, 0]} maxBarSize={64} isAnimationActive={chartInView} animationDuration={800}>
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

                <div className="flex flex-col gap-6">
                  <div className="flex-1 rounded-xl border border-[#e5e7eb] bg-[#FFF2EB] p-5">
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
                  <div className="flex-1 rounded-xl border border-[#e5e7eb] bg-[#EDF2F9] p-5">
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
            </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 3 — SCALABLE GROWTH MODEL ═══ */}
        <section id="growth-model">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/growth-model.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
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
                  <AnimateIn key={pillar.number} delay={i * 0.1} className="h-full">
                    <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF2EB]">
                          <Icon className="text-[#FC5101]" style={{ fontSize: 28, width: 28, height: 28 }} />
                        </div>
                        <p className="text-sm font-bold text-[#011935]">
                          <span className="text-[#011935]">{pillar.number}. </span>
                          {pillar.title}
                        </p>
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
                  </AnimateIn>
                );
              })}
            </div>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 4 — ENTERPRISE FOUNDATIONS ═══ */}
        <section id="enterprise-foundations">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/enterprise-foundations.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
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
              {enterpriseFoundations.quadrants.map((q, i) => (
                <AnimateIn key={q.title} delay={i * 0.1} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-sm font-bold text-[#011935]">{i + 1}. {q.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {q.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#FC5101]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Positioning Statement */}
            <AnimateIn>
              <div className="mt-8 rounded-xl bg-[#011935] p-6 sm:p-8">
                <p className="text-sm leading-7 text-white/85 sm:text-base">
                  {enterpriseFoundations.positioning}
                </p>
              </div>
            </AnimateIn>

            {/* Key Point */}
            <AnimateIn delay={0.1}>
              <div className="mt-5 flex items-center gap-3 rounded-xl border-2 border-[#FC5101]/30 bg-[#FFF2EB] p-5">
                <Zap size={20} className="shrink-0 text-[#FC5101]" />
                <p className="text-sm font-bold text-[#011935]">
                  Key Point: {enterpriseFoundations.keyPoint}
                </p>
              </div>
            </AnimateIn>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 5 — INVESTMENT ALLOCATION ═══ */}
        <section id="investment">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/investment-allocation.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935] via-[#011935]/40 to-black/20" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Use of Funds
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Targeted Investment to Unlock Growth (£2–3m)
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                  {investmentSubtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {investmentAreas.map((area, i) => {
                const icons = [Rocket, BrainCircuit, Users, Globe];
                const Icon = icons[i];
                return (
                  <AnimateIn key={area.title} delay={i * 0.1} className="h-full">
                    <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF2EB]">
                          <Icon className="text-[#FC5101]" style={{ fontSize: 28, width: 28, height: 28 }} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold text-[#011935]">{area.title}</h3>
                        </div>
                        <span className="shrink-0 text-xl font-black text-[#FC5101]">
                          {area.amount}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {area.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-[#486586]">
                            <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-[#FC5101]/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>

            {/* Positioning Statement */}
            <AnimateIn>
              <div className="mt-8 rounded-xl bg-[#011935] p-6 sm:p-8">
                <p className="text-sm leading-7 text-white/85 sm:text-base">
                  {investmentSummary.keyPoint}
                </p>
              </div>
            </AnimateIn>

            {/* Key Point */}
            <AnimateIn delay={0.1}>
              <div className="mt-5 flex items-center gap-3 rounded-xl border-2 border-[#FC5101]/30 bg-[#FFF2EB] p-5">
                <Zap size={20} className="shrink-0 text-[#FC5101]" />
                <p className="text-sm font-bold text-[#011935]">
                  Key Point: {investmentSummary.closing}
                </p>
              </div>
            </AnimateIn>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 6 — GLOBAL EXPANSION ═══ */}
        <section id="global-expansion">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/global-expansion.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
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
                  <AnimateIn key={step.number} delay={i * 0.1} className="h-full">
                    <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
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
                  </AnimateIn>
                );
              })}
            </div>

            {/* Summary */}
            <AnimateIn>
              <div className="mt-8 rounded-xl bg-[#011935] p-6 sm:p-8">
                <p className="text-left text-sm leading-7 text-white/85 sm:text-base">
                  {globalExpansionSummary}
                </p>
              </div>
            </AnimateIn>
          </div>
          </div>
        </section>

        {/* ═══ SLIDE 7 — WHY NOW / INVESTMENT SUMMARY ═══ */}
        <section id="why-now">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <img src="/images/why-now-closing.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
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
                  <AnimateIn key={pillar.title} delay={i * 0.1} className="h-full">
                    <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF2EB]">
                        <Icon className="text-[#FC5101]" style={{ fontSize: 28, width: 28, height: 28 }} />
                      </div>
                      <h3 className="text-sm font-bold text-[#011935]">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#486586]">{pillar.body}</p>
                    </div>
                  </AnimateIn>
                );
              })}
            </div>

            {/* Closing Statement */}
            <AnimateIn>
            <div className="relative mt-10 overflow-hidden rounded-xl bg-[#011935]">
              <img src="/images/why-now-closing.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-40" />
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
            </AnimateIn>
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
