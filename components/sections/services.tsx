import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Инженеринг",
    description: "Проектирование и разработка инженерных решений для промышленных объектов любой сложности"
  },
  {
    number: "02",
    title: "Монтаж оборудования",
    description: "Профессиональный монтаж и установка промышленного оборудования с гарантией качества"
  },
  {
    number: "03",
    title: "Сварочные работы",
    description: "Сварочные работы трубопроводов и металлоконструкций по международным стандартам"
  },
  {
    number: "04",
    title: "Пуск и наладка",
    description: "Пусконаладочные работы и ввод оборудования в эксплуатацию под ключ"
  },
  {
    number: "05",
    title: "Ремонт оборудования",
    description: "Техническое обслуживание и ремонт промышленного оборудования"
  },
  {
    number: "06",
    title: "Автоматизация",
    description: "Программирование и автоматизация производственных процессов"
  },
  {
    number: "07",
    title: "Поставка оборудования",
    description: "Поставка промышленного оборудования и запасных частей от ведущих производителей"
  },
  {
    number: "08",
    title: "Поставка материалов",
    description: "Поставка сырья и материалов для производственных нужд"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
            Наши услуги
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Полный спектр промышленных решений
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div 
              key={service.number}
              className="bg-secondary p-8 md:p-10 group hover:bg-background transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-muted-foreground text-sm font-medium">{service.number}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
