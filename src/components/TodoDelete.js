import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { deleteById, findById } from '../services/todos';

function TodoDelete () {

    const [todo, setTodo] = useState();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            findById(id)
                .then(t => setTodo(t))
                .catch(() => history.push("/failure"));
        }
    }, [history, id]);

    const yesDelete = () => {
        deleteById(todo.id)
            .then(() => history.push("/"))
            .catch(() => history.push("failure"));
    };

    const cancel = () => history.push("/");

    return (
        <div>
            <div>
                <div className="alert alert-danger" role="alert">Really delete? <button onClick={cancel} className="btn btn-secondary">Cancel</button></div>
            </div>
            <div>
                <button onClick={yesDelete} className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default TodoDelete;