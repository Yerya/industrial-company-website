"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "О компании" },
  { href: "#products", label: "Продукция" },
  { href: "#services", label: "Услуги" },
  { href: "#industries", label: "Отрасли" },
  { href: "#contact", label: "Контакты" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            className={`font-[family-name:var(--font-display)] font-bold text-base md:text-lg tracking-tight transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            SOD EAST TRADE HOUSE
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:opacity-70 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <Button 
            className={`hidden lg:inline-flex font-medium h-10 px-6 ${
              isScrolled 
                ? 'bg-foreground text-background hover:bg-foreground/90' 
                : 'bg-white text-black hover:bg-white/90'
            }`}
            onClick={() => scrollToSection('#contact')}
          >
            Связаться
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-background border-t border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-medium h-12"
                  onClick={() => scrollToSection('#contact')}
                >
                  Связаться
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
