import { X } from 'lucide-react'
import Link from 'next/link'

interface MenuProps {
  isVisible: boolean
  onClose: () => void
}

export default function Menu({ isVisible, onClose }: MenuProps) {
  return (
    <div
      onClick={onClose}
      className={`${isVisible ? 'flex' : 'hidden'}
      fixed inset-0 h-screen w-full bg-black bg-opacity-50 backdrop-blur-sm md:hidden`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="h-96 w-full bg-black px-5 py-5 shadow-md"
      >
        <div className="mb-5 flex justify-end">
          <button onClick={onClose}>
            <X size={40} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-10 text-xl">
          <Link
            href={'/'}
            onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95"
          >
            Inicio
          </Link>
          <Link
            href={'/#Projetos'}
            onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95"
          >
            Projetos
          </Link>
          <Link
            href={'/#Tecnologias'}
            onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95"
          >
            Tecnologias
          </Link>
          <Link
            href={'/#Contatos'}
            onClick={onClose}
            className="cursor-pointer hover:text-gray-400 hover:opacity-95"
          >
            Contatos
          </Link>
        </nav>
      </div>
    </div>
  )
}
