import Image from 'next/image'
import Link from 'next/link'

import { projectData } from '@/data/projetosData'
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
      {projectData.slice(0, 2).map((item, key) => (
        <div
          key={key}
          className={`flex w-full flex-col items-center justify-center lg:flex-row lg:gap-20 
          ${key % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
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
    </section>
  )
}

