import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state, subscribe} from "./redux/state";


export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App data={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree()

subscribe(renderTree)