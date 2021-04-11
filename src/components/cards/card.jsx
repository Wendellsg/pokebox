import './card.css'
import Hp from '../../assets/life.svg'
import Shield from '../../assets/shield.svg'
import Sword from '../../assets/sword.svg'
import Fireball from '../../assets/fireball.svg'
import  QR from '../../assets/qr-code.svg'


function card(){
    return(
        <div className="card-container">
            <div className="card-margin">
                <p className="poke-numeber">009</p>
                <h1 className="poke-name">Blastoise</h1>
                <img className="poke-image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" alt="Blastoise"/>
                <div className="type">Água</div>
                <div className="poke-infos">
                    <div className="poke-stats">
                    <div className="stat">
                        <img src={Hp} alt="HP"/>
                        <p>300</p>
                    </div>

                    <div className="stat">
                        <img src={Shield} alt="Shield"/>
                        <p>50</p>
                    </div>

                    <div className="stat">
                        <img src={Sword} alt="Shield"/>
                        <p>75</p>
                    </div>

                    <div className="stat">
                        <img src={Fireball} alt="Shield"/>
                        <p>100</p>
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

export default card;