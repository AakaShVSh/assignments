import { ADD_TODO } from "./actiontype";

const iniState = {
    todo:[{
        id:1,
        title:"Learn Redux",
        status:false
    }]
}

const reducer = (state = iniState,{type,payload}) => {

   switch(type){
       case ADD_TODO:{
           return {
               ...state,
               todo:[...state.todo,payload]
           }
       }
       default:
           return state;
   }
}

export {reducer}