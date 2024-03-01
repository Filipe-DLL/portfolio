import Image from 'next/image'
import Link from 'next/link'

import portfolioImage from '@/assets/projetos/Portfolio.png'
import { projectData } from '@/data/projetosData'
import { ArrowRight } from 'lucide-react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

export default function ProjetosHome() {
  return (
    <section
      id="Projetos"
      className="my-20 flex w-full flex-col items-center justify-center pt-10 lg:w-full lg:max-w-[1120px] lg:flex-col"
    >
      <h1 className="font-prompt text-Titulo mb-4 text-center text-4xl font-medium lg:text-5xl">
        Projetos
      </h1>
      {projectData.slice(0, 2).map((item, index) => (
        <div
          key={index}
          className={`flex w-full flex-col items-center justify-center lg:flex-row lg:gap-20 
          ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
          <Link href={'/projetos'} className="mt-5">
            <Image
              src={item.imagem}
              alt={item.imagemAlt}
              className="my-5 h-[300px] w-[400px] rounded-3xl object-cover lg:min-w-[400px]"
            />
          </Link>
          <div className="flex w-full max-w-[640px] flex-col gap-4">
            <h1 className="font-prompt text-Titulo w-full text-start text-2xl font-medium">
              {item.titulo}
            </h1>
            <p className="w-full font-normal">{item.description}</p>
            <Link href={'/projetos'}
              className='group flex flex-row items-center'>
              <h3 className="text-Titulo font-prompt text-lg font-normal group-hover:text-gray-400 hover:opacity-95">Veja todos os projetos</h3>
              <ArrowRight className='text-violet-300 group-hover:text-gray-400 group-hover:opacity-95' />
            </Link>
          </div>
        </div>
      ))}
      <>
        {/* <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={0}
              rotateZ={0}
              className="w-full mt-4"
            >
              <Image
                src={portfolioImage}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer> */}
      </>
    </section>
  )
}

