"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"

const languages = [
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
  { code: "uz", label: "O'zbek" },
  { code: "tr", label: "Türkçe" },
] as const

export function LanguageSwitcherDesktop({ isScrolled }: { isScrolled: boolean }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const switchLocale = (code: string) => {
    const segments = pathname.split("/")
    segments[1] = code
    router.push(segments.join("/"))
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70 px-2 py-1.5 rounded-md ${
          isScrolled ? "text-foreground" : "text-white"
        }`}
      >
        <Globe className="w-4 h-4" />
        <span>{locale.toUpperCase()}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden min-w-[160px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-secondary text-left ${
                lang.code === locale ? "bg-secondary font-semibold" : ""
              }`}
            >
              <span className="text-xs font-mono text-muted-foreground w-5">{lang.code.toUpperCase()}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function LanguageSwitcherMobile() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const switchLocale = (code: string) => {
    const segments = pathname.split("/")
    segments[1] = code
    router.push(segments.join("/"))
    setOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      {open && (
        <div className="absolute bottom-full right-0 mb-3 bg-background border border-border rounded-xl shadow-xl overflow-hidden min-w-[160px] animate-in fade-in slide-in-from-bottom-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary text-left ${
                lang.code === locale ? "bg-secondary font-semibold" : ""
              }`}
            >
              <span className="text-xs font-mono text-muted-foreground w-5">{lang.code.toUpperCase()}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:bg-foreground/90 transition-colors"
      >
        {open ? (
          <span className="text-xs font-bold">✕</span>
        ) : (
          <Globe className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}
