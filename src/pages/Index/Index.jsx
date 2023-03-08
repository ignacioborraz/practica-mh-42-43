import { useEffect,useState,useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import CardEvent from '../../components/CardEvent/CardEvent'
import './index.css'
import textActions from '../../store/Text/actions'

const { capture } = textActions

export default function Index() {
    const [data,setData] = useState([])
    const [reload,setReload] = useState(false)
    const dispatch = useDispatch()
    const defaultText = useSelector(store => store.text.text)
    const text = useRef("")
    useEffect(
        ()=> { axios.get('https://mh-h0bh.onrender.com/api/espectaculares?name='+text.current.value).then(res=>setData(res.data.response)) },
        [reload]
    )
    function hadleChange() {
        setReload(!reload)
        dispatch(capture({ text: text.current.value }))
    }
    return (
        <div className='index-main'>
            <input type="text" ref={text} defaultValue={defaultText} name="text" id="text" placeholder='find events!' onChange={hadleChange}/>
            <div className='index-cards'>
                {data?.map(each => <CardEvent key={each.id} data={each} />)}
            </div>
        </div>
    )
}