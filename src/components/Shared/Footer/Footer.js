import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-900 text-white py-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Quick Links</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">Contact Us</h2>
                            <p>Email: info@example.com</p>
                            <p>Phone: +123-456-7890</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;