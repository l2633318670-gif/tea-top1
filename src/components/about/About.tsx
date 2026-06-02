export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center bg-warm-white px-8 py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-[350px] w-[350px] rounded-full bg-mist/30 blur-3xl" />
      </div>

      <div className="relative max-w-3xl text-center">
        {/* Section label */}
        <span className="text-[11px] tracking-[0.25em] text-charcoal/30 uppercase">
          About
        </span>

        {/* Main heading */}
        <h2 className="mt-8 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-tight tracking-[0.04em] text-charcoal">
          茶之道
          <br />
          在于自然
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-10 h-px w-12 bg-charcoal/15" />

        {/* Body text */}
        <p className="mt-10 text-lg leading-loose tracking-[0.06em] text-charcoal/55">
          山茶，取自深山幽谷，承天地之气，蕴日月之华。
          我们深信一杯好茶，不只是滋味，更是与自然对话的方式。
          从采摘到制茶，每一步都遵循古法，保留茶叶最本真的灵魂。
        </p>

        <p className="mt-6 text-lg leading-loose tracking-[0.06em] text-charcoal/55">
          不追求量产，只在乎每一片叶子是否在最好的时刻被摘下，
          是否遇上懂它的人。
        </p>

        {/* Values */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            { label: "古法", en: "Tradition" },
            { label: "自然", en: "Nature" },
            { label: "匠心", en: "Craft" },
          ].map((v) => (
            <div key={v.label}>
              <div className="text-2xl font-medium tracking-[0.1em] text-charcoal">
                {v.label}
              </div>
              <div className="mt-2 text-[10px] tracking-[0.2em] text-charcoal/25 uppercase">
                {v.en}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
