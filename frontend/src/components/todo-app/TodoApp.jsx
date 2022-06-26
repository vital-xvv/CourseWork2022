import React from 'react';
import TodoList from './TodoList';
import classes from './styles/Todo.module.css';

const TodoApp = () => {
    return (
    <div className={classes.main_todo}>
      <div className={classes.todo_app}>
          <TodoList />
      </div>  
    </div>
    );
};

export default TodoApp;