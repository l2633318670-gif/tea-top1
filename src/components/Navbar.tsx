"use client";

const NAV_ITEMS = [
  { label: "关于", href: "#about" },
  { label: "茶品", href: "#products" },
  { label: "故事", href: "#story" },
  { label: "联系", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <a
          href="/"
          className="text-xl font-medium tracking-[0.15em] text-charcoal opacity-0 animate-fade-in"
        >
          山茶
        </a>

        <ul className="flex items-center gap-10 text-sm tracking-[0.08em] text-charcoal/70">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.label}
              className="opacity-0 animate-fade-in"
              style={{
                animationDelay: `${400 + i * 120}ms`,
              }}
            >
              <a
                href={item.href}
                className="transition-colors duration-300 hover:text-charcoal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
