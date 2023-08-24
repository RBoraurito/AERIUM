import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export function generateMetadata({params}) {
  const { lang } = params;
  const title = lang === 'en' ?
    'Aerium | a team of professionals dedicated to airworthiness & safety' :
    'Aerium | un equipo de profesionales dedicados a la aeronavegabilidad y la seguridad';
  const description = lang === 'en' ?
    'AERIUM is a team of professionals dedicated to offering aircraft maintenance management services in terms of planning, execution and control of said activity' :
    'AERIUM es un equipo de profesionales dedicados a ofrecer servicios de gestión del mantenimiento de aeronaves en términos de planificación, ejecución y control de dicha actividad.'
  return {
    title,
    description,
  }
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
