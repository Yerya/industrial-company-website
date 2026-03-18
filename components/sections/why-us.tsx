const advantages = [
  {
    number: "1",
    title: "Комплексный подход",
    description: "Полный цикл работ от проектирования до запуска и обслуживания"
  },
  {
    number: "2",
    title: "Техническая экспертиза",
    description: "Команда инженеров с многолетним опытом работы"
  },
  {
    number: "3",
    title: "Решения под ключ",
    description: "Поставка, монтаж и запуск с гарантией качества"
  },
  {
    number: "4",
    title: "Индивидуальный подход",
    description: "Разработка решений под конкретные задачи производства"
  }
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-background/60 text-sm font-medium tracking-wide uppercase mb-4">
              Преимущества
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-8">
              Почему выбирают нас
            </h2>
            <p className="text-background/70 text-lg leading-relaxed">
              Мы строим долгосрочные партнерские отношения, основанные на доверии, 
              качестве и результатах.
            </p>
          </div>
          
          <div className="space-y-8">
            {advantages.map((advantage) => (
              <div 
                key={advantage.number}
                className="flex gap-6 pb-8 border-b border-background/10 last:border-0 last:pb-0"
              >
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-background/20">
                  {advantage.number}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-background mb-2">{advantage.title}</h3>
                  <p className="text-background/60 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
