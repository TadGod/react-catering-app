import React from "react";
import './index.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Homepage, Registration, Login, SingleProductOverview, NonExistantPage } from './pages';
import PrivateRoute from "./routes/PrivateRoute";


function App() {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route exact path='/registration'>
                    <Registration />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <PrivateRoute exact path='/item/:id'>
                    <SingleProductOverview />
                </PrivateRoute>
                <Route exact path='/error'>
                    <NonExistantPage />
                </Route>
                <Redirect from='*' to='/error' />
            </Switch>
        </Router>
    )
}

export default App;