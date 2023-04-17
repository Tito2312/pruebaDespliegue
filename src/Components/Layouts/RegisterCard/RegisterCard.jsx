import React, { useState } from 'react'
import InputName from '../../UI/InputName/InputName'
import { Anclas } from '../../UI/Anclas/Anclas'
import { Auth } from "../../../api"
import { useNavigate } from 'react-router-dom';
import ButtonForm from '../../UI/ButtonForm/ButtonForm'
import TitleRegister from '../../UI/TitleRegister/TitleRegister'

const authController = new Auth()

const RegisterCard = () => {
  const navigate = useNavigate()
  const [ name, newName ] = useState("")
  const [ lastName, newLastName ] = useState("")
  const [ email, newEmail ] = useState("")
  const [ password, newPassword ] = useState("")
  const [ error, newError ] = useState("")

  let user = {
    firstname: name,
    lastname: lastName,
    email: email,
    password: password,
  }

async function sendForm(){
  console.log(user);
    try {
      newError("")
      await authController.register(user)
      navigate("/auth/login")
    } catch (error) {
      newError("Error del servidor")
    }
  }
  return (
    <div className='containerPrincipal'>
        <div id='InputsRegister'>
          <TitleRegister content="Registro" />
          <InputName value={name} type="text" content="Nombre"
            onChange={(e)=>{newName(e.target.value)}}
          />
          <InputName value={lastName} type="text" content="Apellido"
            onChange={(e)=>{newLastName(e.target.value)}}
          />
          <InputName value={email} type="email" content="E-mail"
            onChange={(e)=>{newEmail(e.target.value)}}
          />
          <InputName value={password} type="password" content="Contraseña"
            onChange={(e)=>{newPassword(e.target.value)}}
          />
          <ButtonForm onClick={sendForm} styleButton="BtnRegistere" content="Registrarse" />
          <p>{error}</p>
        </div>
        <div className='anclasRegister'>
          <Anclas
            estilos="Ancla" 
            enlace="/auth/login"
            textoAncla="¿Ya tienes cuentas?"
          />
        </div>
    </div>
  )
}

export default RegisterCard