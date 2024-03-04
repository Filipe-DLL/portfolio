
import { iconsData } from "@/data/iconsData";
import Image from "next/image";
import svg from "@/assets/inbox_letter_contact_envelope_mail_email_icon_220346.svg";


export default function Tecnologias() {
  return (
    <section id="Tecnologias" className="my-20 flex w-full flex-col items-center justify-center lg:flex-col lg:max-w-[1120px] lg">
      <h1 className="font-prompt text-Titulo text-center text-4xl font-medium lg:text-5xl mb-10">
        Tecnologias
      </h1>

      <div className='flex flex-col lg:flex-row lg:gap-5'>
        <div className="flex flex-col items-center justify-center gap-5 lg:h-full">
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
          <p className="font-normal text-Titulo">
            Tenho experiencia pratica com estas tecnologias acima.
          </p>
        </div>
      </div>
    </section>
  )
}
