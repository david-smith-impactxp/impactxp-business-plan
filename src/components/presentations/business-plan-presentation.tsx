"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Database,
  FlaskConical,
  Globe,
  Layers,
  LayoutGrid,
  Network,
  Rocket,
  Shield,
  Sparkles,
  Store,
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
import { AnimateIn } from "@/components/animate-in";
import { ParallaxImage } from "@/components/parallax-image";
import { useInView } from "motion/react";
import {
  sections,
  marketContext,
  ourMission,
  platformOverview,
  trustedBy,
  performanceData,
  arrChartData,
  growthModelPillars,
  growthModelDefensible,
  growthModelSummary,
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
const defensibleIcons = [Network, Layers, Database, BrainCircuit, Sparkles];
const architectureIcons = [Layers, Database, Network, Globe];
const missionIcons = [LayoutGrid, Store, FlaskConical, Users];

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

      <main className={`min-w-0 flex-1 ${!hideSidebar ? "lg:landscape:ml-[220px]" : ""}`}>
        {/* ═══ SLIDE 1 — SPLASH ═══ */}
        <section
          id="splash"
          className="relative flex min-h-[100svh] scroll-mt-0 items-center justify-center overflow-hidden bg-[#011935]"
        >
          {/* Original splash video — keep for easy restoration */}
          {/* <video
            src="/shop_zoom_v2.mp4"
            poster="/images/splash-bg.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          /> */}
          <Image
            src="/images/splash.png"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-right opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/70 via-[#011935]/25 to-[#011935]/5" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(1,25,53,0)_0%,_rgba(1,25,53,0.15)_70%,_rgba(1,25,53,0.35)_100%)]" />

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
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.4em] text-white sm:text-base">
                Investment Overview
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-white sm:text-sm">
                April 2026
              </p>
            </AnimateIn>
          </div>
        </section>

        {/* ═══ SLIDE 1.5 — OUR MISSION ═══ */}
        <section id="our-mission">
          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
                <AnimateIn>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                    {ourMission.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-[#011935] sm:text-3xl">
                    {ourMission.titleLead}
                    <br />
                    <span className="text-[#FC5101]">
                      {ourMission.titleHighlight}
                    </span>
                  </h2>
                </AnimateIn>
                <AnimateIn delay={0.1}>
                  <p className="text-sm leading-6 text-[#486586] sm:text-base sm:mt-8">
                    {ourMission.intro}
                  </p>
                </AnimateIn>
              </div>

              <AnimateIn delay={0.15}>
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#e5e7eb]" />
                  <span className="inline-flex rounded-full border border-[#e5e7eb] bg-white px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#486586]">
                    {ourMission.howToLabel}
                  </span>
                  <div className="h-px flex-1 bg-[#e5e7eb]" />
                </div>
              </AnimateIn>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {ourMission.challenges.map((c, i) => {
                  const Icon = missionIcons[i];
                  return (
                    <AnimateIn
                      key={c.number}
                      delay={0.2 + i * 0.1}
                      className="h-full"
                    >
                      <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF2EB]">
                            <Icon
                              className="text-[#FC5101]"
                              style={{ fontSize: 18, width: 18, height: 18 }}
                            />
                          </div>
                          <span className="text-2xl font-bold text-[#FC5101]/30">
                            {c.number}
                          </span>
                        </div>
                        <h3 className="mt-6 text-base font-bold text-[#011935]">
                          {c.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-[#486586]">
                          {c.body}
                        </p>
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 2 — PLATFORM OVERVIEW ═══ */}
        <section id="platform-overview">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage
              src="/images/platform_overview_v2.png"
              className="object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  {platformOverview.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  {platformOverview.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {platformOverview.intro}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* End-to-End Capability */}
                <AnimateIn className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#011935] sm:text-lg">
                      {platformOverview.endToEnd.title}
                    </h3>
                    <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3 gap-y-3 text-sm">
                      {platformOverview.endToEnd.steps.map((s) => (
                        <div key={s.verb} className="contents">
                          <dt className="mt-0.5 self-start justify-self-start rounded-md bg-[#FFF2EB] px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-[#FC5101]">
                            {s.verb}
                          </dt>
                          <dd className="text-[#486586]">{s.body}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 text-xs italic text-[#486586]/70">
                      {platformOverview.endToEnd.note}
                    </p>
                  </div>
                </AnimateIn>

                {/* Five Core Modules */}
                <AnimateIn delay={0.1} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#011935] sm:text-lg">
                      {platformOverview.modules.title}
                    </h3>
                    <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 text-sm">
                      {platformOverview.modules.items.map((m) => (
                        <div key={m.name} className="contents">
                          <dt className="inline-flex items-baseline gap-2 font-bold text-[#011935]">
                            <CheckCircle2
                              size={13}
                              aria-hidden="true"
                              className="shrink-0 translate-y-0.5 text-[#FC5101]"
                            />
                            <span>{m.name}</span>
                          </dt>
                          <dd className="text-[#486586]">{m.body}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 text-xs italic text-[#486586]/70">
                      {platformOverview.modules.note}
                    </p>
                  </div>
                </AnimateIn>

                {/* Key Differentiation */}
                <AnimateIn delay={0.2} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#011935] sm:text-lg">
                      {platformOverview.differentiation.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {platformOverview.differentiation.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-[#486586]"
                        >
                          <CheckCircle2
                            size={13}
                            className="mt-0.5 shrink-0 text-[#FC5101]/60"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>

                {/* Commercial Impact */}
                <AnimateIn delay={0.3} className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <h3 className="text-base font-bold text-[#011935] sm:text-lg">
                      {platformOverview.commercialImpact.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {platformOverview.commercialImpact.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-[#486586]"
                        >
                          <CheckCircle2
                            size={13}
                            className="mt-0.5 shrink-0 text-[#FC5101]/60"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              </div>

              {/* Core Platform Architecture (AssetXP) — full width, dark */}
              <AnimateIn delay={0.1} className="mt-8">
                <div className="relative overflow-hidden rounded-xl bg-[#011935] p-6 sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FC5101] to-[#3566A0]" />

                  <div className="flex items-center gap-3">
                    <Layers
                      className="text-[#FC5101]"
                      style={{ fontSize: 22, width: 22, height: 22 }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FC5101] sm:text-sm">
                      {platformOverview.coreArchitecture.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {platformOverview.coreArchitecture.title}
                  </h3>

                  <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {platformOverview.coreArchitecture.pillars.map((p, i) => {
                      const Icon = architectureIcons[i];
                      return (
                        <div key={p.label}>
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                              <Icon
                                className="text-[#FC5101]"
                                style={{ fontSize: 22, width: 22, height: 22 }}
                              />
                            </div>
                            <p className="text-base font-bold text-white">
                              {p.label}
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-white">
                            {p.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 2.5 — TRUSTED BY ═══ */}
        <section id="trusted-by" className="bg-[#011935]">
          <div className="relative overflow-hidden px-5 py-16 sm:px-16 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <AnimateIn>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  {trustedBy.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {trustedBy.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {trustedBy.subtitle}
                </p>
              </AnimateIn>

              <AnimateIn delay={0.15}>
                <Image
                  src="/images/logos_v2.png"
                  alt="Global CPG brands and retailers using ImpactXP"
                  width={2401}
                  height={1306}
                  unoptimized
                  className="mt-10 h-auto w-full max-w-5xl"
                />
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <p className="mt-10 text-sm italic leading-6 text-white/60 sm:text-base">
                  {trustedBy.footer}
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 3 — MARKET CONTEXT ═══ */}
        <section id="market-context">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage src="/images/cover-bg.jpg" className="object-top" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  {marketContext.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  {marketContext.slideTitle}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {marketContext.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto w-full max-w-6xl">
              <AnimateIn>
                <blockquote className="max-w-3xl text-left">
                  <span
                    aria-hidden="true"
                    className="block font-black leading-none text-[#011935]/40 text-[4rem] sm:text-[6rem]"
                  >
                    &ldquo;
                  </span>
                  <p className="-mt-6 text-xl font-black leading-[1.2] tracking-tight text-[#011935] sm:-mt-8 sm:text-3xl lg:text-[2rem]">
                    {marketContext.headline}
                  </p>
                  <p className="mt-6 text-sm leading-7 text-[#011935] sm:text-base">
                    {marketContext.body}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#011935] sm:text-base">
                    {marketContext.detail}
                  </p>
                  <span
                    aria-hidden="true"
                    className="-mt-4 block text-right font-black leading-none text-[#011935]/40 text-[4rem] sm:-mt-6 sm:text-[6rem]"
                  >
                    &rdquo;
                  </span>
                  <footer className="-mt-4 sm:-mt-6">
                    <cite className="not-italic text-sm font-semibold uppercase tracking-[0.3em] text-[#FC5101] sm:text-base">
                      &mdash; {marketContext.source}
                    </cite>
                  </footer>
                </blockquote>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="mt-16 h-px w-16 bg-[#FC5101]/50 sm:mt-20" />
                <p className="mt-4 text-sm font-semibold text-[#FC5101]">
                  Shared with ImpactXP by Kraft Heinz
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 2 — STRONG CURRENT PERFORMANCE ═══ */}
        <section id="performance">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage src="/images/performance-hero.jpg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Financial Overview
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Strong Current Performance with Clear Growth Trajectory
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {performanceData.subtitle}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {/* Current Position */}
                <AnimateIn className="h-full">
                  <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#011935]">
                      {performanceData.current.title}
                    </p>
                    <div className="mt-4 flex gap-6">
                      {performanceData.current.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-3xl font-black text-[#FC5101]">
                            {s.value}
                          </p>
                          <p className="mt-1 text-xs text-[#486586]">
                            {s.label}
                          </p>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#011935]">
                      {performanceData.nearTerm.title}
                    </p>
                    <p className="mt-4 text-3xl font-black text-[#FC5101]">
                      {performanceData.nearTerm.target}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {performanceData.nearTerm.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-[#486586]"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-[#FC5101]"
                          />
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#011935]">
                      {performanceData.mediumTerm.title}
                    </p>
                    <div className="mt-4 space-y-3">
                      {performanceData.mediumTerm.milestones.map((m) => (
                        <div
                          key={m.year}
                          className="flex items-baseline justify-between"
                        >
                          <span className="text-sm font-medium text-[#011935]">
                            {m.year}
                          </span>
                          <span className="text-xl font-black text-[#FC5101]">
                            {m.arr}
                          </span>
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
                <div
                  ref={chartRef}
                  className="grid gap-6 lg:grid-cols-[1fr_320px]"
                >
                  <div className="rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <div className="h-64 w-full sm:h-72">
                      {mounted && (
                        <ResponsiveContainer
                          key={chartKey}
                          width="100%"
                          height="100%"
                        >
                          <BarChart
                            data={arrChartData}
                            margin={{ top: 8, right: 16, bottom: 0, left: 0 }}
                          >
                            <CartesianGrid
                              strokeDasharray="3 3"
                              stroke="#e5e7eb"
                              vertical={false}
                            />
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
                              labelStyle={{
                                color: "rgba(255,255,255,0.7)",
                                fontSize: 11,
                              }}
                            />
                            <Bar
                              dataKey="arr"
                              radius={[6, 6, 0, 0]}
                              maxBarSize={64}
                              isAnimationActive={chartInView}
                              animationDuration={800}
                            >
                              {arrChartData.map((_, i) => (
                                <Cell
                                  key={i}
                                  fill={
                                    i === arrChartData.length - 1
                                      ? "#FC5101"
                                      : "#3566A0"
                                  }
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                    <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#486586]">
                      ARR Growth Trajectory (£m)
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex-1 rounded-xl bg-[#FFE1CC] p-5">
                      <p className="text-sm font-bold uppercase tracking-widest text-[#FC5101]">
                        Value Creation
                      </p>
                      <ul className="mt-3 space-y-2">
                        {performanceData.valueCreation.map((v) => (
                          <li
                            key={v}
                            className="flex items-start gap-2 text-sm text-[#011935]"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#FC5101]"
                            />
                            {v}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 rounded-xl bg-[#DCE8FA] p-5">
                      <p className="text-sm font-bold uppercase tracking-widest text-[#3566A0]">
                        Alignment
                      </p>
                      <ul className="mt-3 space-y-2">
                        {performanceData.alignment.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm text-[#011935]"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0 text-[#3566A0]"
                            />
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
            <ParallaxImage src="/images/growth-model.jpg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Growth Strategy
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  A Structured, Scalable Growth Model
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  Growth is driven by expansion within global enterprise clients
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {growthModelPillars.map((pillar, i) => {
                  const Icon = growthIcons[i];
                  return (
                    <AnimateIn
                      key={pillar.number}
                      delay={i * 0.1}
                      className="h-full"
                    >
                      <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2EB]">
                            <Icon
                              className="text-[#FC5101]"
                              style={{ fontSize: 28, width: 28, height: 28 }}
                            />
                          </div>
                          <p className="whitespace-pre-line text-base font-bold leading-[1.15] text-[#011935] sm:text-lg">
                            {pillar.title}
                          </p>
                        </div>
                        <ol className="mt-4 space-y-2">
                          {pillar.bullets.map((b, bi) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-sm text-[#486586]"
                            >
                              <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FC5101]/15 text-[10px] font-bold text-[#FC5101]">
                                {bi + 1}
                              </span>
                              {b}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>

              {/* Defensible Positioning — the moat */}
              <AnimateIn delay={0.1}>
                <div className="relative mt-10 overflow-hidden rounded-xl bg-[#011935] p-6 sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FC5101] to-[#3566A0]" />

                  <div className="flex items-center gap-3">
                    <Shield
                      className="text-[#FC5101]"
                      style={{ fontSize: 22, width: 22, height: 22 }}
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FC5101] sm:text-sm">
                      {growthModelDefensible.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                    {growthModelDefensible.title}
                  </h3>

                  <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                    {growthModelDefensible.pillars.map((p, i) => {
                      const Icon = defensibleIcons[i];
                      return (
                        <div key={p.label}>
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white">
                              <Icon
                                className="text-[#FC5101]"
                                style={{ fontSize: 22, width: 22, height: 22 }}
                              />
                            </div>
                            <p className="text-base font-bold text-white">
                              {p.label}
                            </p>
                          </div>
                          <p className="mt-2 text-sm leading-6 text-white">
                            {p.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-sm italic leading-6 text-white/60 sm:text-base">
                      {growthModelDefensible.closing}
                    </p>
                  </div>
                </div>
              </AnimateIn>

              {/* Summary — key point style */}
              <AnimateIn delay={0.2}>
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#FFE1CC] p-5">
                  <Zap size={20} className="shrink-0 text-[#FC5101]" />
                  <p className="text-sm text-[#011935]">
                    <span className="font-bold">Key Point:</span>{" "}
                    {growthModelSummary}
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 4 — ENTERPRISE FOUNDATIONS ═══ */}
        <section id="enterprise-foundations">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage src="/images/enterprise-foundations.jpg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Enterprise Readiness
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Strong Enterprise Foundations with Clear Path to Scale
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {enterpriseFoundations.positioning}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2">
                {enterpriseFoundations.quadrants.map((q, i) => (
                  <AnimateIn key={q.title} delay={i * 0.1} className="h-full">
                    <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#011935] font-black text-white"
                          style={{ fontSize: 18 }}
                        >
                          {i + 1}
                        </div>
                        <h3 className="text-base font-bold leading-tight text-[#011935] sm:text-lg">
                          {q.title}
                        </h3>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {q.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-[#486586]"
                          >
                            <CheckCircle2
                              size={13}
                              className="mt-0.5 shrink-0 text-[#FC5101]"
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              {/* Key Point */}
              <AnimateIn delay={0.1}>
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#FFE1CC] p-5">
                  <Zap size={20} className="shrink-0 text-[#FC5101]" />
                  <p className="text-sm text-[#011935]">
                    <span className="font-bold">Key Point:</span>{" "}
                    {enterpriseFoundations.keyPoint}
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 5 — INVESTMENT ALLOCATION ═══ */}
        <section id="investment">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage src="/images/investment-allocation.jpg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Use of Funds
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Targeted Investment to Unlock Growth (£2–3m)
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
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
                    <AnimateIn
                      key={area.title}
                      delay={i * 0.1}
                      className="h-full"
                    >
                      <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2EB]">
                            <Icon
                              className="text-[#FC5101]"
                              style={{ fontSize: 28, width: 28, height: 28 }}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-[#011935] sm:text-lg">
                              {area.title}
                            </h3>
                          </div>
                          <span className="shrink-0 text-xl font-black text-[#FC5101]">
                            {area.amount}
                          </span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {area.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-sm text-[#486586]"
                            >
                              <CheckCircle2
                                size={13}
                                className="mt-0.5 shrink-0 text-[#FC5101]/60"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>

              {/* Key Point */}
              <AnimateIn delay={0.1}>
                <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#FFE1CC] p-5">
                  <Zap size={20} className="shrink-0 text-[#FC5101]" />
                  <p className="text-sm text-[#011935]">
                    <span className="font-bold">Key Point:</span>{" "}
                    {investmentSummary.closing}
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* ═══ SLIDE 6 — GLOBAL EXPANSION ═══ */}
        <section id="global-expansion">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage src="/images/global-expansion.jpg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Go-to-Market
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Client-Led Global Expansion with Scalable Delivery
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {globalExpansionSummary}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {globalExpansionSteps.map((step, i) => {
                  const Icon = expansionIcons[i];
                  return (
                    <AnimateIn
                      key={step.number}
                      delay={i * 0.1}
                      className="h-full"
                    >
                      <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#011935] font-black text-white"
                            style={{ fontSize: 18 }}
                          >
                            {step.number}
                          </div>
                          <div className="min-w-0">
                            <p className="text-base font-bold leading-tight text-[#011935] sm:text-lg">
                              {step.title}
                            </p>
                          </div>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-sm text-[#486586]"
                            >
                              <Icon
                                size={13}
                                className="mt-0.5 shrink-0 text-[#FC5101]/60"
                              />
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

        {/* ═══ SLIDE 7 — WHY NOW / INVESTMENT SUMMARY ═══ */}
        <section id="why-now">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            <ParallaxImage src="/images/why-now-closing.jpg" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#011935] from-0% via-[#011935]/75 via-45% to-transparent to-80%" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011935]/40 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-8 sm:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#FC5101]">
                  Investment Thesis
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-3xl">
                  Investment Summary / Why Now
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white sm:text-base sm:leading-7">
                  {closingStatement}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F7F7] px-5 py-12 sm:px-16 sm:py-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {whyNowPillars.map((pillar, i) => {
                  const Icon = whyNowIcons[i];
                  return (
                    <AnimateIn
                      key={pillar.title}
                      delay={i * 0.1}
                      className="h-full"
                    >
                      <div className="h-full rounded-xl border border-[#e5e7eb] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF2EB]">
                            <Icon
                              className="text-[#FC5101]"
                              style={{ fontSize: 28, width: 28, height: 28 }}
                            />
                          </div>
                          <h3 className="text-base font-bold leading-[1.15] text-[#011935] sm:text-lg">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-[#486586]">
                          {pillar.body}
                        </p>
                      </div>
                    </AnimateIn>
                  );
                })}
              </div>

              {/* Byline */}
              <AnimateIn delay={0.3}>
                <div className="mt-16 text-center">
                  <div className="mx-auto h-px w-16 bg-[#FC5101]/40" />
                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#486586]/60">
                    <span className="normal-case">ImpactXP</span> · April 2026
                  </p>
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
