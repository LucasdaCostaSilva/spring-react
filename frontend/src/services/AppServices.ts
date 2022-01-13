import axios from 'axios';

const base = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

export function getMovie(id: number) {
  return base.get(`/movies/${id}`);
}

export function getMovies(page: number, size: number) {
  return base.get('/movies', { params: { page, size } });
}

export function saveScore(movieId: number, email: string, score: number) {
  return base.put('/scores', { movieId, email, score });
}
