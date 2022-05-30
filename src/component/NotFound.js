import { Link } from "react-router-dom";
import notFound from "../assets/404.png";

const NotFound = () => {
    const is404 = notFound;

    return ( 
        <div className="flex flex-col items-center font-[poppins]">
            <img src={is404} alt="404 page" className="object-cover w-[70%] mt-10" />
            <Link to='/blogs' className="bg-cyan-600 hover:bg-cyan-700 transition text-light px-5 py-3 rounded">Go Back</Link>
        </div>
     );
}
 
export default NotFound;