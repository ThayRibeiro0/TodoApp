import React, { useState } from 'react';

function TodoForm(props) {
    //const to make the input work use the useState
    const [input, setInput] = useState('');

    //this its for make the input of user work in the box
    const handleChange = e => {
        setInput(e.target.value);
    };

    //this make the button don't refresh
    const handleSubmit = e => {
        e.preventDefault();
        //this line intend to give one id unique for each thing that its tap in it and the input and text its the input of the user.
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        //this part make the box to write appear or input and the button
        <form onSubmit={handleSubmit} className='todo-form'>
            <input 
                type='text' 
                placeholder='Add a todo' 
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
            />
            <button className='todo-button'> Add todo </button>
        </form>
    );
}

export default TodoForm;