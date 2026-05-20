"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { MagneticButton } from "../ui/MagneticButton";
import { MegaNav } from "./MegaNav";
import { NAV_ITEMS } from "@/lib/constants";

type Panel = "what-we-do" | "products" | "company";
type MobilePanel = Panel | null;

const MOBILE_SUBNAV: Record<Panel, { label: string; href: string }[]> = {
  "what-we-do": [
    { label: "Agentic AI & Autonomous Agents", href: "/what-we-do/agentic-ai" },
    { label: "Generative AI Chatbots", href: "/what-we-do/genai-chatbots" },
    { label: "Data Engineering & Pipelines", href: "/what-we-do/data-engineering" },
    { label: "Data Analytics & Insights", href: "/what-we-do/data-analytics" },
    { label: "Machine Learning & Advanced Analytics", href: "/what-we-do/data-analytics" },
    { label: "App Development", href: "/contact" },
  ],
  products: [{ label: "Nubo", href: "/products/nubo" }],
  company: [
    { label: "About Us", href: "/company/about" },
    { label: "Clients", href: "/company/clients" },
    { label: "Partners", href: "/company/partners" },
  ],
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<Panel | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>(null);
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setActive(null);
    setMobilePanel(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobile) return;

    const scrollY = window.scrollY;
    const root = document.documentElement;
    const originalHtmlOverflow = root.style.overflow;
    const originalHtmlOverscrollBehavior = root.style.overscrollBehavior;
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalTop = document.body.style.top;
    const originalLeft = document.body.style.left;
    const originalRight = document.body.style.right;
    const originalWidth = document.body.style.width;
    const originalOverscrollBehavior = document.body.style.overscrollBehavior;

    root.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overscrollBehavior = "none";

    return () => {
      root.style.overflow = originalHtmlOverflow;
      root.style.overscrollBehavior = originalHtmlOverscrollBehavior;
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;
      document.body.style.left = originalLeft;
      document.body.style.right = originalRight;
      document.body.style.width = originalWidth;
      document.body.style.overscrollBehavior = originalOverscrollBehavior;
      window.scrollTo(0, scrollY);
    };
  }, [mobile]);

  // Home page uses a white nav so the inset hero card reads as a card on white
  // Dark-transparent nav only applies to full-bleed hero pages (not home)
  const overDarkHero =
    (currentPath.startsWith("/company/") ||
      currentPath === "/contact" ||
      currentPath.startsWith("/privacy-policy") ||
      currentPath.startsWith("/terms-of-use") ||
      currentPath === "/insights" ||
      currentPath === "/careers") &&
    !scrolled &&
    !active;
  const mobileOverDarkHero = currentPath !== "/" && overDarkHero;
  const navItemBase = overDarkHero
    ? "text-white/78 hover:bg-white/10 hover:text-white"
    : "text-[var(--ink-2)] hover:bg-[var(--highlight)] hover:text-[var(--navy)]";
  const navItemActive = overDarkHero
    ? "bg-white/12 text-white"
    : "bg-[var(--highlight)] text-[var(--navy)]";
  const desktopNavText =
    "whitespace-nowrap text-[0.975rem] xl:text-[1rem] font-semibold tracking-[-0.01em]";
  const mobileNavText =
    "font-heading text-[clamp(1.5rem,4vw,1.9rem)] font-semibold tracking-[-0.02em]";
  const mobileMetaText = "font-mono text-[0.72rem] sm:text-[0.76rem] uppercase tracking-[0.22em]";

  let closeTimer: ReturnType<typeof setTimeout> | null = null;
  const open = (p: Panel) => {
    if (closeTimer) clearTimeout(closeTimer);
    setActive(p);
  };
  const scheduleClose = () => {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => setActive(null), 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] border-b transition-all duration-[400ms] ${
        mobileOverDarkHero
          ? "border-white/10 bg-[rgba(6,16,34,0.28)] backdrop-blur-md"
          : "border-[rgba(200,223,240,0.5)] bg-[rgba(247,250,253,0.96)] backdrop-blur-2xl"
      } ${
        scrolled || active
          ? "lg:border-[rgba(200,223,240,0.5)] lg:bg-[rgba(247,250,253,0.92)] lg:backdrop-blur-2xl"
          : overDarkHero
            ? "lg:border-white/10 lg:bg-[rgba(6,16,34,0.28)] lg:backdrop-blur-md"
            : "lg:border-transparent lg:bg-transparent lg:backdrop-blur-none"
      }`}
      onMouseLeave={scheduleClose}
    >
      <div className="container-x flex items-center justify-between h-[4.75rem]">
        <div className="lg:hidden">
          <Logo light={mobileOverDarkHero} />
        </div>
        <div className="hidden lg:block">
          <Logo light={overDarkHero} />
        </div>

        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          {NAV_ITEMS.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                onMouseEnter={() => open(item.mega as Panel)}
                onFocus={() => open(item.mega as Panel)}
                className={`group inline-flex h-11 items-center gap-1.5 rounded-lg px-4 xl:px-[1.125rem] ${desktopNavText} transition-all duration-150 ${
                  active === item.mega ? navItemActive : navItemBase
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    active === item.mega ? "rotate-180" : "group-hover:rotate-180"
                  }`}
                />
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={scheduleClose}
                className={`inline-flex h-11 items-center rounded-lg px-4 xl:px-[1.125rem] ${desktopNavText} transition-all duration-150 ${
                  currentPath === item.href ? navItemActive : navItemBase
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          {/* <Link
            href="/contact"
            className="text-[14px] text-[var(--ink-2)] hover:text-[var(--navy)] transition-colors"
          >
            Contact
          </Link> */}
          <MagneticButton
            to="/contact"
            variant={overDarkHero ? "white" : "primary"}
            className={
              overDarkHero
                ? "!h-11 !px-6 !text-[0.95rem] !font-semibold"
                : "!h-11 !bg-[#072057] !bg-none !px-6 !text-[0.95rem] !font-semibold !text-white !shadow-none hover:!bg-[#0A2D73]"
            }
          >
            Request Consultation
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobile(true)}
          aria-label="Open menu"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            mobileOverDarkHero
              ? "border-white/20 bg-white/10"
              : "border-[var(--border)] bg-white/40"
          }`}
        >
          <Menu className={`h-5 w-5 ${mobileOverDarkHero ? "text-white" : "text-[var(--navy)]"}`} />
        </button>

        <MegaNav active={active} onClose={scheduleClose} />
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] h-screen min-h-screen overflow-hidden overscroll-none bg-[#001234] [height:100dvh] [min-height:100dvh] lg:hidden"
          >
            <div className="pointer-events-none fixed inset-0 z-0 bg-[#001234]" />
            <div className="pointer-events-none absolute inset-0 z-0 opacity-35">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(30,191,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(30,191,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute left-0 top-[72px] h-px w-full bg-gradient-to-r from-transparent via-[#1EBFFF]/70 to-transparent" />
            </div>

            <div className="relative z-10 h-full overflow-y-auto overscroll-contain">
              <div className="container-x flex h-[72px] items-center justify-between">
                <Logo light />
                <button
                  onClick={() => setMobile(false)}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded border border-white/15 bg-white/[0.03] text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="container-x flex min-h-[calc(100vh-72px)] flex-col pb-8 pt-8">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <span className={`${mobileMetaText} text-[#7DE7FF]`}>Navigation</span>
                  <span className={`${mobileMetaText} text-white/45`}>CS / 2026</span>
                </div>

                <div className="flex flex-col">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.06,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {item.mega ? (
                        <MobileNavGroup
                          index={i + 1}
                          label={item.label}
                          panel={item.mega}
                          open={mobilePanel === item.mega}
                          links={MOBILE_SUBNAV[item.mega]}
                          onToggle={() =>
                            setMobilePanel((current) => (current === item.mega ? null : item.mega))
                          }
                        />
                      ) : (
                        <Link
                          href={item.href}
                          className={`group flex items-center gap-4 py-5 ${mobileNavText} text-white/90`}
                        >
                          <span className="font-mono text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#7DE7FF]/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="transition-colors group-hover:text-[#7DE7FF]">
                            {item.label}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-12">
                  <div className="mb-4 grid grid-cols-3 gap-2 font-mono text-[0.7rem] sm:text-[0.74rem] uppercase tracking-[0.16em] text-white/45">
                    <span className="rounded border border-white/10 px-2 py-2 text-center">AI</span>
                    <span className="rounded border border-white/10 px-2 py-2 text-center">
                      Data
                    </span>
                    <span className="rounded border border-white/10 px-2 py-2 text-center">
                      GenAI
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="group flex h-[3.5rem] w-full items-center justify-between rounded bg-white px-5 font-heading text-[1.125rem] sm:text-[1.1875rem] font-semibold tracking-[-0.02em] text-[var(--navy)] shadow-[0_18px_40px_-24px_rgba(255,255,255,0.45)] transition-colors hover:bg-white/92"
                  >
                    <span>Request Consultation</span>
                    <span className="font-mono text-[0.85rem] transition-transform group-hover:translate-x-1">
                      01
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileNavGroup({
  index,
  label,
  panel,
  open,
  links,
  onToggle,
}: {
  index: number;
  label: string;
  panel: Panel;
  open: boolean;
  links: { label: string; href: string }[];
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`mobile-subnav-${panel}`}
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-5 text-left font-heading text-[clamp(1.5rem,4vw,1.9rem)] font-semibold tracking-[-0.02em] text-white/90"
      >
        <span className="flex items-center gap-4">
          <span className="font-mono text-[0.72rem] sm:text-[0.76rem] font-semibold text-[#7DE7FF]/70">
            {String(index).padStart(2, "0")}
          </span>
          <span className="transition-colors group-hover:text-[#7DE7FF]">{label}</span>
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[#7DE7FF] transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`mobile-subnav-${panel}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mb-2 ml-[42px] rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group/sub flex items-center justify-between border-b border-white/7 py-3 text-[0.975rem] sm:text-[1.025rem] font-semibold leading-snug tracking-[-0.01em] text-white/74 last:border-b-0"
                >
                  <span>{link.label}</span>
                  <span className="h-px w-4 bg-[#7DE7FF]/40 transition-all group-hover/sub:w-7 group-hover/sub:bg-[#7DE7FF]" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
