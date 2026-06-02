export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col items-center justify-center bg-charcoal px-8 py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sage/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-bark/20 blur-3xl" />
      </div>

      <div className="relative max-w-2xl text-center">
        <span className="text-[11px] tracking-[0.25em] text-warm-white/25 uppercase">
          Contact
        </span>

        <h2 className="mt-8 text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-[0.04em] text-warm-white">
          与山茶相遇
        </h2>

        <div className="mx-auto mt-10 h-px w-12 bg-warm-white/10" />

        <p className="mt-10 text-lg leading-loose tracking-[0.06em] text-warm-white/40">
          期待与您分享我们的茶与故事
        </p>

        {/* Contact info */}
        <div className="mt-16 space-y-8">
          <div>
            <span className="text-[10px] tracking-[0.25em] text-warm-white/20 uppercase">
              Email
            </span>
            <p className="mt-2 text-lg tracking-[0.04em] text-warm-white/60">
              hello@camellia-tea.com
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.25em] text-warm-white/20 uppercase">
              WeChat
            </span>
            <p className="mt-2 text-lg tracking-[0.04em] text-warm-white/60">
              山茶官方
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.25em] text-warm-white/20 uppercase">
              Address
            </span>
            <p className="mt-2 text-lg tracking-[0.04em] text-warm-white/60">
              云南省西双版纳州勐海县
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="mailto:hello@camellia-tea.com"
            className="inline-flex items-center gap-2 border-b border-warm-white/15 pb-2 text-sm tracking-[0.1em] text-warm-white/40 transition-all duration-500 hover:border-warm-white/40 hover:text-warm-white/70"
          >
            发送邮件
            <span className="text-xs leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
