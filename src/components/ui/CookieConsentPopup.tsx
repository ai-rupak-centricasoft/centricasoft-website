"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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
            className="fixed inset-0 z-[1200] bg-[rgba(0,18,52,0.28)] md:hidden"
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
            className="fixed inset-x-4 bottom-4 z-[1300] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[min(430px,calc(100vw-48px))] lg:right-8 lg:bottom-8"
          >
            <div className="max-h-[calc(100vh-32px)] overflow-y-auto rounded-[8px] border border-[var(--border-2)] bg-white p-6 text-[var(--ink)] shadow-[0_20px_54px_-28px_rgba(0,18,52,0.34)] sm:p-6">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Close cookie preferences"
                  className="absolute right-0 top-0 inline-flex h-8 w-8 items-center justify-center border border-[#dbe8f3] bg-white text-[var(--ink-3)] transition-colors hover:border-[var(--border-2)] hover:text-[var(--ink)]"
                >
                  <X className="h-4 w-4" />
                </button>

                <h2
                  id="cookie-consent-title"
                  className="pr-12 font-heading text-[21px] font-semibold leading-[1.2] text-[var(--ink)]"
                >
                  We value your privacy
                </h2>

                <p
                  id="cookie-consent-description"
                  className="mt-4 text-[14px] font-medium leading-[1.65] text-[var(--ink-2)]"
                >
                  We respect your privacy and your right to control how we collect, use, and share
                  your personal data. We use cookie data for analytics purposes. By clicking 'Accept
                  All,' you consent to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-[var(--sky-deep)] transition-colors hover:text-[var(--navy)]"
                  >
                    Privacy Notice
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-[var(--sky-deep)] transition-colors hover:text-[var(--navy)]"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => handleDecision("rejected")}
                    className="inline-flex h-11 items-center justify-center border border-[var(--border-2)] bg-white px-5 text-[14px] font-medium text-[var(--ink)] transition-all hover:border-[var(--sky-deep)] hover:bg-[var(--surface-2)]"
                  >
                    Reject All
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecision("accepted")}
                    className="inline-flex h-11 items-center justify-center border border-[#0b6fb8] bg-[#0b6fb8] px-5 text-[14px] font-medium text-white transition-all hover:border-[#095f9b] hover:bg-[#095f9b]"
                  >
                    Accept All
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
