import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';
import Add from './pages/Add';
import Login from './pages/Login';
import Register from './pages/Register';
import Edit from './pages/Edit';

const App = () => {
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/details/:id" component={Details}  />
                <Route exact path="/add" component={Add}  />
                <Route exact path="/login" component={Login}  />
                <Route exact path="/register" component={Register}  />
                <Route exact path="/edit/:id" component={Edit}  />
            </Switch>
        </Router>
    )
}

export default App;