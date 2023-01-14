import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //for when you tap other thing that it isn't letter he keep empty
    const addTodo = todo => {
      if(!todo.text || /^\s*$/.test(todo.text)) {
        return;
      }

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
    };
    //This its for update the dates and edit them
    const updateTodo = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }
      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
      );
    };

    //function that make the delete note go out
    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removeArr);
    };

    const completeTodo = id => {
      let updatedTodos= todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };

  return (
    <div>
        {/* this make the page TodoForm and TodoList mix together in one page and update the app with the name of this file it appear there. */}
        <h1>What's the plans for today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo}
        />
    </div>
  );
}

export default TodoList;