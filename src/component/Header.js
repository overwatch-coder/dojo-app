import { useState } from "react";

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


    return ( 
        <header>
            <nav className="bg-gradient-to-r from-blue-900 to-gray-900 flex items-center justify-between py-5 shadow-xl">
                {/* Logo */}
                <a href="/" className="ml-6 md:ml-16 text-2xl font-serif text-light font-medium">
                    { logo }
                </a>

                {/* Hamburger Menu */}
                <div className="mr-6">
                    <span className="md:hidden cursor-pointer">
                        <i className="bi bi-list text-3xl text-light hover:text-cyan-600 transition" onClick={displayNav}></i>
                    </span>
                </div>

                {/* Navlinks */}
                <ul className="hidden md:flex items-center space-x-10 md:mr-10 text-light font-light font-mono">
                    <a className="uppercase border-b-2 border-cyan-500 hover:text-cyan-500 transition" href="/">Home</a>
                    <a className="uppercase hover:text-cyan-500 transition" href="#about">About</a>
                    <a className="uppercase bg-cyan-600 px-4 py-3 rounded hover:bg-cyan-700 transition" href="#create">Create Blog</a>
                </ul>
            </nav>

            {/* Navlinks - Mobile Responsiveness */}
            <div className={ openOrCloseNav ? "transition duration-[2000] transform -translate-x-[0]" : "transition transform duration-[2000] translate-x-[99.9%]"}>
                <div className="absolute right-0">
                    <ul className="md:hidden flex flex-col space-y-6 items-start bg-blue-900 font-light font-mono px-6 text-light py-6 w-64">
                        <a className="uppercase hover:text-cyan-500 transition" href="/">Home</a>
                        <a className="uppercase hover:text-cyan-500 transition" href="#about">About</a>
                        <a href="#create" className="uppercase bg-cyan-600 px-4 py-3 rounded hover:bg-cyan-700 transition">Create Blog</a>
                    </ul>
                </div>
            </div>
        </header>
     );
}
 
export default Header;