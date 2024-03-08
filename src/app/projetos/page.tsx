
import PageProjectCard from '@/components/ui/3d-card/PageProjectCard'
import { projectData } from '@/data/projetosData'

export default function Projetos() {
  return (
    <main className="bg-BgBlur flex flex-col items-center justify-between text-white">
      <div className="animate__fadeIn animate__animated flex min-h-screen w-full flex-col items-center justify-center p-4 backdrop-blur-md backdrop-filter">
        {/* {projectData.map((projeto, index) => (
          <div
            key={projeto.titulo}
            className={`mt-20 flex w-full flex-col items-center justify-center lg:flex-row lg:gap-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
          >
            <Image
              src={projeto.imagem}
              alt={projeto.imagemAlt}
              className="my-5 h-[300px] w-[400px] rounded-3xl object-cover lg:min-w-[400px] cla"
            />
            <div className="flex w-full max-w-[640px] flex-col gap-4">
              <h1 className="font-prompt text-Titulo w-full text-start text-2xl font-medium">
                {projeto.titulo}
              </h1>
              <p className="w-full font-normal">{projeto.description}</p>
              <div className='flex items-center'>
                <h2 className='text-Titulo'>Tecnologias utilizadas :</h2>
                <div className='ml-2 flex gap-2'>
                  {
                    projeto.tecnologias ? (
                      projeto.tecnologias.map((tecnologia, key) => (
                        <div key={key}>
                          <Image src={tecnologia.imageLink} alt={tecnologia.name} width={30} height={30} />
                        </div>
                      ))
                    ) : null
                  }
                </div>
              </div>
              <div className='group flex gap-3'>
                <h2 className='text-Titulo'>Repositorio :</h2>
                <Link href={projeto.repositorioURL} target='_blank'>
                  <h3 className='group-hover:text-gray-300 group-hover:opacity-95'>{projeto.repositorioURL}</h3>
                </Link>
              </div>
              <div className='group flex gap-3'>
                <h2 className='text-Titulo'>Visualizar projeto :</h2>
                {
                  projeto.titulo === 'Portfolio' ?
                    <h3>{projeto.projetoURL}</h3> :
                    <Link href={projeto.projetoURL} target='_blank'>
                      <h3 className='group-hover:text-gray-300 group-hover:opacity-95'>{projeto.projetoURL}</h3>
                    </Link>
                }
              </div>
            </div>
          </div>
        ))} */}

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
