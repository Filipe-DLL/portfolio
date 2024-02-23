import { X } from "lucide-react";
import Link from "next/link";

interface MenuProps {
  isVisible: boolean,
  onClose: () => void
}

export default function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div className={`${isVisible ? 'flex' : 'hidden'}
      fixed inset-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-sm md:hidden
    `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black h-96 w-full shadow-md py-5 px-5">
        <div className="flex justify-end mb-5">
          <button onClick={onClose}>
            <X size={40} />
          </button>
        </div>
        <nav className="flex flex-col text-xl items-center gap-10">
          <Link href={'/'} onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95">
            Inicio
          </Link>
          <Link href={'/#Projetos'} onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95">
            Projetos
          </Link>
          <Link href={'/#Tecnologias'} onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95">
            Tecnologias
          </Link>
          <Link href={'/#Contatos'} onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95">
            Contatos
          </Link>
        </nav >
      </div >
    </div>
  )
}