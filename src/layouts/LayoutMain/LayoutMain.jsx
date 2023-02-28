import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './layoutMain.css'

export default function LayoutMain(props) {
  return (
    <div className="app-container">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}