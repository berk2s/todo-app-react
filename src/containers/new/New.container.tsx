import {Link} from "react-router-dom";
import React, {useState} from "react";

import './new.scss'
import {useDispatch} from "react-redux";
import {addItem} from "../../redux/actions/todo.actions";
import { useNavigate } from 'react-router-dom';

const New = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [task, setTask] = useState<string>('');

    const handleSave = () => {
        if(task.trim() === '') {
            alert("You have to write something.");
            return;
        }

        dispatch(addItem({
            title: task,
            isCompleted: false
        }))

        navigate("/")
    }

    return (
        <div className={'page-container'}>

            <div className={'page-area'}>

                <div className={'page-header'}>
                    <div className={'sub-header'}>
                        <Link to={'/'} className={'btn'}>Go to List</Link>

                        <p>🆕 Create a Task</p>
                    </div>
                </div>

                <div className={'page-content'}>

                    <div className={'task-form'}>
                        <input
                            type="text"
                            name="name"
                            placeholder={'Write something about task'}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button className={'btn'} value={'Create'} onClick={handleSave} disabled={task.trim() === ''}>
                        Create
                        </button>
                    </div>

                </div>

            </div>

        </div>)
};

export default New;