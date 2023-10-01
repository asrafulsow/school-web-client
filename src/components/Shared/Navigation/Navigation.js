import React, { useState } from 'react';

const Navigation = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);

    };
    return (
        <div>
            {/* navigation area */}
            <div className="container">
                <div className="navigation-area">
                    {/* nav-area */}
                    <nav className="bg-blue-500 p-4">
                        <div className="container mx-auto flex justify-between items-center">
                            {/* logo area */}
                            <div className="logo">
                                <img src="" alt="Logo" />
                            </div>
                            <div className="hidden md:flex space-x-4">
                                <a href="/" className="text-white hover:text-gray-300">Home</a>
                                <a href="/about" className="text-white hover:text-gray-300">About</a>
                                <a href="/admission" className="text-white hover:text-gray-300">Admission</a>
                                <a href="/athletic" className="text-white hover:text-gray-300">Athletic</a>
                                <a href="/student-life" className="text-white hover:text-gray-300">Student Life</a>
                            </div>
                            <div className="md:hidden">
                                <button onClick={toggleMenu} className="text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="md:hidden">
                                <div className="flex flex-col space-y-4 bg-blue-500">
                                    <a href="/" className="text-white hover:text-gray-300">Home</a>
                                    <a href="/about" className="text-white hover:text-gray-300">About</a>
                                    <a href="/admission" className="text-white hover:text-gray-300">Admission</a>
                                    <a href="/athletic" className="text-white hover:text-gray-300">Athletic</a>
                                    <a href="/student-life" className="text-white hover:text-gray-300">Student Life</a>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navigation;