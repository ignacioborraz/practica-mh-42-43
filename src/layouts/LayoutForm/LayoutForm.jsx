import Footer from '../../components/Footer/Footer'
import Alert from '../../components/Alert/Alert'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './layoutForm.css'

export default function LayoutForm(props) {
  
  const store = useSelector(store => store)
  console.log(store)
  
  return (
    <div className="app-container-form">
      	<div className='app-main'>
				  	<h3>CREATE CATEGORY</h3>
            <Outlet />
        </div>
        <Footer />
        <Alert />
    </div>
  )

}
