import './styles.css'
import {useEffect, useState, } from 'react';
import Card from '../../components/cards/card'
import api from '../../api/api'
import List from '../../components/List/List'

function CardEdite(){
    const[CreatedCard, setCreatedCard] = useState({})

    window.onload = getCards;
    
        async function getCards(){
        
            const response = await api.get('/cards')          
            setCreatedCard(response.data)
        }

        console.log(CreatedCard)

    const [CardNumber, setCardNumber] = useState(9);
    const [CardName, setCardName] = useState('Blastoise')
    const [CardType, setCardType] = useState('Água')
    const [CardImage, setCardImage] = useState("https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png")
    const [MaxHP, setMaxHP] = useState(300)
    const [MinHP, setMinHP] = useState(300)
    const [MaxDefese, setMaxDefese] = useState(50)
    const [Defese, setMinDefese] = useState(50)
    const [MaxAtack, setMaxAtack] = useState(75)
    const [Atack, setMinAtack] = useState(75)
    const [MaxEspecial, setMaxEspecial] = useState(100)
    const [Especial, setMinEspecial] = useState(100)

    

    return(
        <div className="edit-app">
            <div className="Edit-title">
                <p>Adicione ou edite cartas</p>
            </div>
            
            <div className="edit-painel">
                <Card 
                    Name={CardName} 
                    Number={CardNumber} 
                    Type={CardType}
                    Image={CardImage}
                    hp={MaxHP}
                    Defese={MaxDefese}
                    Atack={MaxAtack}
                    Especial={MaxEspecial}          
                />
                <div className="edit-form">
                    <div className="form-primeira-coluna">
                        <div className='campo'>
                        <p>Nome</p>
                        <input onChange={event => setCardName(event.target.value)} type="text"/>
                        </div>
                            <div className='campo'>
                            <p>Tipo</p>
                            <select className='card-select' onChange={event => setCardType(event.target.value)}>
                                <option value="Água">Água</option>
                                <option value="Fogo">Fogo</option>
                                <option value="Grama">Grama</option>
                                <option value="Elétrico">Elétrico</option>
                                <option value="Normal">Normal</option>
                                <option value="Gelo">Gelo</option>
                                <option value="Veneno">Veneno</option>
                                <option value="Terra">Terra</option>
                                <option value="Voador">Voador</option>
                                <option value="Inseto">Inseto</option>
                                <option value="Psícquo">Psícquo</option>
                                <option value="Rocha">Rocha</option>
                                <option value="Dragão">Dragão</option>
                                <option value="Aço">Aço</option>
                                <option value="Fada">Fada</option>
                            </select>
                        </div>
                        <div className='campo'>
                        <p>Imagem</p>
                        <input onChange={event => setCardImage(event.target.value)} type="text"/>
                        </div>
                    </div>
                    <div className="form-segunda-coluna">
                        <div className="form-stats">
                            <div className='campo'>
                                <p>HP</p>
                                <div className="range">
                                    <input  onChange={event => setMinHP(event.target.value)}type="number" name="HP" id="HP"/>
                                    <input  onChange={event => setMaxHP(event.target.value)} type="number" name="HP" id="HP"/>
                                </div>
                            </div>
                            <div className='campo'>
                                <p>Defesa</p>
                                <div className="range">
                                    <input  onChange={event => setMinDefese(event.target.value)}type="number" name="Defesa" id="Defesa"/>
                                    <input  onChange={event => setMaxDefese(event.target.value)} type="number" name="Defesa" id="Defesa"/>
                                </div>
                            </div>
                            <div className='campo'>
                                <p>Ataque</p>
                                <div className="range">
                                    <input onChange={event => setMinAtack(event.target.value)}type="number" name="Ataque" id=""/>
                                    <input onChange={event => setMaxAtack(event.target.value)} type="number" name="Ataque" id="Ataque"/>
                                </div>
                                
                            </div>
                            <div className='campo'>
                                <p>Especial</p>
                                <div className="range">
                                    <input onChange={event => setMinEspecial(event.target.value)}type="number" name="Especial" id=""/>
                                    <input onChange={event => setMaxEspecial(event.target.value)} type="number" name="Especial" id="Especial"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-lore">
                            <p>Lore</p>
                            <input type="text" name="lore" id=""/>
                        </div>
                    </div>

                    <div className="submit">
                        <button onClick={getCards}>Enviar</button>
                    </div>
                </div>
            </div>
            <div className="Edit-title">
                <p>Cartas Criadas</p>
            </div>

            <div className="created-card">              
                    <List/>
            </div>
        </div>

        
    )
}

export default CardEdite;