import React from 'react';
import Header from "../components/header/Header";
import {Route, Routes} from "react-router-dom";
import List from "./list/List.container";
import New from "./new/New.container";

const TodoApp = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/new" element={<New />} />
            </Routes>
        </div>
    );
}

export default TodoApp;