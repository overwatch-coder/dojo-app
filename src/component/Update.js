import { useState } from "react";
import { useParams } from "react-router-dom";
import FetchAPI from "./FetchAPI";

const Update = () => {
    const { id } = useParams();
    let [inputs, setInputs] = useState({});
    
    const { allData:blog } = FetchAPI(`http://localhost:8000/posts/${id}`);
    inputs = blog;

    const changeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((input)=> (
            {...input, [name]:value}
        ));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputs);
    }


    return ( 
        <div className="container mx-auto mt-10 flex justify-center items-center">
        {blog &&
            <form method="POST" className="flex flex-col space-y-7 shadow-xl px-16 py-10 mt-6 rounded-xl w-full md:w-[60%] font-[poppins]" onSubmit={handleSubmit}>
                <h3 className="text-3xl text-center font-medium text-cyan-800 py-5">
                    Update Blog with ID - {id}
                </h3>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="title">Blog Title</label>
                    <input type="text" name="title" className="input-form" placeholder="Enter blog title" value={inputs.title} onChange={changeInput} />
                </div>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="author">Blog Author</label>
                    <input type="text" className="input-form" placeholder="modify author name - (optional)" value={inputs.author} onChange={changeInput} />
                </div>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="body">
                        Blog Body
                    </label>
                    <textarea name="body" className="input-form"  placeholder="Enter blog body" rows="6" value={inputs.body} onChange={changeInput} />
                </div>

                <button className="uppercase py-4 px-5 bg-cyan-600 text-light hover:bg-cyan-700 transition rounded w-40" type="submit">Update blog</button>
            </form>
        }
        </div>
     );
}
 
export default Update;