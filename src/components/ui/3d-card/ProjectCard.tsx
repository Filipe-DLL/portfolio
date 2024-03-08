"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card/3d-card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface projectDataType {
  props: {
    titulo: string,
    imagem: StaticImageData,
    imagemAlt: string,
    description: string,
    projetoURL: string,
    repositorioURL: string,
    tecnologias?: {
      name: string,
      imageLink: string,
    }[]
  }
}

export default function ProjectCard({ props }: projectDataType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative flex flex-col justify-between group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-BgBlur border-white/[0.2] w-[400px] sm:w-[30rem] h-[550px] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-Titulo"
        >
          {props.titulo}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm h-24 max-w-sm mt-2text-neutral-300"
        >
          {props.description}

        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={props.imagem}
            alt={props.imagemAlt}
            height="1000"
            width="1000"
            className="h-60 w-full self-center object-cover rounded-xl group-hover/card:shadow-xl"
          />
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className=" flex flex-row items-center justify-center text-sm h-24 max-w-sm mt-2text-neutral-300"
        >
          <div className='flex items-center mt-2'>
            <h2 className='text-Titulo'>Tecnologias utilizadas :</h2>
            <div className='ml-2 flex gap-2'>
              {
                props.tecnologias ? (
                  props.tecnologias.map((tecnologia, key) => (
                    <div key={key}>
                      <Image src={tecnologia.imageLink} alt={tecnologia.name} width={30} height={30} />
                    </div>
                  ))
                ) : null
              }
            </div>
          </div>

        </CardItem>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            <Link href={props.repositorioURL} target='_blank'>
              Repositórios
            </Link>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#643557] text-white text-xs font-bold"
          >
            {
              props.titulo === 'Portfolio' ?
                <h3 className="cursor-auto">{props.projetoURL}</h3> :
                <Link href={props.projetoURL} target='_blank'>
                  Ver Projeto
                </Link>
            }
          </CardItem>
        </div>
      </CardBody>
    </CardContainer >
  );
}