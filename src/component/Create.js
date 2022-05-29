const Create = () => {
    return ( 
        <div className="container mx-auto mt-10 flex justify-center items-center">
            <form action="#" method="POST" className="flex flex-col space-y-7 shadow-xl px-16 py-10 mt-6 rounded-xl w-full md:w-[60%]">
                <h3 className="text-3xl text-center font-medium text-cyan-800 font-[poppins] py-5">
                    Create A New Blog
                </h3>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="title">Blog Title</label>
                    <input type="text" name="title" className="form-input w-full focus:ring-0 focus:border-cyan-600 focus:border-2 rounded placeholder:text-gray-400 peer" placeholder="Enter blog title" />
                </div>
                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="author">Blog Author</label>
                    <input type="text" name="author" className="form-input w-full focus:ring-0 focus:border-cyan-600 focus:border-2 rounded placeholder:text-gray-400"  placeholder="Enter blog title" />
                </div>
                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="body">Blog Body</label>
                    <textarea name="body" className="form-textarea w-full focus:ring-0 focus:border-cyan-600 focus:border-2 rounded placeholder:text-gray-400"  placeholder="Enter blog body" rows="6"></textarea>
                </div>
                <button className="uppercase py-4 px-5 bg-cyan-600 text-light hover:bg-cyan-700 transition rounded w-40">add blog</button>
            </form>
        </div>
     );
}
 
export default Create;