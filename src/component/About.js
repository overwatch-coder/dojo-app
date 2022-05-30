import { Link } from "react-router-dom";
import Cat from "../assets/cat.jpg";

const About = () => {

    const cat = Cat;

    return ( 
        <div className="mx-auto container mt-32 font-[poppins]">
            <h1 className="text-center text-cyan-800 text-3xl md:text-5xl mb-10">About Dojo App</h1>
            <div className="container mx-auto flex flex-col space-y-10 items-center w-[65%]">
                <div className="w-full">
                    <img src={cat} alt="about us - Cat" className="w-full object-contain" />
                </div>
                
                <div className="flex flex-col items-start space-y-4">
                    <span className="text-gray-500">
                    <span className="text-cyan-600 italic text-xl">Welcome to Dojo App</span>, your number one source for all blog posts. We're dedicated to providing you the best of our services, with a focus on dependability and customer service.We're working to turn our passion for world news and posts into a booming online blog website. We hope you enjoy our posts as much as we enjoy offering them to you.
                    </span>
                    <span className="text-cyan-600 italic text-lg">
                        Owner: Overwatch Coder
                    </span>
                    <Link to='/blogs' className="px-5 py-3 text-light bg-cyan-600 hover:bg-cyan-700 transition rounded">Go to blog posts page</Link>
                </div>
            </div>
        </div>
     );
}
 
export default About;