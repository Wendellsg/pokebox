import './Home.css'
import {Link} from 'react-router-dom'
import List from '../../components/List/List'

function home(){
    return(
        <div className="Home">        
        <h1>Você está na home</h1>
        <Link to="/cardedite">Edite as cartas</Link>

        <List/>
        </div>
    )
}

export default home;