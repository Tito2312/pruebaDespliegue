import React, { useState } from 'react'
import { Button } from "semantic-ui-react"
import { Anclas } from '../../UI/Anclas/Anclas'
import { Barras } from '../../Iconos/Barras/Barras'
import { Configuracion } from '../../Iconos/Configuracion/Configuracion'
import { useAuth } from "../../../hooks"
import { BasicModal } from '../../UI/BasicModal/BasicModal'
import { WorkForm } from '../../UI/WorkForm/WorkForm'
import { useNavigate } from 'react-router-dom'

const api = "https://work-services.onrender.com" 

export const MenuLateral = () => {
    const navigate = useNavigate()
    const useAuth2 = useAuth()
    let roleUser = false

    if(useAuth2.user == null){
        console.log("No hay usuario");
    } else {
        const { user: { role } } = useAuth2
        const isAdmin = role === "admin"
        roleUser=isAdmin
    }

    const [ showModal, setShowModal ] = useState(false)
    const [ reload, setReload ] = useState(false)
  
    const onOpenCloseModal = () => {
        navigate("/")
        setShowModal((prevState) => !prevState)
    }
    const onReload = () => setReload((prevState) => !prevState)
    
    const { user } = useAuth()
    
  return (
    <>
        <section className='MenuLateralEstatico'>
            <div className='ContainerIconoBarras'>
                <Barras />
            </div>
            <div className='ContainerAnclas'>
                <nav className='MenuAnclas'>
                    {!user ? (
                        <>
                            <Anclas
                                estilos="Ancla" 
                                enlace="/postulaciones" 
                                textoAncla="Postulaciones"
                            />
                            <Anclas
                                estilos="Ancla" 
                                enlace="/chat" 
                                textoAncla="Chat"
                            />
                            <Anclas
                                estilos="Ancla" 
                                enlace="/historialTrabajos" 
                                textoAncla="Historial"
                            />
                            <Anclas
                                estilos="Ancla" 
                                enlace="/favoritos" 
                                textoAncla="Favoritos"
                            />
                        </>
                    ) : (
                        <>
                            {!roleUser ? (
                                <>
                                <Anclas
                                estilos="Ancla" 
                                enlace="/postulaciones" 
                                textoAncla="Postulaciones"
                                />
                                <Anclas
                                    estilos="Ancla" 
                                    enlace="/chat" 
                                    textoAncla="Chat"
                                />
                                <Anclas
                                    estilos="Ancla" 
                                    enlace="/historialTrabajos" 
                                    textoAncla="Historial"
                                />
                                <Anclas
                                    estilos="Ancla" 
                                    enlace="/favoritos" 
                                    textoAncla="Favoritos"
                                />
                                <Button className='newWorkBtn' primary onClick={onOpenCloseModal}>
                                Nuevo Trabajo</Button>
                                </>
                            ) : (
                                <>
                                <Anclas
                                estilos="Ancla" 
                                enlace="/administrarTrabajos" 
                                textoAncla="Trabajos"
                                />
                                <Anclas
                                    estilos="Ancla" 
                                    enlace="/administrarUsuarios" 
                                    textoAncla="Usuarios"
                                />
                                <Anclas
                                    estilos="Ancla" 
                                    enlace="/reportes" 
                                    textoAncla="Reportes"
                                />
                                </>
                            )}
                        </>
                    )}
                </nav>
            </div>
            <div className='ContainerIconoConfiguracion'>
                <Configuracion />
            </div>
        </section>
        <BasicModal show={showModal} close={onOpenCloseModal} title="Crear nuevo trabajo">
            <WorkForm close={onOpenCloseModal} onReload={onReload} />
        </BasicModal>
    </>
  )
}
