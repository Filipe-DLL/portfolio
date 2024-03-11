export interface redesDataType {
  nome: string;
  imagem: string;
  url: string;
  description: string;
}

export const redes: redesDataType[] = [
  {
    nome: 'LinkedIn',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
    url: 'https://www.linkedin.com/in/filipe-dll',
    description: 'Conecte-se comigo no LinkedIn para manter-se atualizado sobre meu trabalho e projetos pessoais.',
  },
  {
    nome: 'GitHub',
    imagem: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    url: 'https://github.com/Filipe-DLL',
    description: '              Explore meu GitHub para ver o código dos meus projetos e contribuições para projetos de código aberto.',
  },

  {
    nome: 'Discord',
    imagem: 'https://i.imgur.com/2hbgVqb.png',
    url: 'https://discord.com/users/403682043373944852',
    description: 'Entre em contato comigo também pelo Discord.',
  },
  {
    nome: 'Email',
    imagem: 'https://i.imgur.com/a04tthN.png',
    url: '',
    description: ' Entre em contato comigo enviando um email para filipeferreira.new@gmail.com para discussões profissionais ou oportunidades de colaboração.',
  },
]