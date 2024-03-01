import Image from "next/image";
import Link from "next/link";

import imgPerfil from '@/assets/imgPerfil.jpg';
import { ChevronsDown } from "lucide-react";


export default function Home() {
  return (
    <section className="relative min-h-screen mb-20 flex flex-col-reverse items-center justify-center lg:justify-between lg:min-h-screen lg:max-w-[1120px] lg:flex-row lg:w-full">

      <div className="flex h-96 w-full flex-col items-start justify-center gap-10 lg:h-96 lg:w-[675px]">
        <h1 className="font-prompt text-Titulo w-full text-center text-4xl font-medium lg:text-start lg:text-5xl mb-4">
          Filipe Ferreira
          <br />
          Desenvolvedor Frontend
        </h1>
        <p className="text-Texto font-normal lg:w-[575px] lg:text-xl">
          Olá, meu nome é Filipe Ferreira e estou buscando me tornar um desenvolvedor Front-End. Estou sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias.
        </p>
        <h4 className='w-full text-lg'>
          Ver {' '}
          <span className="text-violet-200 font-prompt text-lg font-semibold hover:text-gray-400 hover:opacity-95">
            <Link href={'/projetos'} scroll={true} className='mr-2'>
              PROJETOS
            </Link>
          </span>
          ou entre em
          <span className="text-violet-200 font-prompt text-lg font-semibold hover:text-gray-400 hover:opacity-95">
            <Link href={'/#Contatos'} className='ml-2'>
              CONTATO
            </Link>
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

      <ChevronsDown size={55} className="hidden absolute animate-bounce bottom-6 m-auto w-full sm:flex" />

    </section>
  )
}
