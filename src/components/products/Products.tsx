const PRODUCTS = [
  {
    name: "云雾绿茶",
    en: "Cloud Mist Green",
    desc: "采自海拔800米以上茶园，清晨露水未干时手工采摘，清雅回甘。",
    note: "春 · 鲜爽",
  },
  {
    name: "古树红茶",
    en: "Ancient Tree Red",
    desc: "百年古树茶青，经传统工艺发酵，汤色琥珀，醇厚温润。",
    note: "秋 · 温润",
  },
  {
    name: "白牡丹",
    en: "White Peony",
    desc: "一芽二叶，自然萎凋，不炒不揉，最大限度保留茶叶本味。",
    note: "春 · 清雅",
  },
  {
    name: "普洱熟茶",
    en: "Ripe Pu'er",
    desc: "云南大叶种晒青，历经岁月沉淀，陈香馥郁，入口绵滑。",
    note: "陈 · 醇厚",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative bg-warm-white px-8 py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-sage/4 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center">
          <span className="text-[11px] tracking-[0.25em] text-charcoal/30 uppercase">
            Products
          </span>
          <h2 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-medium tracking-[0.04em] text-charcoal">
            茶品
          </h2>
          <div className="mx-auto mt-8 h-px w-12 bg-charcoal/15" />
          <p className="mx-auto mt-8 max-w-lg text-base leading-relaxed tracking-[0.06em] text-charcoal/45">
            每一款茶，都是我们与山川自然的对话
          </p>
        </div>

        {/* Product cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="group relative flex flex-col border border-charcoal/5 bg-warm-white/80 p-8 transition-all duration-500 hover:border-charcoal/10 hover:shadow-lg hover:shadow-charcoal/3"
            >
              {/* Product icon / abstract shape */}
              <div className="flex h-32 items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-sage/8 transition-all duration-700 group-hover:scale-110 group-hover:bg-sage/12" />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-xl font-medium tracking-[0.08em] text-charcoal">
                {product.name}
              </h3>
              <span className="mt-1 text-[10px] tracking-[0.2em] text-charcoal/25 uppercase">
                {product.en}
              </span>

              {/* Divider */}
              <div className="mt-4 h-px w-8 bg-charcoal/10 transition-all duration-500 group-hover:w-12" />

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed tracking-[0.04em] text-charcoal/50">
                {product.desc}
              </p>

              {/* Note tag */}
              <span className="mt-auto pt-6 text-[10px] tracking-[0.15em] text-sage">
                {product.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
