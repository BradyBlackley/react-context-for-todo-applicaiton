import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import LoginContext from "../contexts/LoginContext.js";

function Login() {

    const [name, setName] = useState("");
    const { setUsername } = useContext(LoginContext);
    const history = useHistory();

    function onSubmit(evt) {
        evt.preventDefault();
        setUsername(name);
        history.push("/");
    }

    return (<form onSubmit={onSubmit}>
        <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" value={name} onChange={evt => setName(evt.target.value)} />
        </div>
        <div className="form-group mb-2">
            <label>Password</label>
            <input type="password" className="form-control" />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <Link to="/" className="btn btn-secondary">Cancel</Link>
        </div>
    </form>);
}

export default Login;