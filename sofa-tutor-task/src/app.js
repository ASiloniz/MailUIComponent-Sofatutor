import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';

import './styles/styles.scss';
import 'normalize.css/normalize.css';
import { getEmailList } from './actions/emailsActions';

import bootstrap from '../bootstrap/css/bootstrap.min.css';

const store = configureStore();

store.dispatch(getEmailList());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

export default store;

ReactDOM.render(jsx, document.getElementById("app"));