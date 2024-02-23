import Image from "next/image";
import Link from "next/link";

import imgPerfil from '@/assets/imgPerfil.jpg';


export default function Home() {
  return (
    <section className="min-h-screen mb-20 flex flex-col-reverse items-center justify-center lg:justify-between lg:min-h-screen lg:max-w-[1120px] lg:flex-row lg:w-full">

      <div className="flex h-96 w-full flex-col items-start justify-center gap-10 lg:h-96 lg:w-[675px]">
        <h1 className="font-prompt text-Titulo w-full text-center text-4xl font-medium lg:text-start lg:text-5xl mb-4">
          Filipe Ferreira
          <br />
          Desenvolvedor Frontend
        </h1>
        <p className="text-Texto font-normal lg:w-[575px] lg:text-xl">
          Olá, meu nome é Filipe Ferreira e sou um apaixonado desenvolvedor
          Front-End. Estou sempre em busca de aprimorar minhas habilidades e
          aprender novas tecnologias para criar experiências digitais
          incríveis.
        </p>
        <h4 className='w-full'>
          <span className="font-prompt text-lg font-semibold">
            <Link href={'/projetos'} className='mr-2'>
              VER PROJETOS
            </Link>
          </span>
          ou entre em
          <span className="font-prompt text-lg font-semibold">
            <Link href={'/contato'} className='ml-2'>
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
    </section>
  )
}
