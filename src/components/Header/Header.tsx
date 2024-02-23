'use client'

import Menu from "@/components/Header/Menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, [])
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, [])

  return (
    <header className=' bg-[#00000050] backdrop-blur-sm w-full text-sm flex py-7 px-5 justify-end items-center fixed top-0 z-20'>
      <button className='px-1 md:hidden' onClick={openMenu}>
        <AlignJustify />
      </button>
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
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  )
}
