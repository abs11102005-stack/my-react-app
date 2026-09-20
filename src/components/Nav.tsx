import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div className="bg-white-100 shadow-sm">
            <nav className="container mx-auto flex justify-between items-center p-4 px-8">
                <img src={Logo} alt="" />
            
                <ul className="flex gap-4 items-center">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                
                <div className="flex gap-4">
                <button>Sign in</button>
                <button className="bg-[#DB2777] text-white px-4 py-2 rounded-full">Sign up</button>
                </div>
            </nav>
        </div>
    );
};

export default Nav;