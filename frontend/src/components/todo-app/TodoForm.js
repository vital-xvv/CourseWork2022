import React, {useState, useEffect, useRef} from 'react';
import classes from './styles/Todo.module.css';

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value: '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')
    }


    return (
        <form className={classes.todo_form} onSubmit={handleSubmit} >
            {props.edit ? 
            <>
            <input 
                type="text" 
                placeholder='Update your item' 
                value={input} name="text" 
                className={classes.todo_input + " " + classes.edit}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className={classes.todo_button + " " + classes.edit}>Update</ button>
            </> 
            :
            <>
            <input 
                type="text" 
                placeholder='Add a todo' 
                value={input} name="text" 
                className={classes.todo_input}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className={classes.todo_button}>Add todo</ button>
            </>}       
            
        </form>
    );
};

export default TodoForm;