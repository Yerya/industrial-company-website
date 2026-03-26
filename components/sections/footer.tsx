"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-display)] font-black text-2xl text-brand mb-4" style={{ WebkitTextStroke: '0.5px currentColor' }}>
              SOD EAST TRADE HOUSE
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t("tagline")}
            </p>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("productsAndServices")}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>{t("links.supply")}</li>
              <li>{t("links.installation")}</li>
              <li>{t("links.commissioning")}</li>
              <li>{t("links.service")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t("contacts")}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{t("location")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+998931822054" className="hover:text-foreground transition-colors">
                  +998 93 182 20 54
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:sod.trade.house@gmail.com" className="hover:text-foreground transition-colors">
                  sod.trade.house@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  )
}
