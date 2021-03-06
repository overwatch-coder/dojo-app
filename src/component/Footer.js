const Footer = () => {
    const date = new Date().getFullYear();

    return ( 
        <footer className="sticky top-[100vh] bg-cyan-900 py-8 font-[poppins] w-screen mt-24">
            <div className="flex justify-center text-sm md:text-base space-x-10 items-center text-light">
                <span>Copyright &copy; Dojo App 
                    <span id="date"> { date } </span>
                </span>
                <span>All Rights Reserved!</span>
            </div>
        </footer>
    );
}
 
export default Footer;