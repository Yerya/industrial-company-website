import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Industries } from "@/components/sections/industries"
import { WhyUs } from "@/components/sections/why-us"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
