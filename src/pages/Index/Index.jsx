import { useEffect,useState,useRef } from 'react'
import axios from 'axios'
import CardEvent from '../../components/CardEvent/CardEvent'
import './index.css'

export default function Index() {
    const [data,setData] = useState([])
    const [reload,setReload] = useState(false)
    const text = useRef("")
    useEffect(
        ()=> { axios.get('https://mh-h0bh.onrender.com/api/espectaculares?name='+text.current.value).then(res=>setData(res.data.response)) },
        [reload]
    )
    console.log(data)
    return (
        <div className='index-main'>
            <input type="text" ref={text} name="text" id="text" placeholder='find events!' onChange={()=>setReload(!reload)}/>
            <div className='index-cards'>
                {data?.map(each => <CardEvent key={each.id} data={each} />)}
            </div>
        </div>
    )
}