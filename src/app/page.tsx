import Contato from '@/components/Contato'
import Home from '@/components/Home'
import ProjetosHome from '@/components/ProjetosHome'
import Tecnologias from '@/components/Tecnologias'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between text-white ">
      <div className="bg-BgBlur backdrop-blur-md w-full flex items-center justify-center flex-col z-10">
        <Home />
        <Tecnologias />
        <ProjetosHome />
      </div>
      <Contato />
    </main>
  )
}
