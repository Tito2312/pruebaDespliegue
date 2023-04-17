import React from 'react'
import { ContenedorBuscador } from '../../UI/ContenedorBuscador/ContenedorBuscador'
import { ContenedorLogo } from '../../UI/ContenedorLogo/ContenedorLogo'
import { NavHeader } from '../../UI/NavHeader/NavHeader'

export const HeaderHome = () => {
  return (
    <section className='Header'>
    <div className='containHeader'>
      <div id='contenedorHeader'>
          <ContenedorLogo />
          <ContenedorBuscador />
          <NavHeader />
        </div>
    </div>
    </section>
  )
}
