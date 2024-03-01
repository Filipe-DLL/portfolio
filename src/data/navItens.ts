interface navItemsTypes {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}

export const navItemsData: navItemsTypes = {
  navItems: [
    { name: 'Home', link: '/', },
    { name: 'Projetos', link: '/projetos', },
    { name: 'Tecnologias', link: '/#Tecnologias', },
    { name: 'Contatos', link: '/#Contatos', },
  ]
}

