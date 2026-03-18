const industries = [
  {
    title: "Пищевая промышленность",
    description: "Молочные заводы, мясокомбинаты, зернопереработка",
    image: "https://plus.unsplash.com/premium_photo-1661962600569-5d072e30a951?w=800&q=80"
  },
  {
    title: "Энергетика",
    description: "Электростанции, подстанции, энергоинфраструктура",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
  },
  {
    title: "Горнодобывающая промышленность",
    description: "Горнодобывающие предприятия и обогатительные фабрики",
    image: "https://plus.unsplash.com/premium_photo-1682142169420-d0ef7507ef01?w=800&q=80"
  },
  {
    title: "Металлургия",
    description: "Металлургические заводы и металлообработка",
    image: "https://plus.unsplash.com/premium_photo-1661963767417-80e43ff30993?w=800&q=80"
  }
]

export function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
            Отрасли
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Наша специализация
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group relative aspect-[16/10] rounded-lg overflow-hidden"
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
