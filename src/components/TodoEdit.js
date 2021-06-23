import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {emptyTodo} from './data';
import {findById, update} from '../services/todos';

function TodoEdit() {

    const[todo, setTodo] = useState(emptyTodo);

    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            findById(id)
                .then(t => setTodo(t))
                .catch(() => history.push("/failure"));
        } 
    }, [history, id]);

    const onChange = evt => {
        const nextTodo = {...todo };
        nextTodo[evt.target.name] = evt.target.value;
        setTodo(nextTodo);
    };

    const onSubmit = evt => {
        evt.preventDefault();
        update(todo)
            .then(() => history.push("/"))
            .catch(() => history.push("/failure"));
    };

    const cancel = evt => {
        evt.preventDefault();
        history.push("/");
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="todoDescription">Description</label>
                <input type="text" className="form-control" 
                    value={todo.description} onChange={onChange} 
                    id="todoDescription" name="description" required/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary me-2">Save</button>
                <button className="btn btn-secondary me-2" onClick={cancel}>Cancel</button>
            </div>
        </form>
    );
}

export default TodoEdit;