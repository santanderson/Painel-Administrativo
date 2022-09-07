import Dashboard from "./dashboard"
import { BsGraphUp } from 'react-icons/bs'


function Main() {
    
    return (
        <main className="main">
            <ul className="menu">
            <a href="#"><li><BsGraphUp/></li></a>
            </ul>
            <Dashboard />
        </main>
    )
}

export default Main
