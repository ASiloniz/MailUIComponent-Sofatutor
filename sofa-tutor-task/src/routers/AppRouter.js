import React from 'react';
import NotFoundPage from '../components/NotFoundPage';
import EmailDashboard from '../components/EmailDashboard';
import Header from '../components/Header';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container-fluid'>
            <Header />
            <Switch>
                <Route path="/" component={EmailDashboard} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;