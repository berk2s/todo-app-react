import React, {useEffect, useState} from "react";

import './list.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {TodoItem} from "../../redux/types/todo.types";
import {deleteItem, setCompleted, setInCompleted} from "../../redux/actions/todo.actions";

const List = () => {
    const [tasks, setTasks] = useState<TodoItem[]>([]);
    const dispatch = useDispatch();

    const {items} : { items: TodoItem[] } = useSelector((state: RootState) => state.todo);

    useEffect(() => {
        setTasks(items);
    }, [items]);

    const changeCompleted = (isCompleted: boolean, index: number) => {
        dispatch(isCompleted ? setInCompleted(index) : setCompleted(index))
    }

    const removeItem = (index: number) => {
        dispatch(deleteItem(index))
    }

    return (
        <div className={'page-container'}>

            <div className={'page-area'}>

                <div className={'page-header'}>
                    <p>📋 All tasks</p>

                    <Link to={'/new'} className={'btn'}>Add new</Link>
                </div>

                <div className={'page-content'}>

                    {
                        tasks.length > 0 ? (<ul className={'listing-todos'}>
                            {tasks.map((item, index) => (
                                <li key={index}>
                                    <div onClick={() => changeCompleted(item.isCompleted, index)}  className={'todo-title ' + (item.isCompleted ? 'completed-task' : '')}>
                                        <p className={'title'} >{item.title}</p>

                                        <span onClick={() => removeItem(index)}>🗑️</span>
                                    </div>
                                </li>
                                ))} </ul>) : <span className={'no-result'}>Hey, you haven't any tasks. Would you like to add some tasks?</span>
                    }

                </div>

            </div>

        </div>
    )
};

export default List;