import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Sidebar} from "./component/Sidebar/Sidebar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {AppType} from "./type/type";


const App: React.FC<AppType> = ({data}) => {
    const {dataFriend, messagesPage} = data;
    console.log(messagesPage)
    return (
        <BrowserRouter>
            <>
                <Header/>
                <div className={'mainWrapper'}>
                    <div className={'container'}>
                        <Sidebar/>
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>
                        )}/>
                        <Route path={'/home'} render={() => <Profile dataFriend={dataFriend}/>}/>
                        <Route path={'/dialogs'} render={() => <Dialogs messagesPage={messagesPage}/>}/>
                    </div>
                </div>
            </>
        </BrowserRouter>
    );
}

export default App;
