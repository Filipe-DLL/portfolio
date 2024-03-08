import ProjectCard from '@/components/ui/3d-card/ProjectCard'
import { projectData } from '@/data/projetosData'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjetosHome() {
  return (
    <section
      id="Projetos"
      className="animate__fadeIn animate__animated flex w-full flex-col items-center justify-center px-3 pb-24 pt-10 lg:w-full lg:max-w-[1120px] lg:flex-col"
    >
      <h1 className="font-prompt text-Titulo mb-4 text-center text-4xl font-medium lg:text-5xl">
        Projetos
      </h1>

      <div className="flex w-full flex-col items-center justify-around lg:flex-row">
        {projectData.slice(0, 2).map((item, key) => (
          <div
            key={key}
            className="flex w-full flex-col items-center justify-center lg:gap-20"
          >
            <ProjectCard props={item} />
          </div>
        ))}
      </div>

      <Link href={'/projetos'} className="group flex flex-row items-center">
        <h3 className="text-Titulo font-prompt text-lg font-normal hover:opacity-95 group-hover:text-gray-400">
          Veja todos os projetos
        </h3>
        <ArrowRight className="text-violet-300 group-hover:text-gray-400 group-hover:opacity-95" />
      </Link>
    </section>
  )
}
