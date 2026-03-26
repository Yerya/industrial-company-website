"use client"

import { useTranslations } from "next-intl"

const advantageKeys = ["comprehensive", "expertise", "turnkey", "individual"] as const

export function WhyUs() {
  const t = useTranslations("whyUs")

  return (
    <section id="why-us" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-background/60 text-sm font-medium tracking-wide uppercase mb-4">
              {t("label")}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight mb-8">
              {t("title")}
            </h2>
            <p className="text-background/70 text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="space-y-8">
            {advantageKeys.map((key, i) => (
              <div
                key={key}
                className="flex gap-6 pb-8 border-b border-background/10 last:border-0 last:pb-0"
              >
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-background/20">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-background mb-2">{t(`items.${key}.title`)}</h3>
                  <p className="text-background/60 leading-relaxed">{t(`items.${key}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
