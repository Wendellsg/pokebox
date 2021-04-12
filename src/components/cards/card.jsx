import './card.css'
import {useEffect, useState} from 'react'
import Heart from '../../assets/life.svg'
import Shield from '../../assets/shield.svg'
import Sword from '../../assets/sword.svg'
import Fireball from '../../assets/fireball.svg'
import  QR from '../../assets/qr-code.svg'


function Card(props){
    const [Color, setColor] = useState('#30A7D7')

    useEffect(() => {

            switch(props.Type){
                case 'Água':
                        setColor('#30A7D7');
                break;
                case 'Fogo':
                        setColor('#f42');
                    break;
                case 'Grama':
                        setColor('#7c5');
                    break;
                case 'Elétrico':
                        setColor(' #fc3');
                    break;
                case 'Normal':
                        setColor('#aa9');
                    break;
                case 'Gelo':
                        setColor(' #6cf');
                    break;
                case 'Veneno':
                        setColor(' #a59');
                    break;
                case 'Terra':
                        setColor(' #db5');
                    break;
                case 'Voador':
                        setColor(' #89f');
                    break;
                case 'Inseto':
                        setColor(' #ab2');
                    break;
                case 'Psícquo':
                        setColor(' #f59');
                    break;
                case 'Rocha':
                        setColor(' #ba6');
                    break;
                case 'Fantasma':
                        setColor(' #66b');
                    break;
                case 'Dragão':
                        setColor(' #76e');
                    break;
                case 'Escuridão':
                        setColor(' #754');
                    break;
                case 'Aço':
                        setColor(' #aab');
                    break;
                case 'Fada':
                        setColor(' #e9e');
                    break;
                default:
                        setColor('#30A7D7')
            }


        
      }, [props.Type]);
  


    return(
        <div className="card-container">
            <div style={{border: ` 1px solid ${Color}`}} className="card-margin">
                <p className="poke-numeber">{props.Number}</p>
                <h1 className="poke-name">{props.Name}</h1>
                <img className="poke-image" src={props.Image} alt={props.Name}/>
                <div style={{background: `${Color}`}} className="type">{props.Type}</div>
                <div className="poke-infos">
                    <div className="poke-stats">
                    <div className="stat">
                        <img src={Heart} alt="HP"/>
                        <p>{props.hp}</p>
                    </div>

                    <div className="stat">
                        <img src={Shield} alt="Shield"/>
                        <p>{props.Defese}</p>
                    </div>

                    <div className="stat">
                        <img src={Sword} alt="Sword"/>
                        <p>{props.Atack}</p>
                    </div>

                    <div className="stat">
                        <img src={Fireball} alt="FireBall"/>
                        <p>{props.Especial}</p>
                    </div>
                    </div>
                    <div className="poke-id">
                        <img  className="qr-code" src={QR} alt="w651da651"/>
                        <p>{`Card ID:${props.Number}`}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;