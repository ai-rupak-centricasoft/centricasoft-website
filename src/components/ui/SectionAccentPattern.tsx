"use client";

export function SectionAccentPattern({
  variant,
}: {
  variant: "top-left" | "bottom-right" | "split-right" | "bottom-left";
}) {
  const variants = {
    "top-left": {
      shellClass:
        "pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] lg:block opacity-90",
      style: {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'><g fill='none' stroke='%23C8DFF0' stroke-width='2' stroke-linecap='round' opacity='0.82'><path d='M-24 96 C54 28,146 24,230 74 S390 170,520 86' stroke-dasharray='10 20'/><path d='M-40 182 C36 126,132 122,214 170 S380 268,520 182' stroke-dasharray='9 19'/><path d='M-10 280 C82 214,180 212,266 262 S422 350,548 286' stroke-dasharray='10 18'/><path d='M18 386 C116 330,212 334,292 384 S446 470,560 412' stroke-dasharray='8 18'/><path d='M52 478 C142 432,230 438,312 482 S448 548,538 516' stroke-dasharray='8 20'/><path d='M72 58 l14 -6'/><path d='M162 110 l14 -6'/><path d='M262 150 l14 -6'/><path d='M122 242 l14 -6'/><path d='M332 300 l14 -6'/><path d='M214 404 l14 -6'/><path d='M404 430 l14 -6'/></g></svg>\")",
        backgroundSize: "540px 540px",
        backgroundPosition: "0 0",
        maskImage: "linear-gradient(90deg, black 0%, black 62%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 62%, transparent 100%)",
      },
    },
    "bottom-right": {
      shellClass:
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block opacity-90",
      style: {
        backgroundImage:
          "repeating-radial-gradient(circle at 100% 84%, rgba(168,207,230,0.52) 0 2px, transparent 2px 24px), linear-gradient(225deg, rgba(30,191,255,0.1), transparent 58%)",
        backgroundSize: "520px 520px, auto",
        maskImage: "linear-gradient(270deg, black 0%, black 62%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(270deg, black 0%, black 62%, transparent 100%)",
      },
    },
    "split-right": {
      shellClass:
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block opacity-95",
      style: {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='460' height='620' viewBox='0 0 460 620'><g fill='none' stroke='%23C8DFF0' stroke-width='2' stroke-linecap='round' opacity='0.8'><path d='M430 -10 C360 58,354 138,412 214 S452 374,394 454 S332 604,424 652' stroke-dasharray='10 18'/><path d='M344 0 C286 74,292 156,350 224 S384 368,334 446 S278 580,350 636' stroke-dasharray='9 18'/><path d='M250 34 C206 96,214 168,268 232 S306 364,264 430 S214 554,270 612' stroke-dasharray='8 18'/><path d='M404 86 l12 8'/><path d='M314 146 l12 8'/><path d='M238 274 l12 8'/><path d='M360 334 l12 8'/><path d='M292 484 l12 8'/><path d='M388 558 l12 8'/></g></svg>\")",
        backgroundSize: "420px 620px",
        backgroundPosition: "100% 0",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(270deg, black 0%, black 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(270deg, black 0%, black 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
      },
    },
    "bottom-left": {
      shellClass:
        "pointer-events-none absolute inset-y-0 left-0 hidden w-[40%] lg:block opacity-90",
      style: {
        backgroundImage:
          "repeating-radial-gradient(circle at 0% 86%, rgba(168,207,230,0.54) 0 2px, transparent 2px 24px), linear-gradient(160deg, rgba(30,191,255,0.1), transparent 60%)",
        backgroundSize: "480px 480px, auto",
        maskImage: "linear-gradient(90deg, black 0%, black 64%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 64%, transparent 100%)",
      },
    },
  } as const;

  const selected = variants[variant];

  return <div aria-hidden className={selected.shellClass} style={selected.style} />;
}
