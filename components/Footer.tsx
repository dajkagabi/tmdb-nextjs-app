import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} TMDB Next.js App. All rights reserved.</p>
                <p>
                    <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                        Data provided by TMDB
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;