import {v1} from "uuid";
import avatar from "../img/avatar.jpg";
import {ActionType, DialogType, MessagePageType} from "../redux/state";


const messageReducer = (state: MessagePageType, action: ActionType) => {
    if (action.type === ActionType.ADD_MESSAGE_TEXT) {
        state.newMessage = action.text;
    } else if (action.type === ActionType.ADD_MESSAGE) {
        const newMessage: DialogType = {
            id: v1(),
            src: avatar,
            alt: "dialog",
            title: "Я",
            description: state.newMessage
        }
        state.messages.push(newMessage)
    }
    return state
}

export default messageReducer