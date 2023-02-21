import './App.css'
import LayoutMain from './layouts/LayoutMain/LayoutMain'
import CardEvent from './components/CardEvent/CardEvent'
import ButtonIndex from './components/ButtonIndex/ButtonIndex'
import { data } from './data'
import { useState } from 'react'

function App() {

	const [render,setRender] = useState(false)
	/**
	 * @render parámetro para leer el estado (que inicia en false: y no mrenderiza los eventos)
	 * @setRender funcion que modifica el estado (por convencion se escribe la palabra set seguido de camelCase el estado que quiere modificar)
	 */

	const handleRender = ()=> {
		setRender(!render)
		console.log(render)
	}

	return (
		<LayoutMain>
		<div class='app-main'>
			<h3>EVENTOS</h3>
			<ButtonIndex style='button-2' text='ver eventos' onClick={handleRender} />
			<div class="app-events" id="events">
				{/* el cambio de estado tiene que condicionar el mapeo */}
				{/* si el estado está en true tiene que mostrar los eventos */}
				{/* si el estado está en false no debe mostrar nada */}
				{/* se suele utilizar la sintaxis del ternario para estos condicionales */}
				{/* (condicion) ? (que hago si es true) : (que hago si es false) */}
				{
					(render) ? (
						data.events.map(each=> <CardEvent key={each._id} data={each} />)
					) : (
						null
					)
				}
			</div>
		</div>
		</LayoutMain>
	)
}

export default App