import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom';
import HomePage from './components/main/HomePage';
import BiologyTest from './components/ProgrammingTest/BiologyTest';
import ProgTest from './components/ProgrammingTest/ProgTest';
import LoginSignUp from './components/signin-up-forms/LoginSignUp';
import TodoApp from './components/todo-app/TodoApp';

function App() {
  const user = localStorage.getItem("token")

  return (
    <BrowserRouter>
     <Routes>
        {user && <Route path="/" exact element={<HomePage/>}/>}
        <Route path="/login" exact element={user? <Navigate replace to="/"/> : <LoginSignUp/>}/>
        <Route path="/" exact element={<Navigate replace to="/login"/>}/>
        <Route path="/programmingtest" exact element={user? <ProgTest/> : <Navigate replace to="/"/>}/>
        <Route path="/biologytest" exact element={user? <BiologyTest/> : <Navigate replace to="/"/>}/>
        <Route path="/todolist" exact element={user? <TodoApp/> : <Navigate replace to="/"/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
