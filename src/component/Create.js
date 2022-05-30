import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const inputValueChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((previousInputs) => (
            {...previousInputs, [name]: value}
        ));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:8000/posts', {
            method: "POST",
            headers: {"content-type": 'application/json'},
            body: JSON.stringify(inputs)
        }).then(()=>{
            navigate('/blogs');
        }).catch(err => console.log(err.message));
    }


    return ( 
        <div className="container mx-auto mt-10 flex justify-center items-center">
            <form method="POST" className="flex flex-col space-y-7 shadow-xl px-16 py-10 mt-6 rounded-xl w-full md:w-[60%] font-[poppins]" onSubmit={handleSubmit}>
                <h3 className="text-3xl text-center font-medium text-cyan-800 py-5">
                    Create A New Blog
                </h3>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="title">Blog Title</label>
                    <input type="text" name="title" className="input-form" placeholder="Enter blog title" value={inputs.value} onChange={inputValueChange}/>
                </div>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="author">Blog Author</label>
                    <select name="author" className="input-form" value={inputs.value} onChange={inputValueChange}>
                        <option value="">Select an author</option>
                        <option value="Brainy">Brainy</option>
                        <option value="Overwatch">Overwatch</option>
                        <option value="Danny">Danny</option>
                        <option value="Esther">Esther</option>
                        <option value="Kojo">Kojo</option>
                    </select>
                </div>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="body">
                        Blog Body
                    </label>
                    <textarea name="body" className="input-form"  placeholder="Enter blog body" rows="6" value={inputs.value} onChange={inputValueChange} />
                </div>

                <button className="uppercase py-4 px-5 bg-cyan-600 text-light hover:bg-cyan-700 transition rounded w-40" type="submit">add blog</button>
            </form>
        </div>
     );
}
 
export default Create;