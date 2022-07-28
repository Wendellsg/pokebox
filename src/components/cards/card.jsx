import './card.css'
import { useEffect, useState } from 'react';
import Hp from '../../assets/life.svg'
import Shield from '../../assets/shield.svg'
import Sword from '../../assets/sword.svg'
import Fireball from '../../assets/fireball.svg'
import  QR from '../../assets/qr-code.svg'

function Card({pokemonUrl}){

    const [pokemonData, setpokemonData] = useState(null)

    async function getPokemonList(){
      try {
        let pokemonListRequest = await fetch(pokemonUrl)
        return pokemonListRequest.json()
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(()=>{
      getPokemonList().then(res =>{
        console.log(res)
        setpokemonData(res)
      })
    },[])




    return(
        <div className="card-container">
            <div className="card-margin">
                <p className="poke-numeber">{pokemonData.id}</p>
                <h1 className="poke-name">{pokemonData.name}</h1>
                <img className="poke-image" src={pokemonData.sprites.front_default} alt="Blastoise"/>
                <div className="type">{pokemonData.types[0].type.name}</div>
                <div className="poke-infos">
                    <div className="poke-stats">
                    <div className="stat">
                        <img src={Hp} alt="HP"/>
                        <p>{pokemonData.stats[0].base_stat}</p>
                    </div>

                    <div className="stat">
                        <img src={Shield} alt="Shield"/>
                        <p>{pokemonData.stats[2].base_stat}</p>
                    </div>

                    <div className="stat">
                        <img src={Sword} alt="Shield"/>
                        <p>{pokemonData.stats[1].base_stat}</p>
                    </div>

                    <div className="stat">
                        <img src={Fireball} alt="Shield"/>
                        <p>{pokemonData.stats[3].base_stat}</p>
                    </div>
                    </div>
                    <div className="poke-id">
                        <img  className="qr-code" src={QR} alt="w651da651"/>
                        <p>card id: w651da651</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;