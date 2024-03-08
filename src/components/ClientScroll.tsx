'use client'

import { Link } from 'react-scroll'

interface ScrollPropsType {
  texto: string
  destino: string
}

export default function ClientScroll({ texto, destino }: ScrollPropsType) {
  return (
    <Link
      to={`${destino}`}
      smooth={true}
      duration={500}
      className="mr-2 cursor-pointer"
    >
      {texto}
    </Link>
  )
}