"use client"

import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("about")

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              {t("label")}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              {t("title")}
            </h2>
            <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>{t.rich("text1", { strong: (chunks) => <strong className="text-brand font-bold">{chunks}</strong> })}</p>
              <p>{t("text2")}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                alt={t("imageAlt1")}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                alt={t("imageAlt2")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className="mt-20 pt-16 border-t border-border">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">
            {t("clients")}
          </p>
          <div className="flex flex-wrap items-center gap-10 md:gap-16">
            <img src="/Coca-Cola_logo.svg.png" alt="Coca-Cola" className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/KHSlogo.svg" alt="KHS" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <span className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors">Omega Foods</span>
            <img src="/raupxonLogo.png" alt="Raupxon" className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/azotlogo.png" alt="Azot Group" className="h-14 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {[
            { value: "50+", label: t("stats.objects") },
            { value: "100+", label: t("stats.projects") },
            { value: "25+", label: t("stats.specialists") },
            { value: "8", label: t("stats.experience") },
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
