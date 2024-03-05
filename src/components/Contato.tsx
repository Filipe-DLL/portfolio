import Image from 'next/image'
import Link from 'next/link'

import Seta from '@/assets/Seta.png'
import SetaBaixo from '@/assets/SetaBaixo.png'
import { redes } from '@/data/redesData'

export default function Contato() {
  return (
    <section
      id="Contatos"
      className="min-h-screen flex items-center justify-center my-20"
    >
      <div className="bg-BgBlur h-full flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-gray-500 p-5 xl:p-16 lg:min-h-[600px] lg:w-full lg:max-w-[1120px]">
        <h1 className="font-prompt text-Titulo mb-10 text-center text-4xl font-medium lg:text-5xl">
          Contatos
        </h1>

        <div className="flex flex-col flex-wrap items-start justify-around lg:h-full lg:flex-row lg:gap-3">
          {
            redes.map((item, key) => (
              <div className="flex flex-row items-center justify-around w-full lg:w-auto lg:flex-col lg:gap-10"
                key={key}>
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
                    <h1 className="font-prompt absolute flex-col lg:flex-row bottom-1/2 top-1/2 z-10 flex items-center justify-center text-center text-sm font-medium lg:text-2xl">
                      {item.nome}
                      <Image src={item.imagem} alt='' width={30} height={30} className='mt-2 lg:ml-2 lg:mt-0' />
                    </h1>
                  </Link>
                </div>
                <p className="w-8/12 max-w-[480px] lg:w-80">
                  {item.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}