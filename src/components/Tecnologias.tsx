import { iconsData } from '@/data/iconsData'
import Image from 'next/image'
import bgImageSecundaria from '../../public/bgImageSecundaria.jpg'

export default function Tecnologias() {
  return (
    <section
      id="Tecnologias"
      className="animate__fadeIn animate__animated relative min-h-full w-full overflow-hidden pb-20"
    >
      <div className="flex h-[750px] min-h-screen w-full flex-col items-center justify-between">
        <Image
          src={bgImageSecundaria}
          className="fixed -z-40 h-[750px] bg-fixed overflow-hidden min-h-screen"
          alt="background"
          quality={100}
          style={{
            objectFit: 'cover',
          }}
        />

        <div className="bg-BgBlur flex h-[750px] min-h-screen w-full flex-col items-center justify-center gap-16">
          <h1 className="font-prompt text-Titulo text-center text-4xl font-medium lg:text-5xl">
            Tecnologias
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="flex flex-col items-center justify-between gap-5 lg:h-full">
              <p className="text-Titulo text-center font-normal text-2xl mb-5">
                Tenho experiencia pratica com estas tecnologias.
              </p>
              <div className="flex flex-wrap items-baseline justify-center gap-5 mb-10 lg:mb-14">
                {iconsData.map((item) => (
                  <div
                    className="flex h-24 w-20 flex-col items-center justify-center gap-2"
                    key={item.name}
                  >
                    <Image
                      src={item.imageLink}
                      alt={item.name}
                      height={60}
                      width={60}
                    />
                    <p className="h-full text-center text-lg">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
