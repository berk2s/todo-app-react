export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_COMPLETED = 'SET_COMPLETED';
export const SET_INCOMPLETED = 'SET_INCOMPLETED';

export interface TodoState {
    items: TodoItem[],
}

export interface TodoItem {
    title: string,
    isCompleted: boolean
}

interface AddItemPayload {
    type: typeof ADD_ITEM
    payload: TodoItem
}

interface RemoveItemPayload {
    type: typeof REMOVE_ITEM
    payload: number
}

interface SetCompletedPayload {
    type: typeof SET_COMPLETED
    payload: number
}


interface SetInCompletedPayload {
    type: typeof SET_INCOMPLETED
    payload: number
}

export type TodoActionTypes =
    AddItemPayload |
    RemoveItemPayload |
    SetCompletedPayload |
    SetInCompletedPayload;