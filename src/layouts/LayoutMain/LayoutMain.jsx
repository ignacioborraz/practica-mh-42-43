import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import './layoutMain.css'

export default function LayoutMain(props) {
  return (
    <div class="app-container">
        <NavBar />
        {props.children}
        <Footer />
    </div>
  )
}
