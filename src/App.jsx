import './App.css'
import LayoutMain from './layouts/LayoutMain/LayoutMain'
import ButtonIndex from './components/ButtonIndex/ButtonIndex'

function App() {
  let image = <img class='app-button-img' src="data:image/png;base64,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"/>
  return (
    <LayoutMain>
      <div class='app-main'>
          <h3>ACA VA A IR EL CONTENIDO</h3>
          <div class="app-button-box">
              <ButtonIndex style='button-1' text='menu' />
              <ButtonIndex style='button-2' text='ver' />
              <ButtonIndex style='button-3'>
                {image}
                <p>este es otro hijo</p>
              </ButtonIndex>
          </div>        
          <h3>EVENTOS</h3>
          <span class="app-events" id="events"></span>
      </div>
    </LayoutMain>
  )
}

export default App;