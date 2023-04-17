import React from 'react'
import { Anclas } from '../../UI/Anclas/Anclas'

export const MenuDesplegable = () => {
  return (
    <section className='MenuDesplegable'>
        <div className='ContainerIconoBarras'>
            Mi cuenta
        </div>
        <div className='ContainerAnclas'>
            <nav className='MenuAnclas'>
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="Texto 1"
                />
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="Texto 2"
                />
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="Texto 3"
                />
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="Texto 4"
                />
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="Texto 5"
                />
                <Anclas
                    estilos="Ancla" 
                    enlace="https://www.google.com/" 
                    textoAncla="Texto 6"
                />
            </nav>
        </div>
        <div className='ContainerIconoConfiguracion'>
            Configuracion
        </div>
    </section>
  )
}
