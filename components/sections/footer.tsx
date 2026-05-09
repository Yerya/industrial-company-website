"use client"

import { Phone, Mail, MapPin, Building2, Globe2 } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("footer")

  const uzPhone = t("uzOfficePhone")
  const uzPhoneHref = uzPhone.replace(/\s/g, "")
  const euPhone = t("euOfficePhone")
  const euPhoneHref = euPhone.replace(/\s/g, "")
  const euEmail = t("euOfficeEmail")

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
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

          {/* Uzbekistan Office */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 flex-shrink-0" />
              {t("uzOfficeLabel")}
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{t("uzOfficeAddress")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${uzPhoneHref}`} className="hover:text-foreground transition-colors">
                  {uzPhone}
                </a>
              </li>
            </ul>
          </div>

          {/* EU Office */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe2 className="w-4 h-4 flex-shrink-0" />
              {t("euOfficeLabel")}
            </h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${euPhoneHref}`} className="hover:text-foreground transition-colors">
                  {euPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${euEmail}`} className="hover:text-foreground transition-colors break-all">
                  {euEmail}
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
