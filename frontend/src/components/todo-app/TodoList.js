import React, {useEffect, useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';


const TodoList = () => {

    const user = localStorage.getItem("token")
    const [todos, setTodos] = useState([])
    const [firstName, setFirstName] = useState('')

    const updateRequest = (todosList) => {
        setTodos(todosList)
        axios.post("http://localhost:5000/api/todoapp/updatetodos", {token: user, todos: todosList})
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axios.post("http://localhost:5000/api/todoapp/todos", {token: user})
        .then(res => {
            setTodos(res.data.todos);})
        .catch(err => console.log(err))

        axios.post("http://localhost:5000/api/user/userinfo", {token: user})
        .then(res => {
            setFirstName(res.data.firstName);})
        .catch(err => console.log(err))
        }, [])


    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]

        updateRequest(newTodos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo
        })

        updateRequest(updatedTodos);
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item ) ))
        
        axios.post("http://localhost:5000/api/todoapp/updatetodos", {token: user, todos: todos})
        .then(res => console.log(res.data.message))
        .catch(err => console.log(err))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        updateRequest(removeArr);
    }

    return (
        <div>
            <h1>Hello {firstName}, what's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    );
};

export default TodoList;