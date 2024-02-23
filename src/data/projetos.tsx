import pokedex from '@/assets/Pokedex.png';
import portfolio from '@/assets/Portfolio.png';

import { StaticImageData } from "next/image";

export interface projectDataTypes {
  titulo: string,
  imagem: StaticImageData,
  imagemAlt: string,
  description: string,
}

export const projectData: projectDataTypes[] = [
  {
    titulo: 'Portfolio',
    imagem: portfolio,
    imagemAlt: 'portfolio',
    description: 'Este projeto do meu Portfolio pessoal. Ele foi desenvolvido usando as tecnologias - TypeScript, React, Next.JS e estilizado com Tailwind.',
  },
  {
    titulo: 'Pokedex',
    imagem: pokedex,
    imagemAlt: 'Pokedex',
    description: 'Este projeto é uma Pokédex em que você pode procurar informações sobre diferentes Pokémons. Ele foi desenvolvido usando as tecnologias - React, Axios, Styled-Components, React-Icons e Context API.',
  },
  {
    titulo: 'titulo',
    imagem: portfolio,
    imagemAlt: 'alt',
    description: 'description',
  },
  {
    titulo: 'titulo',
    imagem: pokedex,
    imagemAlt: 'alt',
    description: 'description',
  }, {
    titulo: 'titulo',
    imagem: portfolio,
    imagemAlt: 'alt',
    description: 'description',
  },
  {
    titulo: 'titulo',
    imagem: pokedex,
    imagemAlt: 'alt',
    description: 'description',
  },
]