"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, ArrowRight, Building2, Globe2, AlertCircle } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { sendContactMessage } from "@/app/actions/send-contact"

export function Contact() {
  const t = useTranslations("contact")
  const locale = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMsg(null)
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const result = await sendContactMessage({
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      locale,
    })

    setIsSubmitting(false)
    if (result.ok) {
      setIsSubmitted(true)
    } else {
      setErrorMsg(t("error.message"))
    }
  }

  const uzPhone = t("uzOffice.phone")
  const uzPhoneHref = uzPhone.replace(/\s/g, "")
  const euPhone = t("euOffice.phone")
  const euPhoneHref = euPhone.replace(/\s/g, "")
  const euEmail = t("euOffice.email")

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
              {/* Uzbekistan Office */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                    {t("uzOffice.title")}
                  </h3>
                </div>
                <div className="space-y-3 pl-1">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                      {t("uzOffice.address")}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    <a
                      href={`tel:${uzPhoneHref}`}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {uzPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* EU Office */}
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-5 h-5 text-background" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                    {t("euOffice.title")}
                  </h3>
                </div>
                <div className="space-y-3 pl-1">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    <a
                      href={`tel:${euPhoneHref}`}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {euPhone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    <a
                      href={`mailto:${euEmail}`}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm break-all"
                    >
                      {euEmail}
                    </a>
                  </div>
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
                    name="name"
                    placeholder={t("form.namePlaceholder")}
                    required
                    className="h-12 bg-secondary border-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.company")}</label>
                  <Input
                    name="company"
                    placeholder={t("form.companyPlaceholder")}
                    className="h-12 bg-secondary border-0"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("form.phone")}</label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      required
                      className="h-12 bg-secondary border-0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("form.email")}</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t("form.emailPlaceholder")}
                      className="h-12 bg-secondary border-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("form.message")}</label>
                  <Textarea
                    name="message"
                    placeholder={t("form.messagePlaceholder")}
                    rows={4}
                    className="bg-secondary border-0 resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="flex items-start gap-2 p-3 rounded-md bg-destructive/10 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

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
