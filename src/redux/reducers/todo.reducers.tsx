import {ADD_ITEM, REMOVE_ITEM, SET_COMPLETED, SET_INCOMPLETED, TodoState} from "../types/todo.types";

const initialState: TodoState = {
    items: []
}

export function todoReducer(state: TodoState = initialState, action: any) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter((val, i) => i !== action.payload)
            }
        case SET_COMPLETED:
            return {
                ...state,
                items: state.items.map((item, i) => i === action.payload
                    ? {...item, isCompleted: true} : item)
            }
        case SET_INCOMPLETED:
            return {
                ...state,
                items: state.items.map((item, i) => i === action.payload
                    ? {...item, isCompleted: false} : item)
            }
        default:
            return state;
    }
}