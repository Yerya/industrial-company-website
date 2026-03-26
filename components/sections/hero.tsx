"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("hero")

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/mainheroimage.webp"
          alt={t("imageAlt")}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="container mx-auto px-6 md:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <p className="text-white/70 text-sm md:text-base font-medium tracking-wide uppercase mb-6">
              {t("subtitle")}
            </p>

            <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 text-balance">
              {t("title")}
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold px-8 h-12 text-base"
                onClick={scrollToContact}
              >
                {t("ctaContact")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-medium px-8 h-12 text-base group bg-transparent"
                onClick={scrollToServices}
              >
                {t("ctaServices")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
