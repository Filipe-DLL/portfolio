import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/components/ui/3d-card/3d-card'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface projectDataType {
  props: {
    titulo: string
    imagem: StaticImageData
    imagemAlt: string
    description: string
    projetoURL: string
    repositorioURL: string
    tecnologias?: {
      name: string
      imageLink: string
    }[]
  }
}

export default function ProjectCard({ props }: projectDataType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card bg-BgBlur relative flex h-[550px] w-[400px] flex-col justify-between rounded-xl border border-white/[0.2] p-6 hover:shadow-2xl hover:shadow-emerald-500/[0.1] sm:w-[30rem]">
        <CardItem translateZ="50" className="text-Titulo text-xl font-bold">
          {props.titulo}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2text-neutral-300 h-24 max-w-sm text-sm"
        >
          {props.description}
        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={props.imagem}
            alt={props.imagemAlt}
            height="1000"
            width="1000"
            className="h-60 w-full self-center rounded-xl object-cover group-hover/card:shadow-xl"
          />
        </CardItem>
        <CardItem
          as="div"
          translateZ="60"
          className=" mt-2text-neutral-300 flex h-24 max-w-sm flex-row items-center justify-center text-sm"
        >
          <div className="mt-2 flex items-center">
            <h2 className="text-Titulo">Tecnologias utilizadas :</h2>
            <div className="ml-2 flex gap-2">
              {props.tecnologias
                ? props.tecnologias.map((tecnologia, key) => (
                  <div key={key}>
                    <Image
                      src={tecnologia.imageLink}
                      alt={tecnologia.name}
                      width={30}
                      height={30}
                    />
                  </div>
                ))
                : null}
            </div>
          </div>
        </CardItem>
        <div className="mt-4 flex items-center justify-between">
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl px-4 py-2 text-xs font-normal text-white"
          >
            <Link href={props.repositorioURL} target="_blank">
              Repositório
            </Link>
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl bg-[#643557] px-4 py-2 text-xs font-bold text-white"
          >
            {props.titulo === 'Portfolio' ? (
              <h3 className="cursor-auto">{props.projetoURL}</h3>
            ) : (
              <Link href={props.projetoURL} target="_blank">
                Ver Projeto
              </Link>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
