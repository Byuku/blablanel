import React from 'react';
import './App.scss';
import {Home} from './components/Home';
import {Result} from './components/Result';
// import {Recap} from './components/Recap';
import {Confirmation} from './components/Confirmation';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
export default class App extends React.Component {

    render() {
        return(
           <Router>
                <div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/result" render={ props => <Result {...props} />} />
                        {/* <Route path="/recap" render={ props => <Recap {...props} />} /> */}
                        <Route path="/confirmation" render={ props => <Confirmation {...props} />} />
                    </Switch>
                </div>
           </Router>
        )
    }
}
