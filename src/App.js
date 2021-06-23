import { useState } from "react";
import './App.css';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import TodoEdit from './components/TodoEdit.js';
import TodoDelete from './components/TodoDelete.js';
import Login from './components/Login.js';
import Fail from './components/Fail.js';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginContext from "./contexts/LoginContext";

function App() {

  const [username, setUsername] = useState(null);

  return (
    <div className="container">
      <LoginContext.Provider value={{ username, setUsername}}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/add">
            {username ? <TodoForm /> : <Redirect path="/login" />}
          </Route>
          <Route path={["/edit/:id"]}>
            {username ? <TodoEdit /> : <Redirect path="/login" />}
          </Route>
          <Route path={["/delete/:id"]}>
          {username ? <TodoDelete /> : <Redirect path="/login" />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/failure">
            <Fail />
          </Route>
          <Route path="/">
            <TodoList />
          </Route>
        </Switch>
      </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
