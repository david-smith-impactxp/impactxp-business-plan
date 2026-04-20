"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string;
}

export function ParallaxImage({
  src,
  alt = "",
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        aria-hidden={alt === "" || undefined}
        style={reduce ? undefined : { y }}
        className={
          "absolute left-0 -top-[15%] h-[130%] w-full object-cover " +
          (className ?? "")
        }
      />
    </div>
  );
}
