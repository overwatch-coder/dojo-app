/* eslint-disable array-callback-return */
import { Link } from "react-router-dom";

    const Blog = ({blogs, title}) => {
    const noBlogs = 'Sorry, no blog posts available to be fetched!';

    return ( 
        <div className="container mx-auto md:max-w-[70%] mt-32">
            { 
            blogs.length === 0 ?
                <h1 className="text-center ml-6 md:ml-0 text-gray-700 font-medium text-4xl py-4">
               { noBlogs }
            </h1> : 
            <h1 className="ml-6 md:ml-0 text-gray-700 font-medium text-4xl py-4">
                {title}
            </h1> 
            }

            {blogs.map(blog => (
                <div className="flex justify-between items-center shadow hover:shadow-xl mt-6 px-10 py-2 hover:border-l-8 hover:border-cyan-600" key={blog.id}>
                    <div className="flex flex-col items-start space-y-3">
                        <Link to={`${blog.id}`} className="capitalize text-xl text-cyan-600">
                            {blog.title}
                        </Link>
                        <span className="text-sm font-light text-gray-500">
                            Author: {blog.author}
                        </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Link to={`${blog.id}`} className="px-3 py-2">
                            <i className="bi bi-eye-fill text-2xl text-green-600"></i>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Blog;