import React, {useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'; 
import { TiEdit } from 'react-icons/ti'; 
import TodoForm from './TodoForm';
import classes from './styles/Todo.module.css';

const Todo = ({removeTodo, completeTodo, todos, updateTodo}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return ( todos && todos.map((todo, index) => 
        (<div 
            className={todo.isComplete? classes.todo_row + " " + classes.complete: classes.todo_row} 
            key={index}
        >
            <div 
                key={todo.id} 
                onClick={() => completeTodo(todo.id)}
            >
                    {todo.text}
            </div>

            <div 
                className={classes.icons}
            >
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    className={classes.delete_icon}
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className={classes.edit_icon}
                />
            </div>

        </div>)
    ))
};

export default Todo;