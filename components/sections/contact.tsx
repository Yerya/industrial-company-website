"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export function Contact() {
  const t = useTranslations("contact")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              {t("label")}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
              {t("title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              {t("subtitle")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{t("address")}</p>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {t("addressValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{t("phone")}</p>
                  <a
                    href="tel:+998931822054"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    +998 93 182 20 54
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-background" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{t("email")}</p>
                  <a
                    href="mailto:sod.trade.house@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    sod.trade.house@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-lg p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-background" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground mb-3">
                  {t("success.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("success.message")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.name")}</label>
                  <Input
                    placeholder={t("form.namePlaceholder")}
                    required
                    className="h-12 bg-secondary border-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.company")}</label>
                  <Input
                    placeholder={t("form.companyPlaceholder")}
                    className="h-12 bg-secondary border-0"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("form.phone")}</label>
                    <Input
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      required
                      className="h-12 bg-secondary border-0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("form.email")}</label>
                    <Input
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      className="h-12 bg-secondary border-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.message")}</label>
                  <Textarea
                    placeholder={t("form.messagePlaceholder")}
                    rows={4}
                    className="bg-secondary border-0 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-semibold text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
