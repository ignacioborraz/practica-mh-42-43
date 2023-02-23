import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './layoutHero.css'

export default function LayoutHero(props) {
  return (
    <div class="app-container-hero">
        <NavBar />
        {props.children}
    </div>
  )
}
