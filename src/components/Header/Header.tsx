import Link from "next/link";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  return (
    <header className='  bg-BgBlur backdrop-blur-3xl w-full text-sm flex py-7 px-5 justify-end items-center fixed top-0 z-20'>
      <nav className="hidden md:flex mr-20 gap-8">
        <Link href={'/'}
          className="cursor-pointer hover:text-gray-400 hover:opacity-95">
          Inicio
        </Link>
        <Link href={'/#Projetos'}
          className="cursor-pointer hover:text-gray-400 hover:opacity-95">
          Projetos
        </Link>
        <Link href={'/#Tecnologias'}
          className="cursor-pointer hover:text-gray-400 hover:opacity-95">
          Tecnologias
        </Link>
        <Link href={'/#Contatos'}
          className="cursor-pointer hover:text-gray-400 hover:opacity-95">
          Contatos
        </Link>
      </nav>
      <HeaderMobile />
    </header>
  )
}
