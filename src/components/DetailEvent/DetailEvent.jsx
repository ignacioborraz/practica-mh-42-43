import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './detailEvent.css'

export default function DetailEvent() {
    const { id } = useParams()
    const [data,setData] = useState([])
    useEffect(
        ()=> { axios.get('https://mh-h0bh.onrender.com/api/espectaculares/'+id).then(res=>setData(res.data.response)) },
        []
    )
    return (
        <article className='details-main'>
            <h3 className="details-text">{data.name}</h3>
            <img src={data.image} className="details-img" alt={data.name} />
            <p className="details-text">{data.category} - {data.date}</p>
            <p className="details-text">{data.assistance ? 'assistance: '+data.assistance : 'estimate: '+data.estimate}</p>
            <p className="details-text">{data.description}</p>
        </article>
    )
}
