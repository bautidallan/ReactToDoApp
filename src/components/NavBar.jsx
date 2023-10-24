import { Link,Outlet } from "react-router-dom";

 export const NavBar=()=>{
    return(
        <div className="flex flex-col justify-between items-center">
            <nav className="flex flex-row justify-between items-center">
                <ul className="flex flex-row justify-between items-center gap-8 p-2">
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/active-tasks'>Active</Link></li>
                    <li><Link to='/done-tasks'>Completed</Link></li>
                </ul>
            </nav>
            <hr className="w-96 h-1"/>
            <Outlet />
        </div>
    )
}