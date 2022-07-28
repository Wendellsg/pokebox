import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/cards/card'

function App() {
  const [pokemonList, setPokemonList] = useState(null)

  async function getPokemonList(){
    try {
      let pokemonListRequest = await fetch('https://pokeapi.co/api/v2/pokemon?&limit=10')
      return pokemonListRequest.json()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPokemonList().then(res =>{
      setPokemonList(res.results)
    })
  },[])

  return (
    <div className="App">
      <div className='PokemonList'>
        {pokemonList?pokemonList.map(pokemon=>{
          return <Card key={pokemon.name} pokemonUrl={pokemon.url}/>
        }):null }
      </div>
    
     
    </div>
  );
}

export default App;
