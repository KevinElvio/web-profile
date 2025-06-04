const Header = () => {
    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg block py-6 text-primary">Kevin Elvio</a>
                    </div>
                    <div className="flex items-center px-4">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className="block lg:flex">
                                <li className="group">
                                    <a href="#home" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Beranda</a>
                                </li>
                                <li className="group">
                                    <a href="#about" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Tentang Saya</a>
                                </li>
                                <li className="group">
                                    <a href="#portfolio" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Portfolio</a>
                                </li>
                                <li className="group">
                                    <a href="#clients" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Skill</a>
                                </li>
                                <li className="group">
                                    <a href="#blog" className="text-base text-dark py-2 mx-8 flex hover:text-primary">Pengalaman</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;