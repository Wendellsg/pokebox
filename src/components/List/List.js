import React, {Component} from 'react'
import api from '../../api/api';
import Card from '../cards/card'
import './styles.css'



class List extends Component{
    
    state={
        cards:[]
    }
    

    async componentDidMount(){

        const response = await api.get('/cards');
        this.setState({cards: response.data})


    }


    render(){

        const {cards} = this.state

        return(
            <div className="card-list">
                {console.log(cards)}
                {cards.map(card =>
                    <li key={card.id}>
                    <Card
                    name={card.name}
                    Name={card.name} 
                    Number={card.id} 
                    Type={card.type}
                    Image={card.image}
                    hp={card.maxhp}
                    Defese={card.maxdefese}
                    Atack={card.maxatack}
                    Especial={card.maxespecial}
                />
            </li>)}
                
            </div>
        )
    }
}


export default List;