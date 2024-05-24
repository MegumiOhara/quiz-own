import { Link } from "react-router-dom";
import Button from "./Buttons";


function Levels() {


    return (
        <div className="container">
        <div className="levels">
            <h1>Choose the level</h1>
                <Button><Link to="/quiz"> Level 1</Link></Button>
                <Button><Link to="/level2">Level 2</Link></Button>
            </div>
            <div>
                <Button><Link to="/welcome">Exit to Welcome Page</Link></Button>
            </div>
        </div>
    )
}

export default Levels