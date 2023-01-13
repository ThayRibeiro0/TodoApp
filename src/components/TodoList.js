import React, {useState} from 'react';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(todo, ...todos);
    };

  return (
    <div>
        {/* this make the page TodoForm and TodoList mix together in one page and update the app with the name of this file it appear there. */}
        <h1>What's the plans for today?</h1>
        <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;