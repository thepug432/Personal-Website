import { Link } from "react-router-dom";


export default function Example({to, title}) {
    return(
        <div className="text-white bg-red-600 p-3 rounded ml-1">
            <Link to={to}>
                <button>{title}</button>
            </Link>
        </div>
    )
}