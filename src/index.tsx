import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";


export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App data={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)