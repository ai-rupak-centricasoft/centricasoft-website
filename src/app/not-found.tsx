import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-[120px] leading-none text-gradient-brand">404</h1>
        <h2 className="mt-4 font-heading text-2xl font-semibold text-[var(--ink)]">
          Page not found
        </h2>
        <p className="mt-2 text-[14px] text-[var(--ink-3)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-brand-h px-8 text-[14px] font-medium text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
