import { iconsData } from '@/data/iconsData'
import Image from 'next/image'
import bgImageSecundaria from '../../public/bgImageSecundaria.jpg'

export default function Tecnologias() {
  return (
    <section
      id="Tecnologias"
      className="animate__fadeIn animate__animated relative h-full w-full overflow-hidden py-20"
    >
      <div className="flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Image
          src={bgImageSecundaria}
          className="fixed -z-40 h-[500px] bg-fixed"
          alt="background"
          quality={100}
          style={{
            objectFit: 'cover',
          }}
        />

        <div className="bg-BgBlur flex h-[500px]  w-full flex-col items-center justify-center">
          <h1 className="font-prompt text-Titulo mb-10 text-center text-4xl font-medium lg:text-5xl">
            Tecnologias
          </h1>

          <div className="flex flex-col lg:flex-row lg:gap-5">
            <div className="flex flex-col items-center justify-center gap-5 lg:h-full">
              <p className="text-Titulo font-normal">
                Tenho experiencia pratica com estas tecnologias.
              </p>
              <div className="flex flex-wrap items-baseline justify-center gap-5">
                {iconsData.map((item) => (
                  <div
                    className="flex h-20 w-16 flex-col items-center justify-center gap-2"
                    key={item.name}
                  >
                    <Image
                      src={item.imageLink}
                      alt={item.name}
                      height={40}
                      width={40}
                    />
                    <p className="h-full text-center">{item.name}</p>
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
