import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItemsData } from "@/data/navItens";
import type { Metadata } from 'next';
import { Mukta, Prompt } from 'next/font/google';
import Image from 'next/image';
import bgImage from "../../public/bgimage.jpg";
import './globals.css';
import 'animate.css';
import Footer from "@/components/Footer";

const mukta = Mukta({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-mukta'
})
const prompt = Prompt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-prompt'
})

export const metadata: Metadata = {
  title: 'Filipe-DLL',
  description: 'Portfolio de Desenvolvedor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${mukta.variable} ${prompt.variable} text-Texto font-mukta m-0 box-border min-h-screen`}>
        <Image className='h-screen fixed bg-fixed -z-50'
          alt="background"
          src={bgImage}
          quality={100}
          sizes="100vh"
          style={{
            objectFit: 'cover',
          }}
        />
        <FloatingNav navItems={navItemsData.navItems} />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
