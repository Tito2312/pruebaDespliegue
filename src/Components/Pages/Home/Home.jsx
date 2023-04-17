import React from 'react'
import { HeaderHome } from '../../Layouts/HeaderHome/HeaderHome'
import { Principal } from '../../Layouts/Principal/Principal'

export const Home = () => {
  return (
    <div className='body'>
        <HeaderHome />
        <Principal />
    </div>
  )
}