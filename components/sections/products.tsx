"use client"

import { useState, type ReactNode } from "react"
import { ChevronDown, Droplets, Beaker, Pipette, SprayCan, Container, Thermometer, Gauge, Fan, Cog, ArrowRight, type LucideIcon } from "lucide-react"
import { useTranslations } from "next-intl"

type ProductDef = {
  id: string
  tKey: string
  icon: LucideIcon
  image: string
  images?: string[]
  imageScale?: boolean
  hasDetails?: boolean
  hasFooter?: boolean
  applicationCount?: number
  alfaLaval?: boolean
}

const equipmentDefs: ProductDef[] = [
  { id: "water-treatment", tKey: "waterTreatment", icon: Droplets, image: "/Screenshot%202026-05-14%20at%2015.47.50.png", hasDetails: true, hasFooter: true },
  { id: "blending", tKey: "blending", icon: Beaker, image: "/smesitelnieustanovki.jpg", applicationCount: 3 },
  { id: "dosing", tKey: "dosing", icon: Pipette, image: "/dosingnew.jpeg", applicationCount: 2 },
  { id: "cip", tKey: "cip", icon: SprayCan, image: "/cipnew.jpeg", imageScale: true, applicationCount: 4 },
]

const componentDefs: ProductDef[] = [
  { id: "tanks", tKey: "tanks", icon: Container, image: "/emkostnoeoborudovanije.jpg" },
  { id: "heat-exchangers", tKey: "heatExchangers", icon: Thermometer, image: "/sanitary_plate_heat_exchanger.png", alfaLaval: true },
  { id: "valves", tKey: "valves", icon: Gauge, image: "/sanitary%20stainless%20steel%20valves%20food%20processing.jpg", images: ["/sanitary%20stainless%20steel%20valves%20food%20processing.jpg", "/klapana1.jpeg"], alfaLaval: true },
  { id: "pumps", tKey: "pumps", icon: Fan, image: "/sanitary%20stainless%20steel%20pump%20food%20processing.avif", imageScale: true, alfaLaval: true },
  { id: "automation", tKey: "automation", icon: Cog, image: "/elementiavtomatiki.jpg" },
]

const richTags = {
  brand: (chunks: ReactNode) => <span className="font-bold text-brand">{chunks}</span>,
}

function splitBrand(title: string): { brand: string | null; name: string } {
  const tail = title.match(/^(.+?)\s+(SOD\s+[A-Z]+)\s*$/)
  if (tail) return { name: tail[1].trim(), brand: tail[2] }
  const head = title.match(/^(SOD\s+[A-Z]+)\s+(.+)$/)
  if (head) return { brand: head[1], name: head[2].trim() }
  return { brand: null, name: title }
}

function ProductTitle({ title, variant }: { title: string; variant: "compact" | "large" | "header" }) {
  const { brand, name } = splitBrand(title)
  if (variant === "header") {
    return <span className="flex flex-col leading-tight">
      {brand && <span className="text-[10px] font-bold tracking-[0.15em] text-brand mb-0.5">{brand}</span>}
      <span>{name}</span>
    </span>
  }
  return <>
    {brand && <span className="block text-xs font-bold tracking-[0.15em] text-brand mb-1.5">{brand}</span>}
    <span>{name}</span>
  </>
}

function AlfaLavalBadge({ size = "md" }: { size?: "sm" | "md" }) {
  const sizeClasses = size === "sm" ? "h-6 px-2.5" : "h-8 px-3"
  return (
    <div className={`inline-flex items-center bg-white/95 backdrop-blur-sm rounded-md shadow-md ${sizeClasses}`}>
      <img src="/Alfa_Laval.svg.png" alt="Alfa Laval" className="h-full w-auto object-contain" />
    </div>
  )
}

function DetailContent({ def, section, t }: { def: ProductDef; section: string; t: ReturnType<typeof useTranslations> }) {
  const rawDescription = t.raw(`${section}.${def.tKey}.description`)
  const hasDescription = typeof rawDescription === "string" && rawDescription.length > 0

  return (
    <>
      {hasDescription && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {t.rich(`${section}.${def.tKey}.description`, richTags)}
        </p>
      )}
      {def.hasDetails && (
        <div className="space-y-2 mb-4">
          <p className="text-sm font-medium text-foreground">{t("waterTreatmentStandard")}</p>
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-mono font-bold text-foreground/60">{i + 1}</span>
              </span>
              <span className="text-muted-foreground">{t(`${section}.${def.tKey}.details.${i}`)}</span>
            </div>
          ))}
        </div>
      )}
      {def.hasFooter && (
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 p-4 bg-background/60 rounded-lg">
          {t(`${section}.${def.tKey}.footer`)}
        </p>
      )}
      {def.applicationCount && def.applicationCount > 0 && (
        <div className="space-y-3">
          {Array.from({ length: def.applicationCount }, (_, i) => (
            <div key={i} className="p-4 bg-background/60 rounded-lg">
              <p className="text-sm font-semibold text-foreground mb-1.5">{t(`${section}.${def.tKey}.applications.${i}.area`)}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(`${section}.${def.tKey}.applications.${i}.text`)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

function ProductImage({ def, t, section, useContain, className }: { def: ProductDef; t: ReturnType<typeof useTranslations>; section: string; useContain: boolean; className?: string }) {
  return (
    <div className={`relative w-full h-full ${useContain ? "bg-white" : "bg-muted/30"} ${className ?? ""}`}>
      <img
        src={def.image}
        alt={t(`${section}.${def.tKey}.title`)}
        className={useContain ? "absolute inset-0 w-full h-full object-contain p-6" : "absolute inset-0 w-full h-full object-cover"}
      />
      {def.alfaLaval && (
        <div className="absolute top-3 left-3 z-10">
          <AlfaLavalBadge />
        </div>
      )}
    </div>
  )
}

function ProductShowcase({ items, section, useContain = false, compactImage = false }: { items: ProductDef[]; section: string; useContain?: boolean; compactImage?: boolean }) {
  const [activeId, setActiveId] = useState(items[0].id)
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null)
  const active = items.find((p) => p.id === activeId) ?? items[0]
  const t = useTranslations("products")

  return (
    <>
      {/* Mobile: accordion */}
      <div className="lg:hidden space-y-3">
        {items.map((def) => {
          const PIcon = def.icon
          const isOpen = expandedMobileId === def.id
          return (
            <div key={def.id} className="rounded-xl border border-border bg-secondary/50 overflow-hidden">
              <button
                onClick={() => setExpandedMobileId(isOpen ? null : def.id)}
                className="w-full flex items-center gap-4 p-4 text-left"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isOpen ? "bg-foreground text-background" : "bg-foreground/[0.07] text-brand"
                }`}>
                  <PIcon className="w-5 h-5" />
                </div>
                <span className="font-[family-name:var(--font-display)] text-base font-semibold text-foreground flex-1">
                  <ProductTitle title={t(`${section}.${def.tKey}.title`)} variant="header" />
                </span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-4 pb-5 pt-1 border-t border-border">
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <ProductImage def={def} t={t} section={section} useContain={useContain} />
                  </div>
                  <DetailContent def={def} section={section} t={t} />
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Desktop: split layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-0">
        {/* Left: product list */}
        <div className="flex flex-col min-w-0 sticky top-[30vh] self-start">
          {items.map((def, i) => {
            const PIcon = def.icon
            const isActive = def.id === activeId
            return (
              <button
                key={def.id}
                onClick={() => setActiveId(def.id)}
                className={`group flex items-center gap-4 px-5 py-5 text-left transition-all duration-200 border-l-2 ${
                  isActive
                    ? "border-l-brand bg-secondary/80"
                    : "border-l-transparent hover:bg-secondary/40"
                } ${i > 0 ? "border-t border-t-border" : ""}`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive ? "bg-foreground text-background" : "bg-foreground/[0.07] text-brand"
                }`}>
                  <PIcon className="w-5 h-5" />
                </div>
                <span className={`font-[family-name:var(--font-display)] text-base font-semibold transition-colors ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}>
                  <ProductTitle title={t(`${section}.${def.tKey}.title`)} variant="header" />
                </span>
                <ArrowRight className={`w-4 h-4 ml-auto flex-shrink-0 transition-all ${
                  isActive ? "opacity-100 text-foreground translate-x-0" : "opacity-0 -translate-x-2"
                }`} />
              </button>
            )
          })}
        </div>

        {/* Right: detail panel */}
        <div className="bg-secondary/50 rounded-r-2xl overflow-hidden border border-border border-l-0 min-w-0">
          <div key={active.id} className="animate-in fade-in duration-300">
            {!compactImage && (
              <>
                {active.images ? (
                  <div className="grid grid-cols-2">
                    {active.images.map((img, i) => (
                      <div key={i} className={`relative aspect-[21/9] ${useContain ? "bg-white" : "bg-muted/30"}`}>
                        <img
                          src={img}
                          alt={t(`${section}.${active.tKey}.title`)}
                          className={useContain ? "absolute inset-0 w-full h-full object-contain p-6" : "absolute inset-0 w-full h-full object-cover"}
                        />
                        {active.alfaLaval && i === 0 && (
                          <div className="absolute top-3 left-3 z-10">
                            <AlfaLavalBadge />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative aspect-[21/9]">
                    <ProductImage def={active} t={t} section={section} useContain={useContain} />
                  </div>
                )}
              </>
            )}
            <div className="p-6 md:p-8">
              {compactImage ? (
                <div className="flex gap-5 mb-5">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-muted/30 flex-shrink-0">
                    <img src={active.image} alt={t(`${section}.${active.tKey}.title`)} className={`absolute inset-0 w-full h-full ${active.imageScale ? "object-contain p-2" : "object-cover"}`} />
                    {active.alfaLaval && (
                      <div className="absolute top-1.5 left-1.5 z-10">
                        <AlfaLavalBadge size="sm" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground mb-2">
                      <ProductTitle title={t(`${section}.${active.tKey}.title`)} variant="compact" />
                    </h3>
                    {(() => {
                      const raw = t.raw(`${section}.${active.tKey}.description`)
                      return typeof raw === "string" && raw.length > 0 ? (
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {t.rich(`${section}.${active.tKey}.description`, richTags)}
                        </p>
                      ) : null
                    })()}
                  </div>
                </div>
              ) : (
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground mb-4">
                  <ProductTitle title={t(`${section}.${active.tKey}.title`)} variant="large" />
                </h3>
              )}
              <DetailContent def={active} section={section} t={t} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function Products() {
  const t = useTranslations("products")

  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        {/* Equipment */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
              {t("label")}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {t("equipmentTitle")}
            </h2>
          </div>

          <ProductShowcase items={equipmentDefs} section="equipment" compactImage />
        </div>

        {/* Components */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {t("componentsTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md md:text-right">
              {t("componentsSubtitle")}
            </p>
          </div>

          <ProductShowcase items={componentDefs} section="components" useContain />
        </div>
      </div>
    </section>
  )
}
