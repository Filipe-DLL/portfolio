import Image from "next/image";
import Link from "next/link";

import { projectData } from "@/data/projetos";


export default function ProjetosHome() {
  return (
    <section id="Projetos" className="min-h-screen mb-20 flex w-full flex-col items-center justify-center pt-10 lg:max-w-[1120px] lg:w-full lg:flex-col">
      <h1 className="font-prompt text-Titulo text-center text-4xl font-medium lg:text-5xl mb-4">
        Projetos
      </h1>
      {
        projectData.slice(0, 2).map((item, index) => (
          <div key={index}
            className={`flex w-full flex-col items-center justify-center lg:gap-20 lg:flex-row ${(index % 2 === 0) ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

            <Link href={'/projetos/portfolio'} className='mt-5'>
              <Image src={item.imagem} alt={item.imagemAlt}
                className="w-[400px] h-[300px] object-cover my-5 rounded-3xl lg:min-w-[400px]" />
            </Link>
            <div className="flex w-full max-w-[640px] flex-col gap-4">
              <h1 className="font-prompt text-Titulo w-full text-start text-2xl font-medium">
                {item.titulo}
              </h1>
              <p className="w-full font-normal">
                {item.description}
              </p>
              <Link href={'/projetos'}>
                <h3 className='font-normal text-lg'>Veja mais</h3>
              </Link>
            </div>
          </div>
        ))
      }
    </section>
  )
}
