import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

const MoviesPage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState<string>(''); // Szűrő állapot
    const router = useRouter(); 

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&sort_by=popularity.desc`
            );
            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        };

        fetchMovies();
    }, []);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(filter.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Movies</h1>

          
            <button
                onClick={() => router.back()} 
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Back
            </button>

            {/* Szűrő mező */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={filter}
                    onChange={handleFilterChange}
                    className="border p-2 rounded w-full"
                />
            </div>

            {/* Filmek megjelenítése */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredMovies.map(movie => (
                    <div key={movie.id} className="border p-4 rounded">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto"
                        />
                        <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;