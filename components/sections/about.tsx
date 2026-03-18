export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              О компании
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              Надежный партнер для вашего производства
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-foreground font-semibold">ООО &quot;SOD EAST TRADE HOUSE&quot;</strong> — компания, специализирующаяся
                на комплексных инженерных решениях для промышленных предприятий.
              </p>
              <p>
                Мы предоставляем полный спектр услуг: от проектирования и поставки оборудования
                до монтажа, пусконаладки и технического обслуживания.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                alt="Инженерные работы"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                alt="Промышленное оборудование"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {[
            { value: "50+", label: "Промышленных объектов" },
            { value: "100+", label: "Успешных проектов" },
            { value: "25+", label: "Специалистов" },
            { value: "10+", label: "Лет опыта" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
