import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
function Welcome() {
    return <h1>Hello</h1>;
  }
ReactDOM.render(<TodoList />, document.getElementById('root'));


