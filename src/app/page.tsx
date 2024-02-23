import Contato from "@/components/Contato";
import Tecnologias from "@/components/Tecnologias";
import Home from "@/components/Home";
import ProjetosHome from "@/components/ProjetosHome";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between text-white ">
      <div className="bg-BgBlur w-full p-4 backdrop-blur-xl backdrop-filter flex items-center justify-center flex-col ">
        <Home />
        <ProjetosHome />
        <Tecnologias />
      </div>
      <Contato />
    </main>
  )
}