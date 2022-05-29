import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="mx-auto container flex justify-center items-center mt-32">
            <div className="flex flex-col items-center space-y-10">
                <span className="text-3xl md:text-5xl px-5 py-4 shadow-md font-semibold font-[poppins] text-cyan-700 hover:shadow-xl border-b-4 border-cyan-600 hover:border-cyan-800">
                    Welcome to Dojo Blogs
                </span>
                <span>
                    To see all our posted blogs, 
                    <Link to='/blogs' className="text-xl text-cyan-500 hover:border-b-2 border-cyan ml-2">
                        click here...
                    </Link>
                </span>
            </div>
        </div>
     );
}
 
export default Home;