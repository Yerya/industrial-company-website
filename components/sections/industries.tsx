"use client"

import { useTranslations } from "next-intl"

const industryKeys = ["food", "energy", "chemical", "metallurgy"] as const

const industryImages: Record<string, string> = {
  food: "/pishevayaprom.jpg",
  energy: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  chemical: "/himicheskprom.jpg",
  metallurgy: "https://plus.unsplash.com/premium_photo-1661963767417-80e43ff30993?w=800&q=80",
}

export function Industries() {
  const t = useTranslations("industries")

  return (
    <section id="industries" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
            {t("label")}
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {industryKeys.map((key) => (
            <div
              key={key}
              className="group relative aspect-[16/10] rounded-lg overflow-hidden"
            >
              <img
                src={industryImages[key]}
                alt={t(`items.${key}.title`)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-semibold text-white mb-2">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
