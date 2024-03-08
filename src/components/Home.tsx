import Image from 'next/image'

import imgPerfil from '@/assets/imgPerfil.jpg'
import { ChevronsDown } from 'lucide-react'
import ClientScroll from './ClientScroll'

export default function Home() {
  return (
    <section className="animate__fadeIn animate__animated relative flex  min-h-screen flex-col-reverse items-center justify-center px-3 lg:min-h-screen lg:w-full lg:max-w-[1120px] lg:flex-row lg:justify-between">
      <div className="flex h-96 w-full flex-col items-start justify-center gap-10 lg:h-96 lg:w-[675px]">
        <h1 className="font-prompt text-Titulo mb-4 w-full text-center text-4xl font-medium lg:text-start lg:text-5xl">
          Filipe Ferreira
          <br />
          Desenvolvedor Frontend
        </h1>
        <p className="text-Texto font-normal lg:w-[575px] lg:text-xl">
          Olá, meu nome é Filipe Ferreira e estou buscando me tornar um
          desenvolvedor Front-End. Estou sempre em busca de aprimorar minhas
          habilidades e aprender novas tecnologias.
        </p>
        <h4 className="w-full text-lg">
          Ver{' '}
          <span className="font-prompt text-lg font-semibold text-violet-200 hover:text-gray-400 hover:opacity-95">
            <ClientScroll destino="Projetos" texto="PROJETOS" />
          </span>
          ou entre em{' '}
          <span className="font-prompt text-lg font-semibold text-violet-200 hover:text-gray-400 hover:opacity-95">
            <ClientScroll destino="Contatos" texto="CONTATO" />
          </span>
        </h4>
      </div>

      <div>
        <Image
          src={imgPerfil}
          alt=""
          className="h-48 w-48 rounded-full lg:h-80 lg:w-80"
        />
      </div>

      <ChevronsDown
        size={55}
        className="absolute bottom-6 m-auto hidden w-full animate-bounce sm:flex"
      />
    </section>
  )
}
