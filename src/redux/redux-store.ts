import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import {friendReducer} from "./friend-reducer";
import {userReducer} from "./user-reducer";

const rootReducer = combineReducers({
    postDataPage: profileReducer,
    messagesPage: messageReducer,
    friendsData: friendReducer,
    usersData: userReducer
})

type RootReducer = typeof rootReducer;
export type StoreType = ReturnType<RootReducer>

export const store = createStore(rootReducer);