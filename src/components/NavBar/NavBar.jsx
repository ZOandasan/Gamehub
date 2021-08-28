import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        props.setUser(null);
    }

    return (
    <nav>
        <Link to="/games">Games</Link>
        &nbsp; | &nbsp;
        <Link to="/about">About</Link>
        &nbsp; | &nbsp;
        <Link to="/settings">Settings</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {props.user.name}</span>
        &nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    );
}