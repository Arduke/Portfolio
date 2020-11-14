import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../../history'
import Menu from '../Menu'
import Body from '../Body'
import "./styles.css"

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Body}/>
                </Switch>
            </Router>
        </div>
    )
}

export default App;