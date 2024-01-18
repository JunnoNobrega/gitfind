import {Header} from '../../components/Header'
import bakcground from '../../assets/background.png'
import profile from '../../assets/profile-pic (1).png'
import './styles.css'

import ItemList from '../../components/ItemList'

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
                <div className='perfil'>
                    <img src ={profile} className='profile' alt="Foto do perfil" />
                      
                    <div > 
                        <h3>Junno nóbrega</h3>
                       <span>@junnons</span>
                        <p>Descrição</p>
                    </div>
                </div>
                <hr/>

                <div>
                  <h4 className='repositorio'>Repositórios</h4>
                  <ItemList title="Teste1" description='Teste repositorio '/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default App;