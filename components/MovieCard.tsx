import React from 'react';

interface MovieCardProps {
    movie: {
        id: number;
        title: string;
        overview: string;
        poster_path: string;
    };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="border p-4 rounded shadow">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto"
            />
            <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
            <p className="text-sm">{movie.overview}</p>
        </div>
    );
};


export default MovieCard;