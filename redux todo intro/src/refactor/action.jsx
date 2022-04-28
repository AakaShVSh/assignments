import { ADD_TODO } from "./actiontype"

export const addtodo = (payload) => {

    return {
        type:ADD_TODO,
        payload
    }
} 