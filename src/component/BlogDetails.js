import { useParams, Link, useNavigate } from "react-router-dom";
import FetchAPI from "./FetchAPI";

const BlogDetails = () => {
    const { id } = useParams();
    const { allData: blog, isLoading, error } = FetchAPI(`http://localhost:8000/posts/${id}`);
    const navigate = useNavigate();

    // delete blog with id = blog.id
    const handleDelete = () => {
        fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE"
        }).then(() => {
            navigate('/blogs');
        })
    }

    return ( 
        <div className="flex justify-center items-center">
            {isLoading && <div className="text-center mt-32 text-4xl"> Loading... </div>}
            {error && <div className="text-center text-red-500 mt-32 text-2xl">{error}</div>}
            {blog && (
                <div className="font-[poppins] mt-32 mx-auto container flex flex-col space-y-5 items-start max-w-[70%] shadow-xl px-10 py-8">
                    <div className="flex justify-start space-x-10 items-center text-sm">
                        <span className="italic text-blue-700">Blog Id: {blog.id}</span>
                        <span className="italic text-blue-700">Written By: {blog.author} </span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <span className="text-xl text-cyan-700 font-medium">Blog Title</span>
                        <span>{ blog.title }</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <span className="text-xl text-cyan-700 font-medium">Blog Content</span>
                        <span>{blog.body}</span>
                    </div>
                    <div className="flex items-center space-x-10">
                        <span>
                            <Link to="/blogs" className="py-3 px-4 bg-cyan-600 text-light hover:bg-cyan-700 rounded transition">Back to all blog posts</Link>
                        </span>
                        <button className="text-light bg-red-700 hover:bg-red-800 shadow-sm hover:shadow-lg px-4 py-3 rounded" onClick={handleDelete}>Delete</button>

                        <Link to='update' className="text-light bg-yellow-600 hover:bg-yellow-700 shadow-sm hover:shadow-lg px-4 py-3 rounded">Edit</Link>
                    </div>
                    
                </div>
            )}
        </div>
     );
}
 
export default BlogDetails;