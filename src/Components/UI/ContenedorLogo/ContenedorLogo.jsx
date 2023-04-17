import React from 'react'
import { Logo } from '../Logo/Logo'
import { Anclas } from '../Anclas/Anclas'

export const ContenedorLogo = () => {
  return (
      <Anclas
      estilos="ContenedorLogo"
      textoAncla={<Logo />}
      root="/"
      enlace="/"
    />
  )
}
