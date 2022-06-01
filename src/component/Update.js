import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Update = ({title, author, body, id}) => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        title: title,
        author: author,
        body: body,
        id: id
    })

    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setInputs((input)=> (
            {...input, [name]: value}
        ))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8000/posts/${id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(inputs)
        })
        .then(()=>{
            navigate('/blogs');
            setError('');
        })
        .catch(err => setError(err.message));

    }


    return ( 
        <div className="container mx-auto mt-20 flex justify-center items-center">
            {error && <h3 className="text-center mt-10 text-red-500 text-xl">{error}</h3>}
        {
            <form method="POST" className="flex flex-col space-y-7 shadow-xl px-16 py-10 mt-6 rounded-xl w-full md:w-[80%] font-[poppins]" onSubmit={handleSubmit}>
                <h3 className="text-3xl text-center font-medium text-cyan-800 py-5">
                    Update Blog with ID - {id}
                </h3>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="title">Blog Title</label>
                    <input type="text" name="title" className="input-form" placeholder="Enter blog title" value={inputs.title} onChange={handleInputChange} />
                </div>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="author">Blog Author</label>
                    <input type="text" name="author" className="input-form" placeholder="modify author name - (optional)" value={inputs.author} onChange={handleInputChange} />
                </div>

                <div className="flex items-start flex-col space-y-2">
                    <label className="text-gray-600" htmlFor="body">
                        Blog Body
                    </label>
                    <textarea name="body" className="input-form"  placeholder="Enter blog body" rows="6" value={inputs.body} onChange={handleInputChange} />
                </div>

                <button className="uppercase py-4 px-5 bg-cyan-600 text-light hover:bg-cyan-700 transition rounded w-40" type="submit">Update blog</button>
            </form>
        }
        </div>
     );
}
 
export default Update;