import React from 'react'
import { Lupa } from '../../Iconos/Lupa/Lupa'

export const ContenedorBuscador = () => {
  return (
    <div className='ContenedorBuscador'>
      <input type="text" id='inputBuscador' placeholder='Buscar'/>
      <div id='contenedorLupa'>
        <Lupa />
      </div>
    </div>
  )
}
