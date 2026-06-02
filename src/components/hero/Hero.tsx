export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-warm-white px-8">
      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-mist/40 blur-3xl" />
      </div>

      {/* Decorative line top */}
      <div className="absolute left-1/2 top-[25%] h-px w-16 -translate-x-1/2 bg-charcoal/10 opacity-0 animate-fade-in animation-delay-900" />

      {/* Main content */}
      <div className="relative flex flex-col items-center text-center">
        {/* Brand name */}
        <h1 className="text-[clamp(5rem,12vw,10rem)] font-medium leading-none tracking-[0.05em] text-charcoal opacity-0 animate-fade-in">
          山茶
        </h1>

        {/* Divider */}
        <div className="my-10 h-px w-12 bg-charcoal/15 opacity-0 animate-fade-in animation-delay-600" />

        {/* Tagline */}
        <p className="max-w-md text-lg leading-relaxed tracking-[0.12em] text-charcoal/60 opacity-0 animate-fade-in animation-delay-900">
          以茶为媒，归于自然
        </p>

        {/* English subtitle */}
        <p className="mt-4 text-sm tracking-[0.2em] text-charcoal/35 opacity-0 animate-fade-in animation-delay-900">
          THE ART OF EASTERN TEA
        </p>

        {/* CTA */}
        <div className="mt-16 opacity-0 animate-fade-in animation-delay-1200">
          <a
            href="#products"
            className="inline-flex items-center gap-2 border-b border-charcoal/20 pb-2 text-sm tracking-[0.1em] text-charcoal/60 transition-all duration-500 hover:border-charcoal/50 hover:text-charcoal"
          >
            探索茶品
            <span className="text-xs leading-none transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-slow animation-delay-1200">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-px bg-charcoal/10" />
          <span className="text-[10px] tracking-[0.2em] text-charcoal/25">
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}
