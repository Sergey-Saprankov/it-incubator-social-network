import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Sidebar} from "./component/Sidebar/Sidebar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom";
import {UsersContainer} from "./component/Friends/Friend/UsersContainer";


const App = () => {
    return (
        <>
            <Header/>
            <div className={'mainWrapper'}>
                <div className={'container'}>
                    <Sidebar/>
                    <Route exact path="/" render={() => (
                        <Redirect to="/home"/>
                    )}/>
                    <Route path={'/home'}
                           render={() => <Profile/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                    <Route path={'/friends'} render={() => <UsersContainer/>}/>
                </div>
            </div>
        </>
    );
}

export default App;
