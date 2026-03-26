import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Products } from "@/components/sections/products"
import { Services } from "@/components/sections/services"
import { Industries } from "@/components/sections/industries"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { LanguageSwitcherMobile } from "@/components/language-switcher"
import { setRequestLocale } from "next-intl/server"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Industries />
      <Products />
      <Services />
      <Contact />
      <Footer />
      <LanguageSwitcherMobile />
    </main>
  )
}
