"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

const CONSENT_COOKIE_NAME = "cs_cookie_consent";
const CONSENT_STORAGE_KEY = "cs-cookie-consent";
const CONSENT_DISMISSED_KEY = "cs-cookie-consent-dismissed";
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

type ConsentStatus = "accepted" | "rejected";

function readConsentCookie() {
  if (typeof document === "undefined") return null;

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")}=([^;]*)`),
  );

  return match ? decodeURIComponent(match[1]) : null;
}

function persistConsent(status: ConsentStatus) {
  document.cookie = `${CONSENT_COOKIE_NAME}=${status}; path=/; max-age=${CONSENT_MAX_AGE}; SameSite=Lax`;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { status } }));
}

export function CookieConsentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsentCookie();
    const dismissed = window.sessionStorage.getItem(CONSENT_DISMISSED_KEY);

    if (stored === "accepted" || stored === "rejected") {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, stored);
      return;
    }

    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    if (dismissed === "true") return;

    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  const handleDecision = (status: ConsentStatus) => {
    persistConsent(status);
    setOpen(false);
  };

  const handleDismiss = () => {
    window.sessionStorage.setItem(CONSENT_DISMISSED_KEY, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] bg-[rgba(0,18,52,0.32)] backdrop-blur-[2px] md:hidden"
            aria-hidden
          />
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-description"
            className="fixed inset-x-4 bottom-4 z-[1300] md:inset-x-auto md:right-6 md:bottom-6 md:w-[420px]"
          >
            <div className="overflow-hidden border border-[var(--border-2)] bg-white p-6 text-[var(--ink)] shadow-[0_20px_54px_-28px_rgba(0,18,52,0.28)]">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Close cookie preferences"
                  className="absolute right-0 top-0 inline-flex h-8 w-8 items-center justify-center border border-[#dbe8f3] bg-white text-[var(--ink-3)] transition-colors hover:border-[var(--border-2)] hover:text-[var(--ink)]"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center border border-[#d7e6f2] bg-[#f4f9fd] text-[#1782c5]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="label-mono !text-[10px] !text-[#1782c5]">Privacy controls</div>
                    <h2
                      id="cookie-consent-title"
                      className="mt-1 font-heading text-[20px] font-semibold text-[var(--ink)]"
                    >
                      Your cookie preferences
                    </h2>
                  </div>
                </div>

                <p
                  id="cookie-consent-description"
                  className="mt-5 text-[14px] leading-[1.75] text-[var(--ink-2)]"
                >
                  We use essential cookies to keep the site secure and working. With your
                  permission, we can also use analytics cookies to understand performance and
                  improve the experience.
                </p>

                <div className="mt-4 inline-flex items-center gap-2 border border-[#dbe8f3] bg-[#f7fbfe] px-3 py-1.5">
                  <span className="label-mono !text-[10px] !text-[var(--ink-3)]">
                    No marketing cookies by default
                  </span>
                </div>

                <div className="mt-5 text-[13px] leading-[1.7] text-[var(--ink-3)]">
                  Read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-[#146fa9] transition-colors hover:text-[var(--navy)]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  for more detail on how we handle your data.
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => handleDecision("rejected")}
                    className="inline-flex h-11 items-center justify-center border border-[var(--border-2)] bg-white px-5 text-[14px] font-medium text-[var(--ink)] transition-all hover:border-[var(--sky-deep)] hover:bg-[var(--surface-2)]"
                  >
                    Reject all
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecision("accepted")}
                    className="inline-flex h-11 items-center justify-center bg-[#0b6fb8] px-5 text-[14px] font-medium text-white transition-all hover:bg-[#095f9b]"
                  >
                    Accept all
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
