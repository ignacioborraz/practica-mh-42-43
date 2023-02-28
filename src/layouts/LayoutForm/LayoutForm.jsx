import React from 'react'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './layoutForm.css'

export default function LayoutForm(props) {
  return (
    <div className="app-container-form">
      	<div className='app-main'>
				  	<h3>CREATE CATEGORY</h3>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}
