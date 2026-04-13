interface QuoteBlockProps {
  quote: string;
  source: string;
}

export default function QuoteBlock({ quote, source }: QuoteBlockProps) {
  return (
    <blockquote className="text-center">
      <div className="relative mx-auto max-w-[750px] px-8 py-1 sm:px-0 sm:py-2">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 -top-[8px] text-[3rem] font-black leading-none text-white/70 sm:-left-[58px] sm:-top-[14px] sm:text-[6rem]"
        >
          &ldquo;
        </span>
        <p className="relative z-10 text-2xl font-black leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-4xl lg:text-[2.6rem]">
          {quote}
        </p>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[10px] right-0 text-[3rem] font-black leading-none text-white/70 sm:-bottom-[18px] sm:-right-[58px] sm:text-[6rem]"
        >
          &rdquo;
        </span>
      </div>
      <footer className="mt-1 flex justify-end pr-6 sm:mt-2 sm:pr-12">
        <cite className="not-italic text-sm font-semibold uppercase tracking-[0.3em] text-[#FC5101] sm:text-base">
          &mdash; {source}
        </cite>
      </footer>
    </blockquote>
  );
}
