import Image from 'next/image'
import Link from 'next/link'

import Seta from '@/assets/Seta.png'
import SetaBaixo from '@/assets/SetaBaixo.png'
import { redes } from '@/data/redesData'

export default function Contato() {
  return (
    <section
      id="Contatos"
      className="my-20 flex min-h-[750px] items-center justify-center px-3"
    >
      <div className="animate__fadeIn animate__animated bg-BgBlur flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border border-gray-500 p-5 backdrop-blur-lg xl:p-16 lg:min-h-[600px] lg:w-full">
        <h1 className="font-prompt text-Titulo mb-10 text-center text-4xl font-medium lg:text-5xl">
          Contatos
        </h1>

        <div className="flex flex-col flex-wrap items-start justify-center lg:h-full lg:flex-row lg:gap-3 ">
          {redes.map((item, key) => (
            <div
              className="flex w-full flex-row items-center justify-around lg:flex-col lg:gap-10 lg:w-1/3 2xl:w-auto"
              key={key}
            >
              <div className="relative flex h-52 w-16 items-center justify-center lg:h-full lg:w-full">
                <Link
                  href={item.url}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={SetaBaixo}
                    alt="Seta pra Baixo"
                    className="min-w-16 h-52 lg:hidden"
                  />
                  <Image
                    src={Seta}
                    alt="Seta pra direita"
                    className="hidden h-20 w-80 lg:flex"
                  />
                  <h1 className="font-prompt absolute bottom-1/2 top-1/2 z-10 flex flex-col items-center justify-center text-center text-sm font-medium lg:flex-row lg:text-2xl">
                    {item.nome}
                    <Image
                      src={item.imagem}
                      alt=""
                      width={30}
                      height={30}
                      className="mt-2 lg:ml-2 lg:mt-0"
                    />
                  </h1>
                </Link>
              </div>
              <p className="w-8/12 max-w-[480px] lg:w-80 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
