import { Link } from "react-router-dom";



function Levels() {


    return (
        <div className="container">
        <div className="levels">
            <h1>Choose the level</h1>
                <button><Link to="/quiz"> Level 1</Link></button>
                <button><Link to="/quizTwo">Level 2</Link></button>
            </div>
            <div>
                <button><Link to="/welcome">Exit to Welcome Page</Link></button>
            </div>
        </div>
    )
}

export default Levels