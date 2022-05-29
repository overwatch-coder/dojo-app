import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const logo = "Dojo App";
    const [openOrCloseNav, setOpenOrCloseNav] = useState(false);

    const displayNav = (event) => {
        const target = event.target;

        ['bi-list', 'bi-x-lg', 'text-2xl', 'text-3xl'].map(item => target.classList.toggle(item));
        
        if(!target.classList.contains('bi-list')){
            setOpenOrCloseNav(true);
        }else{
            setOpenOrCloseNav(false);
        }
    }

    const navLinks = [
        {name: 'Home', url: '/'},
        {name: 'Blogs', url: '/blogs'},
        {name: 'About', url: '/about'},
        {name: 'Create Blog', url: '/create'},
    ];




    return ( 
        <header className="fixed top-0 left-0 w-screen">
            <nav className="bg-gradient-to-r from-blue-900 to-gray-900 flex items-center justify-between py-5 shadow-xl">
                {/* Logo */}
                <Link to="/" className="ml-6 md:ml-16 text-2xl font-[poppins] text-light font-medium">
                    { logo }
                </Link>

                {/* Hamburger Menu */}
                <div className="mr-6">
                    <span className="md:hidden cursor-pointer">
                        <i className="bi bi-list text-3xl text-light hover:text-cyan-600 transition" onClick={displayNav}></i>
                    </span>
                </div>

                {/* Navlinks */}
                <ul className="hidden md:flex items-center space-x-10 md:mr-10 text-light font-light font-[poppins]">
                    {navLinks.map(navLink => (
                        <Link to={navLink.url} key={navLink.name} className={navLink.name !== "Create Blog" ? "uppercase hover:border-b-2 border-cyan-500 hover:text-cyan-500 transition" : "uppercase bg-cyan-600 px-4 py-3 rounded hover:bg-cyan-700 transition"}>{navLink.name}</Link>
                    ))}
                </ul>
            </nav>

            {/* Navlinks - Mobile Responsiveness */}
            <div className={ openOrCloseNav ? "transition duration-[2000] transform -translate-x-[0]" : "transition transform duration-[2000] translate-x-[99.99%]"}>
                <div className="absolute right-0">
                    <ul className="pt-16 md:hidden flex flex-col space-y-10 items-center bg-blue-900 font-light font-[poppins] px-6 text-light py-6 w-screen h-screen">
                        {navLinks.map(navLink => (
                            <Link to={navLink.url} key={navLink.name} className={navLink.name !== "Create Blog" ? "uppercase hover:border-b-2 border-cyan-500 hover:text-cyan-500 transition" : "uppercase bg-cyan-600 px-4 py-3 rounded hover:bg-cyan-700 transition"} >{navLink.name}</Link>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;