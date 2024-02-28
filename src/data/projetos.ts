import portfolio from '@/assets/Portfolio.png';
import pokedex from '@/assets/Pokedex.png';

import { StaticImageData } from "next/image";

export interface projectDataType {
  titulo: string,
  imagem: StaticImageData,
  imagemAlt: string,
  description: string,
  tecnologias?: {
    name: string,
    imageLink: string,
  }[]
}

export const projectData: projectDataType[] = [
  {
    titulo: 'Portfolio',
    imagem: portfolio,
    imagemAlt: 'portfolio',
    description: 'Este projeto do meu Portfolio pessoal. Ele foi desenvolvido usando as tecnologias - TypeScript, React, Next.JS e estilizado com Tailwind.',
    tecnologias: [
      {
        name: 'Next',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'Typescript',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg'
      },
      {
        name: 'React',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
      },
      {
        name: 'Tailwindcss',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
      },
    ]
  },
  {
    titulo: 'Pokedex',
    imagem: pokedex,
    imagemAlt: 'Pokedex',
    description: 'Este projeto é uma Pokédex em que você pode procurar informações sobre diferentes Pokémons. Ele foi desenvolvido usando as tecnologias - React, Axios, Styled-Components, React-Icons e Context API.',
    tecnologias:[
      {
        name: 'React',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
      },
      {
        name: 'JavaScript',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
      },
      {
        name: 'styled-components',
        imageLink: 'https://i.imgur.com/ismE0ks.png'
      },
    ]
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