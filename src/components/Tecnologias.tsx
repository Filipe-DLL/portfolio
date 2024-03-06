
import { iconsData } from "@/data/iconsData";
import Image from "next/image";
import bgImageSecundaria from "../../public/bgImageSecundaria.jpg";

export default function Tecnologias() {
  return (
    <section id="Tecnologias" className="animate__fadeIn animate__animated relative bg-BgBlur backdrop-blur-md py-20 h-full w-full overflow-hidden">

      <div className="h-full w-full flex flex-col items-center justify-center ">

        <Image src={bgImageSecundaria} className="fixed bg-fixed -z-40"
          alt="background"
          quality={100}
          sizes="100vh"
          style={{
            objectFit: 'cover',
          }}
        />


        <div className="bg-BgBlur backdrop-blur-md w-full h-full flex flex-col items-center justify-center">
          <h1 className="font-prompt text-Titulo text-center text-4xl font-medium lg:text-5xl mb-10">
            Tecnologias
          </h1>

          <div className='flex flex-col lg:flex-row lg:gap-5'>
            <div className="flex flex-col items-center justify-center gap-5 lg:h-full">
              <p className="font-normal text-Titulo">
                Tenho experiencia pratica com estas tecnologias.
              </p>
              <div className="flex items-baseline justify-center flex-wrap gap-5">
                {
                  iconsData.map((item) => (
                    <div className="flex flex-col items-center justify-center w-16 h-20 gap-2"
                      key={item.name}>
                      <Image src={item.imageLink} alt={item.name} height={40} width={40} />
                      <p className="h-full text-center">{item.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>

      </div>
    </section >
  )
}
