'use client'

import { AlignJustify } from 'lucide-react';
import { useCallback, useState } from 'react';
import Menu from './Menu';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, [])
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, [])
  
  return (
    <>
      <button className='px-1 md:hidden' onClick={openMenu}>
        <AlignJustify />
      </button>
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </>
  )
}
