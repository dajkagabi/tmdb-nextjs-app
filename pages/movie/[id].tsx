import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MovieDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    interface Movie {
        title: string;
        poster_path: string;
        overview: string;
        release_date: string;
        vote_average: number;
    }

    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const fetchMovie = async () => {
                try {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
                    
                    if (!response.ok) {
                        throw new Error('Failed to fetch movie data');
                    }
                    const data = await response.json();
                    setMovie(data);
                } catch (error) {
                    console.error(error);
                    setMovie(null);
                } finally {
                    setLoading(false);
                }
            };
            fetchMovie();
        }
    }, [id]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold">{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="my-4" />
                <p className="text-lg">{movie.overview}</p>
                <p className="text-lg">Release Date: {movie.release_date}</p>
                <p className="text-lg">Rating: {movie.vote_average}</p>
            </div>
            <Footer />
        </div>
    );
};

export default MovieDetail;