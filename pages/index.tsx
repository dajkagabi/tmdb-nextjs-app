import { useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Footer from '../components/Footer';

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);

            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        };

        fetchMovies();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <main className="p-4">
                <h1 className="text-2xl font-bold mb-4">Popular Movies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {movies && movies.length > 0 ? (
                        movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <div>No movies available</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;