import GithubAPIImage from '@/assets/projetos/GithubAPI.png';
import PokedexImage from '@/assets/projetos/Pokedex.png';
import PortfolioImage from '@/assets/projetos/Portfolio.png';
import Esquare from '@/assets/projetos/Esquare.png';


import { StaticImageData } from "next/image";

export interface projectDataType {
  titulo: string,
  imagem: StaticImageData,
  imagemAlt: string,
  description: string,
  projetoURL: string,
  repositorioURL: string,
  tecnologias?: {
    name: string,
    imageLink: string,
  }[]
}

export const projectData: projectDataType[] = [
  {
    titulo: 'Portfolio',
    imagem: PortfolioImage,
    imagemAlt: 'projeto do portfolio',
    description: 'Este projeto do meu Portfolio pessoal. Ele foi desenvolvido usando as tecnologias - TypeScript, React, Next.JS e estilizado com Tailwind.',
    projetoURL: 'Você já esta aqui!',
    repositorioURL: 'https://github.com/Filipe-DLL/portfolio',
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
    imagem: PokedexImage,
    imagemAlt: 'projeto da Pokedex',
    description: 'Este projeto é uma Pokédex em que você pode procurar informações sobre diferentes Pokémons. Ele foi desenvolvido usando as tecnologias - React, Axios, Styled-Components, React-Icons e Context API.',
    projetoURL: 'https://pokedex-filipe-dll.vercel.app/',
    repositorioURL: 'https://github.com/Filipe-DLL/pokedex',
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
    titulo: 'GithubAPI',
    imagem: GithubAPIImage,
    imagemAlt: 'projeto com github api.',
    description: 'Este é um projeto que utiliza a API do GitHub para buscar informações dos usuários, tais como foto do usuário, nome, bio, seguidores e seguindo. Além disso, exibe também os repositórios e um histórico de eventos do usuário. Ele foi desenvolvido usando as tecnologias JavaScript, Fetch API, CSS, HTML.',
    projetoURL: 'https://filipe-dll.github.io/project-fetch-github-api/',
    repositorioURL: 'https://github.com/Filipe-DLL/project-fetch-github-api',
    tecnologias: [
      {
        name: 'JavaScript',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
      },
      {
        name: 'CSS',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
      },
      {
        name: 'HTML',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
      },
    ]
  },
  {
    titulo: 'ESQUARE',
    imagem: Esquare,
    imagemAlt: 'Freelance para empresa ESQUARE Engenharia',
    description: 'Este é um repositório de um freelance feito para ESQUARE Engenharia, uma empresa do setor de engenharia e construção. O site foi desenvolvido com foco na usabilidade, desempenho e design moderno, onde foi utilizado tecnologias como TypeScript, React, Next.JS e Tailwindcss.',
    projetoURL: 'https://esquare.vercel.app/',
    repositorioURL: 'https://github.com/Filipe-DLL/esquare',
    tecnologias: [
      {
        name: 'JavaScript',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
      },
      {
        name: 'CSS',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
      },
      {
        name: 'HTML',
        imageLink: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
      },
    ]
  },
]