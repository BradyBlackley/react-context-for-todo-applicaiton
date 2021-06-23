import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import LoginContext from "../contexts/LoginContext";
import { findAll } from "../services/todos";

function TodoList() {

    const [todos, setTodos] = useState();
    const history = useHistory();
    const { username } = useContext(LoginContext);

    useEffect(() => {
        findAll()
            .then(setTodos)
            .catch(() => history.push("/failure"));
    }, [history]);

    return (
        <>
        <div className="row">
            <div className="row">
                <ul className="list-group">
                    {todos && todos.map(i => <li key={i.id} className="list-group-item">{i.description}
                    <Link to={`/edit/${i.id}`} 
                    className={`btn btn-secondary ms-2 me-2 ${(username ? "" : " disabled")}`} >Edit</Link>
                    <Link to={`/delete/${i.id}`} 
                    className={`btn btn-danger me-2 ${(username ? "" : " disabled")}`} >Delete</Link>
                    </li>)}
                </ul>
            </div>
        </div>
        </>
    );
}

export default TodoList;