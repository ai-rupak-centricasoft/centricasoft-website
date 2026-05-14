"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3.5 whitespace-nowrap">
      <Image
        width={40}
        height={40}
        src="/assest/logo.webp"
        alt="CentricaSoft logo"
        priority
        className="h-10 w-10 rounded-[4px] object-contain transition-transform duration-[600ms] ease-out group-hover:rotate-[8deg]"
      />
      <span className="font-sans text-[1.375rem] xl:text-[1.45rem] font-bold leading-none tracking-[-0.01em]">
        {light ? (
          <span className="text-white">CentricaSoft</span>
        ) : (
          <span className="inline-block bg-[linear-gradient(90deg,#3341A7_0%,#3053B3_22%,#2B6EC6_46%,#238AD9_70%,#18ADF1_100%)] bg-clip-text text-transparent">
            CentricaSoft
          </span>
        )}
      </span>
      {/* <span
        className={`font-display text-[18px] font-semibold tracking-tight ${
          light ? "text-white" : "text-[var(--navy)]"
        }`}
      >
        CentricaSoft
      </span> */}
    </Link>
  );
}
