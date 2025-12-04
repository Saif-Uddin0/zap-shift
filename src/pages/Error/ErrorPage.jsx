import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/Error.png'

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <div className="text-center space-y-6">
                <img src={error} alt="" />
                <div className="space-y-2">
                    <h2 className="text-4xl font-semibold text-primary">Page Not Found</h2>
                    <p className="text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
                </div>
                <Link 
                    to="/" 
                    className="inline-block px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-green-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;