"use client"

import { useState } from "react"
import { ChevronDown, Container, Thermometer, Gauge, Fan, Cog } from "lucide-react"

const products = [
  {
    id: "tanks",
    title: "Емкостное оборудование",
    icon: Container,
    image: "https://images.unsplash.com/photo-1513828418004-7aa1c7e5c824?w=800&q=80",
    description:
      "Емкости различной величины из нержавеющей стали — асептические, смесительные танки, ферментеры, буферные и накопительные резервуары. Применяются в пищевой, химической, фармацевтической и других отраслях промышленности.",
  },
  {
    id: "heat-exchangers",
    title: "Теплообменники",
    icon: Thermometer,
    image: "/sanitary_plate_heat_exchanger.png",
    description:
      "Пластинчатые теплообменники для нагрева, охлаждения и пастеризации. Высокая эффективность теплопередачи, компактные размеры, простота обслуживания. Применяются в пищевой, энергетической, химической промышленности и системах отопления.",
  },
  {
    id: "valves",
    title: "Клапана",
    icon: Gauge,
    image: "/sanitary%20stainless%20steel%20valves%20food%20processing.jpg",
    description:
      "Запорная и регулирующая арматура — седельные, дисковые, отсечные и переключающие клапана. Точное управление потоками в трубопроводных системах промышленных предприятий.",
  },
  {
    id: "pumps",
    title: "Насосы",
    icon: Fan,
    image: "/sanitary%20stainless%20steel%20pump%20food%20processing.avif",
    description:
      "Центробежные, роторные и мембранные насосы для перекачивания жидкостей различной вязкости. Гигиенические и промышленные исполнения для любых технологических процессов.",
  },
  {
    id: "automation",
    title: "Элементы автоматики",
    icon: Cog,
    image: "/industrial%20automation%20control%20panel%20plc%20sensors.webp",
    description:
      "Датчики, контроллеры, исполнительные механизмы и панели управления для автоматизации технологических процессов. Комплексные решения для мониторинга и управления производственными линиями в режиме реального времени.",
  },
]

export function Products() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              Продукция
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Оборудование и комплектующие
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md md:text-right">
            Поставка оборудования и комплектующих от ведущих европейских производителей
          </p>
        </div>

        <div className="space-y-4">
          {products.map((product) => {
            const Icon = product.icon
            const isExpanded = expandedId === product.id

            return (
              <div
                key={product.id}
                className="rounded-xl border border-border bg-secondary/50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : product.id)}
                  className="w-full flex items-center gap-5 p-5 md:p-6 text-left hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-foreground/[0.07] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-foreground">
                      {product.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 md:px-6 pb-6">
                    <div className="flex flex-col md:flex-row gap-6 pt-2 border-t border-border">
                      <div className="pt-5 flex-1">
                        <p className="text-muted-foreground text-base leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                      <div className="w-56 h-56 md:w-64 md:h-64 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center p-3 flex-shrink-0 mx-auto md:mx-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
