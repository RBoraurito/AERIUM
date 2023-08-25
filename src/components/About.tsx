import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'

interface AboutProps {
  ourMission: {
    title: string;
    description: string;
  };
  ourVision: {
    title: string;
    description: string;
  };
  ourValues: {
    title: string;
    items: string[];
  };
  ourPrinciples: {
    title: string;
    items: string[];
  };
}

export function About({ ourMission, ourVision, ourValues, ourPrinciples }: AboutProps) {

  return (
    <section
      id="about"
      aria-label="About us"
      className="relative isolate overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
      />
      <div className='relative'>
        <Container className="">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{ourMission.title}</h2>
                  <p className="mt-4 leading-8 text-gray-100">
                    {ourMission.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
                src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base lg:max-w-lg">
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{ourVision.title}</h2>
                  <p className="mt-4 leading-8 text-gray-100 mb-8">
                    {ourVision.description}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{ourValues.title}</h2>
                  <ul role="list" className="mt-4 space-y-4 text-gray-600 mb-8">
                    {ourValues.items.map((value) => (
                      <li className="flex gap-x-3 items-center">
                        <PaperAirplaneIcon className="mt-1 h-4 w-4 flex-none text-white" aria-hidden="true" />
                        <span className='text-gray-100'>
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{ourPrinciples.title}</h2>
                  <ul role="list" className="mt-4 space-y-4 text-gray-600">
                    {ourPrinciples.items.map((value) => (
                      <li className="flex gap-x-3 items-center">
                        <PaperAirplaneIcon className="mt-1 h-4 w-4 flex-none text-white" aria-hidden="true" />
                        <span className='text-gray-100'>
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
