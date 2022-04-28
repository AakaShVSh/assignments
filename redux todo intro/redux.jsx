// import { legacy_createStore as creatorstore } from "redux";


// const reducer = (store,action) => {
    
//     switch(action.type){
//         case ADD_COUNT : return {...store,counter:store.counter+action.payload}
//         case ADD_TODO : return {...store,todo:[...store.todo,action.payload]}
//         default:return store
//     }
    
// }

// const initstate = {
//     counter:0,
//     todo:[],
// }

// const addtodo = (data) => {
//    console.log(data)
//     return {type:ADD_TODO,
//     payload:{
//         title:data,
//         status:false
//     }}
// }

// const ADD_COUNT = "ADD_COUNT";
// const ADD_TODO = "ADD_TODO";

// const store = creatorstore(reducer,initstate);

// store.dispatch({type:ADD_COUNT,payload:1})
// // store.dispatch({type:ADD_TODO,payload:{title:"learn vue",status:false}})
// // store.dispatch(addtodo("learn react"))
// console.log(store.getState());