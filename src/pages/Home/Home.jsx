import './Home.css'
import {Link} from 'react-router-dom'

function home(){
    return(
        <div className="Home">        
        <h1>Você está na home</h1>
        <Link to="/cardedite">Edite as cartas</Link>

        </div>
    )
}

export default home;