"use client"

import { Truck, Cpu, Flame, PlayCircle, Settings, Zap, Package, HardHat, type LucideIcon } from "lucide-react"
import { useTranslations } from "next-intl"

const serviceKeys = [
  { key: "supply", number: "01", icon: Package },
  { key: "installation", number: "02", icon: HardHat },
  { key: "engineering", number: "03", icon: Cpu },
  { key: "welding", number: "04", icon: Flame },
  { key: "commissioning", number: "05", icon: PlayCircle },
  { key: "maintenance", number: "06", icon: Settings },
  { key: "automationService", number: "07", icon: Zap },
  { key: "transport", number: "08", icon: Truck },
] as const

export function Services() {
  const t = useTranslations("services")

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
              {t("label")}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t("title")}
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md md:text-right">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceKeys.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.number}
                className="group relative rounded-xl border border-border bg-background/60 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-foreground/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-lg bg-foreground/[0.07] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <span className="text-muted-foreground/40 text-xs font-mono font-medium tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground mb-2.5">
                    {t(`items.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`items.${service.key}.description`)}
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
              <div className="text-muted-foreground text-sm">{t("summary.directions")}</div>
            </div>
            <div className="sm:border-x sm:border-border">
              <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-1">100%</div>
              <div className="text-muted-foreground text-sm">{t("summary.fullCycle")}</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-muted-foreground text-sm">{t("summary.support")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
