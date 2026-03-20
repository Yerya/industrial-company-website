import { Wrench, Cpu, Flame, PlayCircle, Settings, Zap, Package, HardHat } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Поставка оборудования",
    description: "Подбор и поставка промышленного оборудования и комплектующих от ведущих европейских производителей",
    icon: Package,
  },
  {
    number: "02",
    title: "Монтаж под ключ",
    description: "Комплексный монтаж технологических линий, трубопроводов и оборудования — от фундамента до запуска",
    icon: HardHat,
  },
  {
    number: "03",
    title: "Инженеринг",
    description: "Проектирование и разработка инженерных решений для промышленных объектов любой сложности",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Сварочные работы",
    description: "Сварочные работы трубопроводов и металлоконструкций по международным стандартам",
    icon: Flame,
  },
  {
    number: "05",
    title: "Пуск и наладка",
    description: "Пусконаладочные работы и ввод оборудования в эксплуатацию под ключ",
    icon: PlayCircle,
  },
  {
    number: "06",
    title: "Ремонт и обслуживание",
    description: "Техническое обслуживание и ремонт промышленного оборудования",
    icon: Settings,
  },
  {
    number: "07",
    title: "Автоматизация",
    description: "Программирование и автоматизация производственных процессов",
    icon: Zap,
  },
  {
    number: "08",
    title: "Монтажные работы",
    description: "Монтаж и установка отдельных узлов, модернизация существующих производственных линий",
    icon: Wrench,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-foreground/[0.03] to-transparent rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-foreground/[0.02] to-transparent rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              Наши услуги
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Полный спектр промышленных решений
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md md:text-right">
            Комплексные услуги для реализации проектов любого масштаба — от идеи до запуска
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.number}
                className="group relative rounded-xl border border-border bg-background/60 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-0.5"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-foreground/[0.07] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-foreground/70" />
                    </div>
                    <span className="text-muted-foreground/40 text-xs font-mono font-medium tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom summary bar */}
        <div className="mt-12 rounded-xl border border-border bg-background/40 backdrop-blur-sm p-6 md:p-8">
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-1">8</div>
              <div className="text-muted-foreground text-sm">Направлений деятельности</div>
            </div>
            <div className="sm:border-x sm:border-border">
              <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-muted-foreground text-sm">Полный цикл работ</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-muted-foreground text-sm">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
