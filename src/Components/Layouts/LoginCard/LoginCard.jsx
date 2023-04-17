import React, { useState } from 'react'
import TitleRegister from '../../UI/TitleRegister/TitleRegister'
import InputName from '../../UI/InputName/InputName'
import ButtonForm from '../../UI/ButtonForm/ButtonForm'
import { Anclas } from '../../UI/Anclas/Anclas'
import ImageBottomless from '../../UI/ImageBottomless/ImageBottomless'
import TitleWorkServices from '../../UI/TitleWorkServices/TitleWorkServices'
import { Auth } from "../../../api"
import { useAuth } from "../../../hooks"
import { useNavigate } from 'react-router-dom'

const authController = new Auth()

const LoginCard = () => {
  const navigate = useNavigate()
  const [ email, newEmail ] = useState("")
  const [ password, newPassword ] = useState("")

  const { login } = useAuth()
  const [error, newError] = useState("")

  let user = {
    email: email,
    password: password,
  }

  async function sendForm(){
    try {
      newError("")
      const response = await authController.login(user)
      
      authController.setAccessToken(response.access)
      authController.setRefreshToken(response.refresh)

      login(response.access)

      navigate("/")
      window.location.reload(false);
    } catch (error) {
      newError("Error del servidor")
    }
  }

  return (
    <div className='containerLogin'>
      <div className='LoginCard'>
      <div className="logoCompany">
          <ImageBottomless />
          <TitleWorkServices />
        </div>
        <div className='formLogin'>
          <TitleRegister content="Login"/>
          <InputName value={email} style2="inputLogin" type="email" content="E-mail"
            onChange={(e)=>{newEmail(e.target.value)}}
          />
          <InputName value={password} style2="inputLogin" type="password" content="Contraseña"
            onChange={(e)=>{newPassword(e.target.value)}}
          />
          <ButtonForm onClick={sendForm} styleButton="btnLogin" content="Ingresar" />
          <p>{error}</p>
          <div className='informationLogin'>
            <Anclas
              estilos="Ancla" 
              textoAncla="Crear cuenta"
              enlace="/auth/register"
             />
            <Anclas
              estilos="Ancla" 
              textoAncla="Recuperar contraseña"
              enlace="/"
             />
          </div>
        </div>
      </div>
      <div className='containImgLogin'>
        <img className='imgLogin' src="" alt="" />
      </div>
    </div>
  )
}

export default LoginCard;