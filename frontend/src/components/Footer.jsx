import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center p-3">
            <div className="container">
                <p>&copy; {new Date().getFullYear()}  Website . All Rights Reserved.</p>
                <p>
                    <Link to="/" className="text-decoration-none text-body">Home</Link> |
                    <Link  className="text-decoration-none text-body"> About Us</Link> |
                    <Link  className="text-decoration-none text-body"> Contact</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
