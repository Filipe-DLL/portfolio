import Image from 'next/image'
import Link from 'next/link'

import { projectData } from '@/data/projetos'
import { ArrowRight } from 'lucide-react'

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
              className='flex flex-row items-center textit'>
              <h3 className="text-lg font-normal">Veja todos os projetos</h3>
              <ArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}
