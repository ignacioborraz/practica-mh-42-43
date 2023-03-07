import { useRef } from 'react'
import './formRegister.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import alertActions from '../../store/Alert/actions'
const { open } = alertActions

export default function FormRegister() {

    let name = useRef("")
    let description = useRef("")
    let admin_id = useRef("")
    let dispatch = useDispatch()

    async function handleSubmit(event) {

        event.preventDefault()
        let data = {
            [name.current.name]: name.current.value,
            [description.current.name]: description.current.value,
            [admin_id.current.name]: admin_id.current.value,
        }        
        let url = 'http://localhost:8080/categories'
        try {
            await axios.post(url,data)
            let dataAlert = {
                icon: 'success',
                text: 'SE CREO CORRECTAMENTE'
            }
            dispatch(open(dataAlert))
        } catch(error) {
            //console.log(error)
            let err = error.response.data.message.join('. ')
            let dataAlert = {
                icon: 'error',
                text: err
            }
            dispatch(open(dataAlert))
        }
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <label htmlFor="name">NAME</label>
            <input ref={name} type="text" id="name" name='name' />
            <label htmlFor="description">DESCRIPTION</label>
            <input ref={description} type="text" id="description" name='description' />
            <label htmlFor="admin_id">ADMIN_ID</label>
            <input ref={admin_id} type="text" id='admin_id' name='admin_id' />
            <input type="submit" value="enviar" />
            <input type="button" value="alerta prueba" onClick={()=>dispatch(open({icon: 'success',text:'prueba'}))} />
            <Anchor to={`/notfound/${Math.random()*1000}`}>
                <input type="button" value="redirigir" />
            </Anchor>
        </form>
    )
}