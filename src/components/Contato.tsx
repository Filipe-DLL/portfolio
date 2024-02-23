import Image from "next/image";
import Link from "next/link";

import Seta from '@/assets/Seta.png';
import SetaBaixo from '@/assets/SetaBaixo.png';

export default function Contato() {
  return (
    <section id="Contatos" className="min-h-screen flex items-center justify-center">
      <div className="h-full w-full bg-BgBlur border border-gray-500 rounded-xl p-5 xl:p-16 flex items-center justify-center flex-col gap-4 lg:max-w-[1120px] lg:w-full lg:min-h-[600px]">
        <h1 className="font-prompt text-Titulo text-center text-4xl font-medium lg:text-5xl mb-4">
          Contatos
        </h1>

        <div className="flex flex-col items-center justify-around lg:flex-row lg:h-80 lg:gap-3">
          <div className="flex flex-row items-center justify-around lg:flex-col lg:gap-10">
            <div className="relative flex h-52 w-16 items-center justify-center lg:w-full lg:h-full">
              <Link href={'https://www.linkedin.com/in/filipe-dll'} className='flex items-center justify-center'>
                <Image
                  src={SetaBaixo}
                  alt="Seta pra Baixo"
                  className="min-w-16 h-52 lg:hidden"
                />
                <Image
                  src={Seta}
                  alt="Seta pra direita"
                  className="hidden w-80 h-20 lg:flex"
                />
                <h1 className="absolute bottom-1/2 top-1/2 z-10 flex items-center justify-center text-center text-base font-extrabold lg:text-2xl">
                  Linked
                  <br className='lg:hidden' />
                  In
                </h1>
              </Link>
            </div>
            <p className="w-8/12 max-w-[480px] lg:w-80">
              Conecte-se comigo no LinkedIn para manter-se atualizado sobre meu
              trabalho e projetos pessoais.
            </p>
          </div>
          <div className="flex flex-row items-center justify-around lg:flex-col lg:gap-10">
            <div className="relative flex h-52 w-16 items-center justify-center lg:w-full lg:h-full">
              <Link href={'https://github.com/Filipe-DLL'} className='flex items-center justify-center'>
                <Image
                  src={SetaBaixo}
                  alt="Seta pra Baixo"
                  className="min-w-16 h-52 lg:hidden"
                />
                <Image
                  src={Seta}
                  alt="Seta pra direira"
                  className="hidden w-80 h-20 lg:flex"
                />
                <h1 className="absolute bottom-1/2 top-1/2 z-10 flex items-center justify-center text-center text-base font-extrabold lg:text-2xl">
                  GitHub
                </h1>
              </Link>
            </div>
            <p className="w-8/12 max-w-[480px] lg:w-80">
              Explore meu GitHub para ver o código dos meus projetos e
              contribuições para projetos de código aberto.
            </p>
          </div>
          <div className="flex flex-row items-center justify-around lg:flex-col lg:gap-10">
            <div className="relative flex h-52 w-16 items-center justify-center lg:w-full lg:h-full">
              <Image
                src={SetaBaixo}
                alt="Seta pra Baixo"
                className="min-w-16 h-52 lg:hidden"
              />
              <Image
                src={Seta}
                alt="Seta pra direita"
                className="hidden w-80 h-20 lg:flex"
              />
              <h1 className="absolute bottom-1/2 top-1/2 z-10 flex items-center justify-center text-center text-base font-extrabold lg:text-2xl">
                Email
              </h1>
            </div>
            <p className="w-8/12 max-w-[480px] lg:w-80">
              Entre em contato comigo por email para discussões profissionais ou
              oportunidades de colaboração.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
