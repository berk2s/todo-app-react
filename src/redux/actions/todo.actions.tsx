import {ADD_ITEM, REMOVE_ITEM, SET_COMPLETED, SET_INCOMPLETED, TodoActionTypes, TodoItem} from "../types/todo.types";
import {ActionCreator} from "redux";

export const addItem: ActionCreator<TodoActionTypes> = (item: TodoItem) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const deleteItem: ActionCreator<TodoActionTypes> = (index: number) => {
    return {
        type: REMOVE_ITEM,
        payload: index
    }
}

export const setCompleted: ActionCreator<TodoActionTypes> = (index: number) => {
    return {
        type: SET_COMPLETED,
        payload: index
    }
}

export const setInCompleted: ActionCreator<TodoActionTypes> = (index: number) => {
    return {
        type: SET_INCOMPLETED,
        payload: index
    }
}