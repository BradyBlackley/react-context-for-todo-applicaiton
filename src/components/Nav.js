import { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import LoginContext from "../contexts/LoginContext.js";

function Nav() {

    const { username, setUsername } = useContext(LoginContext);
    const history = useHistory();

    const logout = () => {
        setUsername(null);
        history.push("/");
    }

    return(
        <>
        <div className="row">
            <div className="col">
                <h1>ToDo App</h1>
            </div>
            <div className="col">
                <Link to="/add" className={`btn btn-primary ${(username ? "" : "disabled")}`}>Add</Link>
                {username ? <button className="btn btn-dark" onClick={logout}>Logout</button>
                    : <Link to="/login" className="btn btn-light">Login</Link>}
            </div>
        </div>
        </>
    );
}

export default Nav;