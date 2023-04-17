import React from 'react'
import { Anclas } from '../Anclas/Anclas'
import { Button, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks';

export const NavHeader = () => {
    const { user } = useAuth()
    const { logout } = useAuth()
    const navigate = useNavigate()

    const onLogout = () =>{
        if(!user){
            alert("No hay usuario iniciado")
        }else{
        let message = window.confirm("Quieres cerrar sesion?")

        if(message){
            logout()
            navigate("/auth/login")
        }
        }
    }
return (
    <div id='NavHeader'>
        <div id="containers">
        {!user ? (
                    <>
                    <div id='logos'>
                        <Anclas
                            estilos="Ancla"
                            textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                                person_add
                            </span>}
                            enlace="/auth/register"
                        />
                        <Anclas
                            estilos="Ancla" 
                            enlace="/auth/register"
                            textoAncla="Registro"
                        />
                    </div>
                    <div id='logos'>
                        <Anclas
                            estilos="Ancla"
                            textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                                person
                            </span>}
                            enlace="/auth/login"
                        />
                        <Anclas
                            estilos="Ancla" 
                            enlace="/auth/login"
                            textoAncla="Login"
                        />
                    </div>
                    <div id='logos'>
                        <Anclas
                            estilos="Ancla"
                            textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                            quick_reference_all
                            </span>}
                            enlace="/"
                        />
                        <Anclas
                            estilos="Ancla" 
                            enlace="/"
                            textoAncla="About Us"
                        />
                    </div>
                    </>
                ) : (
                    <>
                        <div id='logos'>
                        {/* Notificaciones */}
                        <Anclas
                            estilos="Ancla"
                            textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                                notifications
                            </span>}
                            enlace="/notificaciones"
                        />

                        <Anclas
                            estilos="Ancla"
                            textoAncla="Notificaciones"
                            enlace="/notificaciones"
                        />
                        </div>

                        <div id='logos'>
                        {/* Usuario */}
                        <Anclas
                            estilos="Ancla"
                            textoAncla={<span className="material-symbols-outlined" id='iconHeader'>
                                account_circle
                            </span>}
                            enlace="/profile"
                        />
                        <Anclas
                            estilos="Ancla"
                            enlace="/profile"
                            textoAncla="Perfil"
                        />
                        </div>
                        <div id='logos'>
                            <Button className='btnLogout' icon basic color='red' onClick={onLogout}>
                                <Icon name='power off' />{<span className="material-symbols-outlined" id='iconHeader'>
                                logout
                                </span>}
                                <p>Salir</p>
                            </Button>
                        </div>
                    </>
                )}
        </div> 
    </div>
)
}
