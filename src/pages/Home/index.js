import {Header} from '../../components/Header'
import bakcground from '../../assets/background.png'

import './styles.css'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='conteudo'>
            <img src={bakcground} className='bakcground' alt='background app'/> 
            <div className='info'>
                <div>
                    <input name="usuário" placeholder='@username' />
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;