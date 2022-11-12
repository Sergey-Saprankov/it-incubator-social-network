import {v1} from "uuid";
// import avatar from '../img/avatar.jpg'
// import profileReducer from "./profile-reducer";
// import messageReducer from "./message-reducer";
// import {ActionType, DataType} from "./type/type";
//
//
// export type StoreType = {
//     _state: DataType
//     _render: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => DataType
//     dispatch: (action: ActionType) => void
// }
//
// export const store: StoreType = {
//     _state: {
//         postDataPage: {
//             posts: [],
//             newPostText: '',
//             datePost() {
//                 let date = new Date().toString();
//                 return date.split(' ').filter((el, i) => i <= 3).join(' ');
//             },
//         },
//         messagesPage: {
//             newMessage: '',
//             messages: [
//                 {
//                     id: v1(),
//                     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU",
//                     alt: "dialog",
//                     title: "Иван",
//                     description: 'Позвони мне в 5'
//                 },
//                 {
//                     id: v1(),
//                     src: avatar,
//                     alt: "dialog",
//                     title: "Я",
//                     description: 'Привет'
//                 }
//             ],
//                 dialogs: [
//                     {
//                         id: v1(),
//                         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU",
//                         alt: "dialog",
//                         title: "Иван",
//                         description: 'Позвони мне в 5'
//                     },
//                     {
//                         id: v1(),
//                         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdssuPAVWmU_isiO4aP3ybsEWdc_IEonIvw&usqp=CAU",
//                         alt: "dialog",
//                         title: "Мария",
//                         description: 'Гоу в кино'
//                     },
//                     {
//                         id: v1(),
//                         src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxip991oVlIE0GHvVuYBJF32NXceKE-Rzmw&usqp=CAU",
//                         alt: "dialog",
//                         title: "Толик",
//                         description: 'Займи денег'
//                     }
//                 ]
//             ,
//         },
//         dataFriend: [
//             {
//                 id: v1(),
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU',
//                 alt: 'avatar',
//                 title: 'Иван Иванов',
//             },
//             {
//                 id: v1(),
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdssuPAVWmU_isiO4aP3ybsEWdc_IEonIvw&usqp=CAU',
//                 alt: 'avatar',
//                 title: 'Иван Петров',
//             },
//             {
//                 id: v1(),
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxip991oVlIE0GHvVuYBJF32NXceKE-Rzmw&usqp=CAU',
//                 alt: 'avatar',
//                 title: 'Светлана Петрова',
//             },
//             {
//                 id: v1(),
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8jEwRitlFu0tnQ6P58GkKsOEIcOR5EWdCw&usqp=CAU',
//                 alt: 'avatar',
//                 title: 'Игорь Сазонов',
//             },
//             {
//                 id: v1(),
//                 src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdApzzKwnuc3dW-T8AI7171iTRkLAkePR5Ww&usqp=CAU',
//                 alt: 'avatar',
//                 title: 'Дмитрий Терентьев',
//             }
//         ]
//     },
//
//     dispatch(action) {
//        this._state.postDataPage =  profileReducer(this._state.postDataPage, action)
//        this._state.messagesPage = messageReducer(this._state.messagesPage, action)
//         this._render()
//     },
//
//     _render() {
//         console.log('render')
//     },
//
//     subscribe(observer) {
//         this._render = observer
//     },
//
//     getState() {
//         return this._state
//     }
// }
//
//
