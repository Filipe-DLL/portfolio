import Image from "next/image";

import foto from '@/assets/foto.jpg';


export default function Tecnologias() {
  return (
    <section id="Tecnologias" className="min-h-screen mb-20 flex w-full flex-col items-center justify-center lg:flex-col lg:max-w-[1120px] lg">
      <h1 className="font-prompt text-Titulo text-center text-4xl font-medium lg:text-5xl mb-4">
        Habilidades, Tecnologias e Experiência
      </h1>

      <div className='flex flex-col lg:flex-row lg:gap-5'>
        <div className="flex flex-col items-center justify-center gap-5 lg:h-full">
          {/* imagem */}
          <Image src={foto} alt="" className="mt-5 w-4/5 lg:w-full rounded-3xl" />
          {/* Texto */}
          <h2 className="font-prompt text-Titulo w-full text-start text-2xl font-medium lg:h-16">
            Stack de Desenvolvimento Frontend
          </h2>
          <p className="font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
            nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
            accusantium magnam voluptate quis iure.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 lg:h-full">
          {/* imagem */}
          <Image src={foto} alt="" className="mt-5 w-4/5 lg:w-full rounded-3xl" />
          {/* Texto */}
          <h2 className="font-prompt text-Titulo w-full text-start text-2xl font-medium lg:h-16">
            Design de Interface do Usuário
          </h2>
          <p className="font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
            nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
            accusantium magnam voluptate quis iure.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 lg:h-full">
          {/* imagem */}
          <Image src={foto} alt="" className="mt-5 w-4/5 lg:w-full rounded-3xl" />
          {/* Texto */}
          <h2 className="font-prompt text-Titulo w-full text-start text-2xl font-medium lg:h-16">
            Experiência Profissional
          </h2>
          <p className="font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reiciendis earum deleniti praesentium? Labore beatae, numquam eius
            nihil, enim perspiciatis, ullam minima expedita eaque cum dolorum
            accusantium magnam voluptate quis iure.
          </p>
        </div>
      </div>

    </section>
  )
}
