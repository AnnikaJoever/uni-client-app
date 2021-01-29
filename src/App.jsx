import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './comp/Nav';
import TopBar from './comp/TopBar';
import UserControl from './views/UserControl';
import Balance from './views/Balance';
import Home from './views/Home';
import Settings from './views/Settings';

const App = () => {
    return (
        <Router>
            <div className="flex h-screen bg-gray-100">
                <Nav />
                <div className="flex flex-col flex-1 w-full">
                    <TopBar />
                    <div className="h-full overflow-y-auto">
                        <div className="h-full px-6 pb-5 mx-auto grid">
                            <Switch>
                                <Route path="/uni-client-app" exact component={ Home } />
                                <Route path="/uni-client-app/home" component={ Home } />
                                <Route path="/uni-client-app/balance" component={ Balance } />
                                <Route path="/uni-client-app/user" component={ UserControl } />
                                <Route path="/uni-client-app/settings" component={ Settings } />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
