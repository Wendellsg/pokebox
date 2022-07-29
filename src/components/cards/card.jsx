import './card.css'
import {useEffect, useState} from 'react'
import Heart from '../../assets/life.svg'
import Shield from '../../assets/shield.svg'
import Sword from '../../assets/sword.svg'
import Fireball from '../../assets/fireball.svg'
import  QR from '../../assets/qr-code.svg'
import axios from 'axios'


function Card({pokemonUrl, index, getCard, number, localDeck, removeCard}){
    const [Color, setColor] = useState('#30A7D7')
    const [pokemonData, setpokemonData] = useState(null)
    const [SelectedCard, setSelectedCard] = useState('#F2F2F2')
    const [Selected, setSelected] = useState(false)
    const [deleteCard, setDeleteCard] = useState(false)


        
    async function getPokemonList(){
        try {
          let pokemonListRequest = await axios.get(pokemonUrl);
          return pokemonListRequest.data
        } catch (error) {
          //console.log(error)
        }
      }

        
    useEffect(()=>{
        getPokemonList().then(res =>{
          setpokemonData(res)
        })
      },[pokemonUrl])



    useEffect(() => {

            switch(pokemonData?.types[0]?.type.name){
                case 'water':
                        setColor('#30A7D7');
                break;
                case 'fire':
                        setColor('#f42');
                    break;
                case 'grass':
                        setColor('#7c5');
                    break;
                case 'electric':
                        setColor(' #fc3');
                    break;
                case 'Normal':
                        setColor('#aa9');
                    break;
                case 'fighting':
                        setColor('#aa5');
                    break;
                case 'ice':
                        setColor(' #6cf');
                    break;
                case 'poison':
                        setColor(' #a59');
                    break;
                case 'ground':
                        setColor(' #db5');
                    break;
                case 'Voador':
                        setColor(' #89f');
                    break;
                case 'bug':
                        setColor(' #ab2');
                    break;
                case 'psychic':
                        setColor(' #f59');
                    break;
                case 'rock':
                        setColor(' #ba6');
                    break;
                case 'ghost':
                        setColor(' #66b');
                    break;
                case 'dragon':
                        setColor(' #76e');
                    break;
                case 'darkness':
                        setColor(' #754');
                    break;
                case 'steel':
                        setColor(' #aab');
                    break;
                case 'fairy':
                        setColor(' #e9e');
                    break;
                default:
                        setColor('#30A7D7')
            }


        
      }, [pokemonData?.types[0]?.type?.name]);


      useEffect(()=>{setSelected(true)},[])

       function cardHandleClick(){
        if(localDeck) {
            setDeleteCard(true)
            setTimeout(() => {
                removeCard(number)
            }, 1000);
           
        return;
    }
        setDeleteCard(true)
        setTimeout(() => {
            getCard(number)
        }, 500);
        setSelected(!Selected)

      }

    if(!pokemonData)return '';

    return(
        <div className={`card-container roll-in-blurred-left ${deleteCard?'swirl-out-bck':''}`}  onClick={cardHandleClick} style={{background: `${SelectedCard}`, animationDelay: `${index}50ms`}}>
            <div style={{border: ` 1px solid ${Color}`}} className="card-margin">
            <p className="poke-numeber">{pokemonData.id}</p>
                <h1 className="poke-name">{pokemonData?.name}</h1>
                <img className="poke-image" src={pokemonData?.sprites?.front_default} alt="Blastoise"/>
                <div className="type" style={{background: `${Color}`}}>{pokemonData?.types[0]?.type?.name}</div>
                <div className="poke-infos">
                    <div className="poke-stats">
                    <div className="stat">
                        <img src={Heart} alt="HP"/>
                        <p>{pokemonData?.stats[0]?.base_stat}</p>
                    </div>

                    <div className="stat">
                        <img src={Shield} alt="Shield"/>
                        <p>{pokemonData?.stats[2]?.base_stat}</p>
                    </div>

                    <div className="stat">
                        <img src={Sword} alt="Shield"/>
                        <p>{pokemonData?.stats[1]?.base_stat}</p>
                    </div>

                    <div className="stat">
                        <img src={Fireball} alt="Shield"/>
                        <p>{pokemonData?.stats[3]?.base_stat}</p>
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