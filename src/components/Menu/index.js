import React from 'react'
import logo from '../../assets/logo.png'
import Button from '../Button'

import './styles.css'

export default function Menu(){
  return(
    <nav className = "Menu">
      <a href = "/">
        <img className = "Logo" src = {logo} alt = "Logo"/>
      </a>

      <Button as ="a" className = "ButtonLink" href = "/home">
         Novo vídeo
      </Button>
    </nav>
  )
}