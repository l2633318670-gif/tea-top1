export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-warm-white px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <a
          href="/"
          className="text-lg font-medium tracking-[0.15em] text-charcoal"
        >
          山茶
        </a>

        {/* Copyright */}
        <p className="text-xs tracking-[0.08em] text-charcoal/25">
          &copy; {new Date().getFullYear()} Mountain Tea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
