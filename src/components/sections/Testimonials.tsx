"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { FeatureCarousel, type FeatureCarouselItem } from "@/components/ui/feature-carousel";

function textureSvg(base: string, secondary: string, accent: string, highlight: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200" fill="none">
      <rect width="900" height="1200" fill="${base}"/>
      <rect width="900" height="1200" fill="url(#bg)"/>
      <g filter="url(#blurA)" opacity="0.92">
        <path d="M58 414C102 228 250 108 444 90C620 72 828 146 858 318C890 504 664 540 534 620C398 704 342 930 168 900C20 876 -8 694 58 414Z" fill="url(#shapeA)"/>
      </g>
      <g filter="url(#blurB)" opacity="0.86">
        <path d="M302 114C462 70 716 134 808 314C898 492 782 786 578 852C386 914 220 710 182 520C144 334 142 158 302 114Z" fill="url(#shapeB)"/>
      </g>
      <g filter="url(#blurC)" opacity="0.78">
        <path d="M44 1000C164 864 350 770 532 774C702 778 838 884 884 1038C924 1172 792 1236 654 1226C528 1218 456 1160 346 1122C234 1082 108 1082 44 1000Z" fill="url(#shapeC)"/>
      </g>
      <g opacity="0.62">
        <path d="M132 284C248 184 398 146 566 166C702 182 808 236 864 308" stroke="url(#rim)" stroke-width="16" stroke-linecap="round"/>
        <path d="M182 360C312 282 442 274 570 310C668 338 742 390 800 470" stroke="rgba(4,16,34,0.74)" stroke-width="18" stroke-linecap="round"/>
        <path d="M146 250C266 176 422 144 586 170C716 190 812 242 864 302" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round"/>
      </g>
      <g opacity="0.28">
        <ellipse cx="248" cy="196" rx="180" ry="138" fill="${highlight}"/>
        <ellipse cx="702" cy="814" rx="220" ry="156" fill="${accent}"/>
      </g>
      <rect width="900" height="1200" fill="url(#vignette)"/>
      <defs>
        <linearGradient id="bg" x1="90" y1="60" x2="810" y2="1140" gradientUnits="userSpaceOnUse">
          <stop stop-color="${secondary}"/>
          <stop offset="1" stop-color="${base}"/>
        </linearGradient>
        <linearGradient id="shapeA" x1="118" y1="136" x2="688" y2="862" gradientUnits="userSpaceOnUse">
          <stop stop-color="${highlight}"/>
          <stop offset="0.38" stop-color="${accent}"/>
          <stop offset="1" stop-color="${base}"/>
        </linearGradient>
        <linearGradient id="shapeB" x1="320" y1="110" x2="706" y2="850" gradientUnits="userSpaceOnUse">
          <stop stop-color="${secondary}"/>
          <stop offset="0.52" stop-color="${accent}"/>
          <stop offset="1" stop-color="${base}"/>
        </linearGradient>
        <linearGradient id="shapeC" x1="126" y1="804" x2="756" y2="1228" gradientUnits="userSpaceOnUse">
          <stop stop-color="${base}"/>
          <stop offset="0.48" stop-color="${accent}"/>
          <stop offset="1" stop-color="${secondary}"/>
        </linearGradient>
        <linearGradient id="rim" x1="180" y1="188" x2="866" y2="346" gradientUnits="userSpaceOnUse">
          <stop stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="0.3" stop-color="${highlight}"/>
          <stop offset="0.65" stop-color="${accent}"/>
          <stop offset="1" stop-color="rgba(255,255,255,0.08)"/>
        </linearGradient>
        <radialGradient id="vignette" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(450 540) rotate(90) scale(760 620)">
          <stop offset="0.58" stop-color="rgba(0,0,0,0)"/>
          <stop offset="1" stop-color="rgba(0,0,0,0.42)"/>
        </radialGradient>
        <filter id="blurA" x="-48" y="-20" width="1018" height="1040" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="20"/>
        </filter>
        <filter id="blurB" x="102" y="16" width="806" height="942" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="16"/>
        </filter>
        <filter id="blurC" x="-16" y="706" width="962" height="590" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="14"/>
        </filter>
      </defs>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const TESTIMONIALS: FeatureCarouselItem[] = [
  {
    src: textureSvg("#1E140F", "#BA9A79", "#2F7D8D", "#E3C3A6"),
    alt: "Abstract blue healthcare texture",
    quote:
      "The team brought structure to a very complex AI initiative and helped us turn scattered pilots into a system our operators could actually use.",
    role: "Senior Operations Leader",
    organization: "Regional healthcare network",
  },
  {
    src: textureSvg("#092438", "#2E96A8", "#D19D98", "#A9D6DB"),
    alt: "Abstract finance texture in navy and slate tones",
    quote:
      "What stood out was the blend of engineering discipline and business understanding. Delivery stayed practical, fast, and executive-ready.",
    role: "Strategy and Data Executive",
    organization: "Global financial services firm",
  },
  {
    src: textureSvg("#171A59", "#2E2F8E", "#8E4FA7", "#D6A6C8"),
    alt: "Abstract logistics texture in blue green tones",
    quote:
      "They helped modernize our data foundations while keeping the operating teams aligned. The result felt scalable from day one.",
    role: "VP, Technology Transformation",
    organization: "International logistics operator",
  },
  {
    src: textureSvg("#132238", "#3E5E8A", "#7FB5C8", "#D1E2EA"),
    alt: "Abstract product engineering texture with layered gradients",
    quote:
      "From architecture to execution, the engagement felt thoughtful and disciplined. We were not handed slides. We were handed working systems.",
    role: "Digital Product Sponsor",
    organization: "Enterprise software business",
  },
  {
    src: textureSvg("#23161E", "#5E3559", "#2C326B", "#D1A2C8"),
    alt: "Abstract operations texture in steel blue tones",
    quote:
      "Their delivery model gave us confidence to move faster without losing governance. That balance mattered more than anything else.",
    role: "Head of Transformation",
    organization: "Industrial services organization",
  },
] as const;

export function Testimonials() {
  return (
    <section className="bg-[var(--surface-2)] pt-[clamp(72px,9vw,120px)] pb-6 md:pb-8">
      <div className="container-x">
        <SectionLabel number="04">Client Perspectives</SectionLabel>
        <div className="mt-10">
          <FeatureCarousel
            title={<>What clients value most </>}
            subtitle="A few representative reflections from enterprise teams operating in complex, high-stakes environments."
            items={TESTIMONIALS}
            className="min-h-[560px] md:min-h-[620px]"
          />
        </div>
      </div>
    </section>
  );
}
