import React from "react";

import './list.scss';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/reducers";
import {TodoItem} from "../../redux/types/todo.types";

const List = () => {

    const {items} : { items: TodoItem[] } = useSelector((state: RootState) => state.todo);

    return (
        <div className={'page-container'}>

            <div className={'page-area'}>

                <div className={'page-header'}>
                    <p>📋 All tasks</p>

                    <Link to={'/new'} className={'btn'}>Add new</Link>
                </div>

                <div className={'page-content'}>

                    {
                        items.length > 0 ? (<ul className={'listing-todos'}>
                            {items.map(item => (
                                <li>
                                    <div className={'todo-title' + (item.isCompleted ? 'completed-task' : '')}>
                                        <p className={'title'}>{item.title}</p>
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