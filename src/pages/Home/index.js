import { useState } from 'react'

import {Header} from '../../components/Header'
import bakcground from '../../assets/background.png'

import './styles.css'

import ItemList from '../../components/ItemList'

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCorrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () =>{
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    console.log(userData)
    console.log(newUser)
    if(newUser.name){
      const { avatar_url, name, bio, login} = newUser
      setCorrentUser(newUser)

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){

        setRepos(newRepos);
        console.log(newRepos)
        
      }
      
    }
  }


  return (
    <div className="App">
        <Header/>
        <div className='conteudo'>
            <img src={bakcground} className='bakcground' alt='background app'/> 
            <div className='info'>
                <div>
                    <input name="usuário" value={user} onChange={(e) => setUser(e.target.value)} placeholder='@username' />
                    <button onClick={handleGetData}>Buscar</button>
                </div>

                {currentUser?.name ? (
                  <>
                    <div className='perfil'>
                        <img src ={currentUser.avatar_url} className='profile' alt="Foto do perfil" />
                          
                        <div > 
                            <h3>{currentUser.name}</h3>
                          <span>@{currentUser.login}</span>
                            <p>{currentUser.bio}</p>
                        </div>
                    </div>
                    <hr/>

                  </>

                ): null}

                {repos?.length ? (
                  <>
                      <div>
                        <h4 className='repositorio'>Repositórios</h4>
                        {repos.map( repo => (
                          <ItemList title={repo.name} description={repo.description}/> 
                         

                        ))}
                      </div>
                  </>
                ):null}
            </div>
        </div>
    </div>
  )
}

export default App;