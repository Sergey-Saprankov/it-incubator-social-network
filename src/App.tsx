import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Sidebar} from "./component/Sidebar/Sidebar";
import {Profile} from "./component/Profile/Profile";
import {Dialogs} from "./component/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom";
import {StoreType} from "./redux/state";


type AppType = {
    data: StoreType
}

const App: React.FC<AppType> = ({data}) => {
    const {dataFriend, messagesPage, postDataPage} = data._state;
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
                           render={() => <Profile postDataPage={postDataPage}
                                                  dataFriend={dataFriend}
                                                  dispatch={data.dispatch.bind(data)}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs messagesPage={messagesPage}/>}/>
                </div>
            </div>
        </>
    );
}

export default App;
