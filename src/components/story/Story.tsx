export default function Story() {
  return (
    <section
      id="story"
      className="relative flex min-h-screen flex-col items-center justify-center bg-warm-white px-8 py-24"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[450px] w-[450px] rounded-full bg-bark/4 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-mist/40 blur-3xl" />
      </div>

      <div className="relative max-w-3xl text-center">
        {/* Timeline decorative element */}
        <div className="mx-auto mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-charcoal/8" />
          <span className="text-[11px] tracking-[0.25em] text-charcoal/30 uppercase">
            Our Story
          </span>
          <div className="h-px flex-1 bg-charcoal/8" />
        </div>

        {/* Story chapters */}
        <div className="space-y-20">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-charcoal/20">
              2016
            </span>
            <h3 className="mt-3 text-2xl font-medium tracking-[0.06em] text-charcoal">
              缘起
            </h3>
            <p className="mt-5 text-base leading-loose tracking-[0.05em] text-charcoal/50">
              一次云南深山的旅行，让我们遇见了那些被遗忘的古茶树。
              在云雾缭绕的山间，茶农用最朴素的方式泡了一壶茶 ——
              那滋味，让我们决定做一件事：让更多人喝到真正的中国好茶。
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.3em] text-charcoal/20">
              2018
            </span>
            <h3 className="mt-3 text-2xl font-medium tracking-[0.06em] text-charcoal">
              寻茶
            </h3>
            <p className="mt-5 text-base leading-loose tracking-[0.05em] text-charcoal/50">
              两年时间，我们走遍云南、福建、浙江的茶山，与当地茶农建立合作。
              每一片茶园我们都亲自去看，每一位制茶师傅我们都深入交流。
              我们相信，好茶的秘密不在工厂，在山水之间。
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.3em] text-charcoal/20">
              2024
            </span>
            <h3 className="mt-3 text-2xl font-medium tracking-[0.06em] text-charcoal">
              山茶
            </h3>
            <p className="mt-5 text-base leading-loose tracking-[0.05em] text-charcoal/50">
              山茶品牌正式诞生。我们希望以茶为媒，让每个人在忙碌的生活中，
              都能拥有片刻宁静。一杯好茶，就是一段与自然相处的时光。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
