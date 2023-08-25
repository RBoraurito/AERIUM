'use client'

import Image, { type ImageProps } from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

interface ServiceItem {
  title: string | React.ReactNode;
  description: string;
  image: string;
}

interface ServicesProps {
  title: string;
  description: string;
  items: ServiceItem[];
}


function Service({
  service,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  service: ServiceItem
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <h3 className={clsx("mt-2 font-display font-semibold text-xl text-start", isActive ? 'text-blue-600' : 'text-slate-900')}>
        {service.title}
      </h3>
      <p className="mt-4 text-sm text-slate-600">{service.description}</p>
    </div>
  )
}

function ServicesMobile({ services }: { services: ServiceItem[]}) {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {services.map((service) => (
        <div key={service.description}>
          <Service service={service} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={service.image}
                alt=""
                sizes="52.75rem"
                width={1920}
                height={1282}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ServicesDesktop({ services }: { services: ServiceItem[]}) {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8 gap-y-8">
            {services.map((service, featureIndex) => (
              <Service
                key={service.description}
                service={{
                  ...service,
                  title: (
                    <Tab className="ui-not-focus-visible:outline-none text-start">
                      <span className="absolute inset-0" />
                      {service.title}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {services.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.description}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                      width={1920}
                      height={1282}
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function Services({title, description, items}: ServicesProps) {
  return (
    <section
      id="services"
      aria-label=""
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {description}
          </p>
        </div>
        <ServicesMobile services={items} />
        <ServicesDesktop services={items} />
      </Container>
    </section>
  )
}
