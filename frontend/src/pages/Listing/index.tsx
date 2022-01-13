import { Movie, MoviePage } from "App.types";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { getMovies } from "services/AppServices";

function Listing() {

  const [moviePage, setMoviePage] = useState<MoviePage>();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;

  useEffect(() => {
    getMovies(currentPage, pageSize).then(res => {
      setMoviePage(res.data);
    }).catch(err => {
      console.log(err);
    });

    return () => {
      setMoviePage(undefined);
    }
  }, [currentPage]);

  return (
    <>
      <Pagination pagina={moviePage?.number || 1} total={moviePage?.totalPages || 1} setCurrentPage={setCurrentPage} />
      <div className="container">
        <div className="row">

          {moviePage?.content.map((movie: Movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Listing;
