interface QuoteBlockProps {
  quote: string;
  source: string;
  variant?: "dark" | "light";
  align?: "center" | "left";
}

export default function QuoteBlock({
  quote,
  source,
  variant = "dark",
  align = "center",
}: QuoteBlockProps) {
  const isLight = variant === "light";
  const markColor = isLight ? "text-[#011935]/15" : "text-white/70";
  const textColor = isLight ? "text-[#011935]" : "text-white";
  const textShadow = isLight ? "" : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]";

  if (align === "left") {
    return (
      <blockquote className="text-left">
        <span
          aria-hidden="true"
          className={`block font-black leading-none ${markColor} text-[3.5rem] sm:text-[5rem]`}
        >
          &ldquo;
        </span>
        <p
          className={`-mt-4 text-xl font-black leading-[1.2] tracking-tight ${textColor} ${textShadow} sm:-mt-5 sm:text-3xl lg:text-[2rem]`}
        >
          {quote}
        </p>
        <footer className="mt-4 sm:mt-6">
          <cite className="not-italic text-sm font-semibold uppercase tracking-[0.3em] text-[#FC5101] sm:text-base">
            &mdash; {source}
          </cite>
        </footer>
      </blockquote>
    );
  }

  return (
    <blockquote className="text-center">
      <div className="relative mx-auto max-w-[750px] px-8 py-1 sm:px-0 sm:py-2">
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 -top-[8px] text-[3rem] font-black leading-none ${markColor} sm:-left-[58px] sm:-top-[14px] sm:text-[6rem]`}
        >
          &ldquo;
        </span>
        <p className={`relative z-10 text-2xl font-black leading-[1.15] tracking-tight ${textColor} ${textShadow} sm:text-4xl lg:text-[2.6rem]`}>
          {quote}
        </p>
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-[10px] right-0 text-[3rem] font-black leading-none ${markColor} sm:-bottom-[18px] sm:-right-[58px] sm:text-[6rem]`}
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
