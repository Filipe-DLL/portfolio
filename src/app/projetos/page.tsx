
import PageProjectCard from '@/components/ui/3d-card/PageProjectCard'
import { projectData } from '@/data/projetosData'

export default function Projetos() {
  return (
    <main className="bg-BgBlur flex flex-col items-center justify-between text-white">
      <div className="animate__fadeIn animate__animated flex min-h-screen w-full flex-col items-center justify-center p-4 backdrop-blur-md backdrop-filter">

        <div className='w-full flex flex-col items-center justify-around'>
          {projectData.map((item, key) => (
            <div
              key={key}
              className='w-full flex flex-col items-center justify-center lg:gap-20'>
              <PageProjectCard props={item} />
            </div>
          ))}

        </div>

      </div>
    </main>
  )
}
