import {
    BrowserRouter, Switch, Route
} from 'react-router-dom';

import Home from './pages/Home/Home'
import CardEdite from './pages/CardEdit/CardEdite'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/cardedite" exact>
                    <CardEdite/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
    
}


export default Routes;