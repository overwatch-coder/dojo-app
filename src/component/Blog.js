/* eslint-disable array-callback-return */
const Blog = ({blogs, title, handleDelete}) => {

    return ( 
        <div className="container mx-auto md:max-w-[70%] mt-10">
            <h1 className="ml-6 md:ml-0 text-gray-700 font-medium text-4xl py-4">{title}</h1>
            {blogs.map(blog => (
                <div className="flex justify-between items-center shadow hover:shadow-xl mt-6 px-10 py-2 hover:border-l-8 hover:border-cyan-600" key={blog.id}>
                    <div className="flex flex-col items-start space-y-3">
                        <a href="#link" className="text-xl text-cyan-600">
                            {blog.title}
                        </a>
                        <span className="text-sm font-light text-gray-500">
                            {blog.author}
                        </span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href="#link" className="px-3 py-2">
                            <i className="bi bi-eye-fill text-xl text-green-600"></i>
                        </a>
                        <span className="px-3 py-2 cursor-pointer" onClick={() => handleDelete(blog.id)}>
                            <i className="bi bi-trash-fill text-xl text-red-600"></i>
                        </span>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Blog;