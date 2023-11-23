import React, { useState, useRef, useEffect } from 'react';
import '../Todo/Todo.css';
import TodoItems from '../TodoItems/TodoItems';

const Todo = () => {
  let count = localStorage.getItem("todos-count") || 0;

  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
    inputRef.current.value = '';
    localStorage.setItem("todos-count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    count = localStorage.getItem("todos-count") || 0;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type='text' placeholder='Add Your Text' className='todo-inputs' />
        <div onClick={add} className='todo-add-btn'>
          ADD
        </div>
      </div>

      <div className='todo-list'>
        {todos.map((item) => (
          <TodoItems key={item.no} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
