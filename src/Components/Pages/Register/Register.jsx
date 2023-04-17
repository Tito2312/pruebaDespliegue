import React from 'react'
import RegisterCard from '../../Layouts/RegisterCard/RegisterCard'
import ImgSaludo from '../../UI/ImgSaludo/ImgSaludo'
import ImageBottomless from '../../UI/ImageBottomless/ImageBottomless'
import TitleWorkServices from '../../UI/TitleWorkServices/TitleWorkServices'

export const Register = () => {
  return (
    <div className='Home'>
      <div className="image">
        <ImgSaludo />
      </div>
      <div className="contentInfo">
        <div className="logoCompany">
          <ImageBottomless />
          <TitleWorkServices />
        </div>
        <div className="containerRegister">
          <RegisterCard />
        </div>
      </div>
    </div>
  )
}
