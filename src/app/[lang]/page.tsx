import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { About } from '@/components/About'
import { Services } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { getDictionary } from './dictionaries'

export function generateMetadata({params}: {params: any}) {
  const { lang } = params;
  const title = lang === 'en' ?
    'AERIUM | a team of professionals dedicated to airworthiness & safety' :
    'AERIUM | un equipo de profesionales dedicados a la aeronavegabilidad y la seguridad';
  const description = lang === 'en' ?
    'AERIUM is a team of professionals dedicated to offering aircraft maintenance management services in terms of planning, execution and control of said activity' :
    'AERIUM es un equipo de profesionales dedicados a ofrecer servicios de gestión del mantenimiento de aeronaves en términos de planificación, ejecución y control de dicha actividad.'
  return {
    title,
    description,
  }
}

export default async function Home({params}: {params: any}) {
  const dict = await getDictionary(params.lang)
  return (
    <>
      <Header {...dict.header} />
      <main>
        <Hero {...dict.hero} />
        <About {...dict.about} />
        <Services {...dict.services}/>
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
