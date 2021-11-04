import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoApp from "./containers/TodoApp.container";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
  );
}

export default App;
