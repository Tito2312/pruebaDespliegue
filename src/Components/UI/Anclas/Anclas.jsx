import React from 'react'
import { Link } from "react-router-dom"

export const Anclas = ({estilos,enlace,textoAncla}) => {
  return (
    <Link to={enlace} className={estilos}>{textoAncla}</Link>
  )
}
